function all(prom1, prom2) {
  return new Promise((resolve, reject) => {
    let counter = 0
    let promises = []

    function count() {
      counter++
      if (counter === 2) resolve(promises)
    }

    prom1
      .then((val) => {
        promises[0] = val
        count()
      })

    prom2
      .then((val) => {
        promises[1] = val
        count()
      })
  });
}

all(getPromise1(), getPromise2())
  .then(console.log)
