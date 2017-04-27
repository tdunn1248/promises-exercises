let printFulfilled = function() {
  console.log('FULFILLED!')
}

const promise = new Promise(function(resolve) {
  setTimeout(printFulfilled, 300)
    resolve(printFulfilled)
})

promise.then(fulFilled => {

}).catch(error => {
    console.log('Something went wrong', error)
})

/* Solution */
// const promise = new Promise(function(fulfill, reject) {
//   setTimeout(function() {
//     fulfill('FULFILLED!')
//   }, 300)
// })
//
// promise.then(console.log)
