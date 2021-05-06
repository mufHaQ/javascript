// this


// console.log(this)



// 1. Function Declaration
function obj1() {
  console.log(this)
}
obj1()
// this mengembalikan object Global


// 2. Object Literal
var obj2 = {
  clog: function() {
    console.log(this)
  }
}
obj2.nama = 'Ulhaq'
obj2.clog()
// this mengembalikan object dari 'obj2'


// 3. Contructor
function obj1() {
  console.log(this)
}
new obj1()
// this mengembalikan object yang baru dibuat