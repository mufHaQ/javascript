// Tagged Template Literals


const nama = 'Ulhaq'
const umur = '16 Tahun'

function highlight(strings, ...vals) {
  // let result = ''
  // strings.forEach((str, i) => result += `${str}${vals[i] || ''}`)
  // return result  
  
  return strings.reduce((res, str, i) => `${res}${str}<span>${vals[i] || ''}</span>`, '')
}

const str = highlight`Halo, nama saya ${nama}, umur saya ${umur}.`
document.body.innerHTML = str