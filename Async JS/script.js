// setTimeout(()=>{
//     console.log("Hello From SetTimout");
// }, 3000)

// console.log("Hello from outside");
// console.log(window);

// console.log("First");
// console.log("Second");

// // Asynchronous execution
// setTimeout(() => console.log("Async"),0);
// console.log("Third");
// console.log("forth");
// console.log("forth");
// console.log("forth");
// console.log("forth");
// console.log("forth");
// console.log("forth");
// console.log("forth");

console.log("Before setTimeout");

setTimeout(function () {
  console.log("This runs after 0 seconds");
}, 0);

console.log("After setTimeout");

setTimeout(() => {
  console.log("This runs after 1 second");
}, 1000);
