// const start = document.querySelector(".start");
// const stop = document.querySelector(".stop");
// let h3 = document.querySelector("h3");
// // let interval;
// let count = 0;
// start.addEventListener("click", function () {
//   interval = setInterval(function () {
//     h3.textContent = count;
//     count++;
//   }, 1000);
// });

// stop.addEventListener("click", function () {
//   clearInterval(interval);
// });

// let date = new Date()
// console.log(date);

// console.log(date.getDate());
// console.log(date.getDay());
// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getSeconds());
// console.log(date.getMonth());
// console.log(date.getFullYear());

let hours = document.querySelector(".hours");
let minutes = document.querySelector(".minutes");
let seconds = document.querySelector(".seconds");
let btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  let date = new Date();
  hours.textContent = date.getHours();
  minutes.textContent = date.getMinutes();
  seconds.textContent = date.getSeconds();
});
