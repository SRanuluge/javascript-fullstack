// Creating a promise method. The promise will get resolved when timer times out after 6 seconds.
let myPromise = new Promise((resolve, _) => {
  setTimeout(() => {
    resolve("promise resolved");
  }, 6000);
});

// console log before calling the promise
console.log("Before calling promise");

// call the promise and wait for it to be resolved and then print a message.
myPromise.then((successMessage) => {
  console.log("From callback " + successMessage);
});

//Consolde log after calling the promise

console.log("After calling promise");
