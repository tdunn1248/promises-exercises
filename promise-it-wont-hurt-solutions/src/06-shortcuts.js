const myPromise = Promise.resolve("MISSION SUCCESS!")

const rejPromise = Promise.reject("YOU HAVE BEEN REJECTED")

myPromise.then(console.log)

rejPromise.catch(console.log)
