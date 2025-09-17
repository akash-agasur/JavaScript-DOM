let progress = document.querySelector(".progress");
let bar = document.querySelector(".bar");
let value = document.querySelector(".value");

let count = 0;

let stopper = setInterval(function () {
  if (count === 100) {
    clearInterval(stopper);
  }
  bar.style.width = count + "%";
  value.textContent = count + "%";
  value.style.fontSize = count * 5 + "px";
  //   bar.style.width="10%"
  count++;
}, 150);
