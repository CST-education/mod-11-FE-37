// setTimeout(callback, time, остальные аргументы передаются в колбек)
// real time = 0...4ms || 15ms

function showMessage(msg) {
  console.log(msg)
}
setTimeout(showMessage, 2000, '1 timeout')
setTimeout(showMessage, 0, '2 timeout')

console.log(`My 1 Console`)
console.log(`My 1 Console`)
console.log(`My 1 Console`)

setTimeout(showMessage, 1000, '3 timeout')

console.log(`My 1 Console`)
console.log(`My 1 Console`)
console.log(`My 1 Console`)
console.log(`My 1 Console`)
console.log(`My 1 Console`)
console.log(`My 1 Console`)
