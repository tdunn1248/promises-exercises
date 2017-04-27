let http = require('q-io/http')

http.read('http://localhost:7000')
  .then( (theId) => {
    return http.read('http://localhost:7001/' + theId)
  })
  .then(JSON.parse)
  .then(console.log)
  .done()
