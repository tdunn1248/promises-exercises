const parsePromised = () => {
  new Promise (resolve, reject) {
    let parsed = JSON.parse(process.argv[2])
    resolve(parsed)
  }
    .then(console.log)
    .catch(console.log)
}

parsePromised();
