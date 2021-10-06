// setInterval(callback, time, остальные аргументы передаются в колбек)
// real time = 4ms...Infinity

const intID = setInterval(
  (value) => {
    console.log(value)
  },
  5000,
  'Hello',
)
console.log('intID', intID)

const intID2 = setInterval(
  (value) => {
    console.log(value)
  },
  5000,
  'Hello',
)
console.log('intID', intID2)

const intID3 = setInterval(
  (value) => {
    console.log(value)
  },
  5000,
  'Hello',
)
console.log('intID', intID3)

clearInterval(intID)
clearInterval(intID2)
clearInterval(intID3)

console.log(`my 1 interval`)
console.log(`my 1 interval`)
console.log(`my 1 interval`)
console.log(`my 1 interval`)
