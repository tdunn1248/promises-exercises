

const getAll = (promise1, promise2) => {

  let counter = 0
  let promiseArray = new Promise (function(resolve, reject) {
    let arr = [];
    let promiseUno = promise1
    let promiseDos = promise2
      if (arr.length < 1) {
        arr.push(promiseUno)
    } else if (arr.length = 1 && arr.length < 3) {
        arr.push(promiseDos)
    } else resolve(arr)
  }).then( (promiseAdded) => {
      counter += 1;
  }).then(console.log)

}

getAll(getPromise1(), getPromise2());
