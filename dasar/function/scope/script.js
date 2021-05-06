// Scope

// var a = 10
// function test() {
//   // name conflict
//   var a = 20
// }
// test()
// console.log(a)

var a = 10
function test(a) {
  console.log(a)
}
test(20)