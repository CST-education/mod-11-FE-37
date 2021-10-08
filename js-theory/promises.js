// console.dir(Promise) // конструктор

// // === 1 ===
// const newPromise = new Promise(callback)

// function callback(resolve, reject) {
//   resolve(`Ok`)
//   reject(`ne OK`)
// }

// === 2 ===
let condition = 1
const newPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    condition ? resolve(condition) : reject(condition)
  }, 1000)
})

// console.log(newPromise)

// setTimeout(() => {
//   console.log(newPromise)
// }, 5500)

// экземпляр промиса имеет 2 состояния
// Pending - до исполнения
// Settled - исполнился,
// а как исполнился
// Fulfilled - если все хорошо (вызван resolve)
// Rejected - если все НЕ хорошо (вызван reject)

// == если обрабатывать промис только через then
// newPromise.then(
//   (success) => console.log('1-THEN:', success), // примет р-т от resolve(`Ok`)
//   (error) => console.log('1-THEN:', error), // примет р-т от reject(`ne OK`)
// )

// но лучше, в then обрабатывать успех, а в catch - ошибки
// newPromise
//   .then((success) => console.log('1-THEN:', success))
//   .catch((error) => console.log('1-THEN:', error))

// а когда нам нужно что-то исполнить в любом случае, независимо
// пришел успех или ошибка
// newPromise
//   .then((success) => console.log('2-THEN:', success))
//   .catch((error) => console.log('2-CATCH:', error))
//   .finally(() => {
//     console.log(`Ты молодец в любом наборе!!!`)
//   })

// частенько нам нужно, обработать в несколько этапов успешный промис
// newPromise
//   .then((firstThen) => {
//     console.log('firstThen:', firstThen)
//     return firstThen + 1
//   })
//   .then((secondThen) => {
//     console.log('secondThen:', secondThen)
//     return secondThen + 2
//   })
//   .then((thirdThen) => console.log('thirdThen:', thirdThen))
//   .catch((error) => console.log('CATCH:', error))
//   .finally(() => {
//     console.log(`Ты молодец в любом наборе!!!`)
//   })

// ХОЧУ ОБРАБОТАТЬ НЕСКОЛЬКО РАЗНЫХ ПРОМИСОВ СРАЗУ
const prom1 = new Promise((res, rej) => {
  setTimeout(() => {
    res(1)
  }, 1000)
})
const prom2 = new Promise((res, rej) => {
  setTimeout(() => {
    res(2)
  }, 500)
})
const prom3 = new Promise((res, rej) => {
  setTimeout(() => {
    // rej(3)
  }, 5000)
})

// Promise.all([prom1, prom2, prom3])
//   .then((ok) => {
//     console.log('ok:', ok)
//   })
//   .catch((error) => {
//     console.log('error:', error)
//   })

// Promise.race([prom1, prom2, prom3])
//   .then((ok) => {
//     console.log('ok:', ok)
//   })
//   .catch((error) => {
//     console.log('error:', error)
//   })

// Promise.resolve(1) // SUCCESS
// // new Promise((res) => {
// //   res(1)
// // })

// Promise.reject(0) // ERROR
// // new Promise((rej) => {
// //   rej(0)
// // })

// Promise.finally()

// ne gut
function main(ok, neOk) {
  condition ? ok() : neOk()
}

// gut
condition = 0
function mainProm() {
  return condition ? Promise.resolve(`ok`) : Promise.reject(`ne Ok`)
}
const result = mainProm()
console.log(result)

result
  .then((ok) => {
    console.log(ok)
  })
  .catch((error) => {
    console.log(error)
  })
