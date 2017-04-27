const always = new Promise(function(fulfill, reject) {
  fulfill('PROMISE VALUE')
})

always.then(console.log)

console.log('MAIN PROGRAM')
