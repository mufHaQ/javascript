// Fetch Refactoring

// const btn_search = document.querySelector('.search-button')
// const input_search = document.querySelector('.input-keyword')
// const movie_container = document.querySelector('.movie-container')
// const detail_modal = document.querySelector('.modal-body')

// btn_search.addEventListener('click', function () {
//   if (input_search.value) {
//     movie_container.innerHTML = loading()
//     fetch('http://www.omdbapi.com/?apikey=cb658281&s=' + input_search.value)
//       .then(res => res.json())
//       .then(res => {
//         let movies = ''
//         res.Search.forEach(movie => {
//           movies += showCardMovie(movie)
//         })
//         movie_container.innerHTML = movies
//         const btn_detail = document.querySelectorAll('.detail-movie-button')
//         btn_detail.forEach(btn => {
//           btn.addEventListener('click', function () {
//             detail_modal.innerHTML = loading()
//             const omdbID = this.dataset.omdbid
//             fetch('http://www.omdbapi.com/?apikey=cb658281&i=' + omdbID)
//               .then(res => res.json())
//               .then(res => {
//                 let details = showDetailMovie(res)
//                 detail_modal.innerHTML = details
//               })
//           })
//         })
//       })
//   } else {
//     movie_container.innerHTML = ''
//   }
// })




// Refactoring

const btn_search = document.querySelector('.search-button')
const input_search = document.querySelector('.input-keyword')
const movie_container = document.querySelector('.movie-container')
const detail_modal = document.querySelector('.modal-body')

btn_search.addEventListener('click', async () => {
  if (input_search.value) {
    const movies = await getMovies(input_search.value)
    updateUI(movies)
  } else {
    movie_container.innerHTML = ''
  }
})

function getMovies(keyword) {
  movie_container.innerHTML = loading()
  return fetch('http://www.omdbapi.com/?apikey=cb658281&s=' + keyword)
    .then(res => res.json())
    .then(res => res.Search)
}

function updateUI(data) {
  if (data) {
    let cards = ''
    data.forEach(card => cards += showCardMovie(card))
    movie_container.innerHTML = cards
  } else {
    movie_container.innerHTML = ''
  }
}

// Event Binding
document.addEventListener('click', async function (el) {
  if (el.target.classList.contains('detail-button')) {
    const omdbID = el.target.dataset.omdbid
    detail_modal.innerHTML = loading()
    const details = await getMovieDetail(omdbID)
    updateUIDetail(details)
  }
})

function getMovieDetail(id) {
  return fetch('http://www.omdbapi.com/?apikey=cb658281&i=' + id)
    .then(res => res.json())
    .then(res => res)
}

function updateUIDetail(detail) {
  const detail_modal = document.querySelector('.modal-body')
  const movieDetail = showDetailMovie(detail)
  detail_modal.innerHTML = movieDetail
}





function showCardMovie(movie) {
  return `<div class="col-md-3">
            <div class="card mt-4">
              <img src="${movie.Poster || ''}" class="card-img-top">
              <div class="card-body">
                <h5 class="card-title">${movie.Title}</h5>
                <div class="card-subtitle mb-2 text-muted">${movie.Type}</div>
                <button type="button" class="btn btn-primary detail-button" data-bs-toggle="modal" data-bs-target="#modalDetailMovie" data-omdbid="${movie.imdbID}">
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
                <img src="${movie.Poster || ''}" alt="img-fluid" style="width: fit-content;" class="img-thumbnail mx-auto">
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