// Make Objects


// 1. Object Literal
var obj1 = {
  string1: 'asdasdasd',
  string2: 'adfadfadf',
  string3: 'afgafgafg'
}


// 2. Function Declaration
function obj2(string1, string2, string3) {
  var obj = {}
  obj.string1 = string1
  obj.string2 = string2
  obj.string3 = string3
  return obj
}
let oj2 = obj2('asdasdasd', 'adfadfadf', 'afgafgafg')


// 3. Constructor
function obj3(string1, string2, string3) {
  // var this
  this.string1 = string1
  this.string2 = string2
  this.string3 = string3
  // return this
}
let oj3 = new obj3('asdasdasd', 'adfadfadf', 'afgafgafg')