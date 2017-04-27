function attachTitle(name) {
   return "DR. " + name
}

const fulFilled = Promise.resolve('MANHATTAN')

fulFilled
  .then(attachTitle)
  .then(console.log)
