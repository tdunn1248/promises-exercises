let http = require('q-io/http')

return http.read('http://localhost:1337')
  .then(JSON.parse)
  .then(console.log)
  .done()
