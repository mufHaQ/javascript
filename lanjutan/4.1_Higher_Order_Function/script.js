// Higher Order Function

function repeat(n, action = console.log) {
  for (let i = 1; i <= n; i++) {
    action(i)
  }
  return `Anda telah mengulang sebanyak ${n} kali.`
}