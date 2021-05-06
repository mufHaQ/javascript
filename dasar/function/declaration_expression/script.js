function print1(a) {
  return a
}

function clog(txt) {
  console.log(txt)
}

let print2 = function(a) {
  return a
}

print1(clog("Hello World-1!"))
print2(clog("Hello World-2!"))