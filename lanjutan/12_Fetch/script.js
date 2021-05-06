// Latihan Fetch


// $('.search-button').on('click', function () {
//   $.ajax({
//     url: 'http://www.omdbapi.com/?apikey=cb658281&s=' + $('.input-keyword').val(),
//     success: res => {
//       const movies = res.Search
//       let cards = ''
//       movies.forEach(movie => {
//         cards += showCardMovie(movie)
//       })
//       $('.movie-container').html(cards)

//       // modal-detail-button
//       $('.modal-detail-button').on('click', function () {
//         $.ajax({
//           url: 'http://www.omdbapi.com/?apikey=cb658281&i=' + $(this).data('imdbid'),
//           success: dataDetail => {
//             const detailMovie = showDetailMovie(dataDetail)
//             $('.modal-body').html(detailMovie)
//           },
//           error: res => {
//             console.log(res.responseText)
//           }
//         })
//       })
//     },
//     error: res => {
//       console.log(res.responseText);
//     }
//   })
// })


// Fetch
const movie_container = document.querySelector('.movie-container')
const btn_search = document.querySelector('.search-button')
const input_search = document.querySelector('.input-keyword')
const detail_modal = document.querySelector('.modal-body')

btn_search.addEventListener('click', function () {
  movie_container.innerHTML = loading()
  fetch('http://www.omdbapi.com/?apikey=cb658281&s=' + input_search.value)
    .then(res => res.json())
    .then(res => {
      const movies = res.Search
      let cards = '';
      movies.forEach(movie => cards += showCardMovie(movie))
      movie_container.innerHTML = cards

      const movie_details = document.querySelectorAll('.modal-detail-button')
      movie_details.forEach(btn => {
        btn.addEventListener('click', function () {
          detail_modal.innerHTML = loading()
          const imdbID = this.dataset.imdbid
          fetch('http://www.omdbapi.com/?apikey=cb658281&i=' + imdbID)
            .then(res => res.json())
            .then(res => {
              let details = showDetailMovie(res)
              detail_modal.innerHTML = details
            })
        })
      })
    })
})





function showCardMovie(movie) {
  return `<div class="col-md-3">
            <div class="card mt-4">
              <img src="${movie.Poster || loading()}" class="card-img-top">
              <div class="card-body">
                <h5 class="card-title">${movie.Title}</h5>
                <div class="card-subtitle mb-2 text-muted">${movie.Type}</div>
                <button type="button" class="btn btn-primary modal-detail-button" data-bs-toggle="modal" data-bs-target="#modalDetailMovie" data-imdbid="${movie.imdbID}">
                  Show Details
                </button>
              </div>
          </div>
        </div>`
}

function showDetailMovie(movie) {
  return `<div class="container-fluid">
            <div class="row">
              <div class="col-md-3 mb-3">
                <img src="${movie.Poster}" alt="img-fluid" style="width: fit-content;" class="img-thumbnail mx-auto">
              </div>
              <div class="col-md">
                <ul class="list-group">
                  <li class="list-group-item"><h4>${movie.Title}</h4></li>
                  <li class="list-group-item"><strong>Director: </strong>${movie.Director}</li>
                  <li class="list-group-item"><strong>Writer: </strong>${movie.Writer}</li>
                  <li class="list-group-item"><strong>Actors: </strong>${movie.Actors}</li>
                  <li class="list-group-item"><strong>Released: </strong>${movie.Year}</li>
                  <li class="list-group-item"><strong>Runtime: </strong>${movie.Runtime}</li>
                  <li class="list-group-item"><strong>Genre: </strong>${movie.Genre}</li>
                  <li class="list-group-item"><strong>Language: </strong>${movie.Language}</li>
                  <li class="list-group-item"><strong>Plot: </strong>${movie.Plot}</li>
                </ul>
              </div>
            </div>
          </div>`
}

function loading() {
  return `
    <div class="d-flex justify-content-center">
      <div class="spinner-border text-primary" style="width: 150px; height: 150px;" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  `
}