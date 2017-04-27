
const alwaysThrows = function() {
  console.log(["Error: OH NOES"])
}

const iterate = function(arg) {
  console.log(arg)
  return arg += 1
}


iterate(1).then(iterate).catch(console.log)
