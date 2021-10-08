// class Date
console.log(Date)
console.dir(Date)

// create the date
const newDate = new Date()
console.log(newDate)
// () => object Date current

// ('mon dd, yyyy') => object Date this
const fixDate = new Date(`sep 11, 2011`)
console.log(fixDate)

// (yyyy, mm, dd, hh, mm, ss, ms) => object Date this
const numDate = new Date(1990, 6, 11, 16, 30, 33)
console.log('numDate: ', numDate)

// Unix - ms from 1 January 1970 UTC
// Date.now() => Unix ms
const unixDate = Date.now()
console.log('unixDate:', unixDate)

// (1000000000000000) => object Date this
const dateFromMS = new Date(1933540869358)
// Thu Apr 10 2031 01:41:09
console.log('dateFromMS:', dateFromMS)
// getters
console.log('getDay():', dateFromMS.getDay()) // 4
console.log('getMonth():', dateFromMS.getMonth()) // 3
console.log('getDate():', dateFromMS.getDate()) // 10
console.log('getFullYear()', dateFromMS.getFullYear()) // 2031
console.log('getHours()', dateFromMS.getHours()) // 1
console.log('getMinutes()', dateFromMS.getMinutes()) // 41
console.log('getSeconds()', dateFromMS.getSeconds()) // 9
console.log('getMilliseconds()', dateFromMS.getMilliseconds()) // 358
