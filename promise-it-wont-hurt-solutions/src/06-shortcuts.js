const myPromise = Promise.resolve("MISSION SUCCESS!")

const rejPromise = Promise.reject("YOU HAVE BEEN REJECTED")

myPromise.then(console.log)

rejPromise.catch(console.log)


// var message;
//     var promise;
//
//     function randomBytes(n) {
//       return (Math.random() * Math.pow(256, n) | 0).toString(16);
//     }
//
//     message =
//       'A fatal exception ' + randomBytes(1) + ' has occurred at ' +
//       randomBytes(2) + ':' + randomBytes(4) + '. Your system\nwill be ' +
//       'terminated in 3 seconds.';
//
//     promise = Promise.reject(new Error(message));
//
//     promise.catch(function (err) {
//       var i = 3;
//
//       process.stderr.write(err.message);
//
//       setTimeout(function boom() {
//         process.stderr.write('\rwill be terminated in ' + (--i) + ' seconds.');
//         if (!i) {
//           process.stderr.write('\n..... . . . boom . . . .....\n');
//         } else {
//           setTimeout(boom, 1000);
//         }
//       }, 1000);
//     });
