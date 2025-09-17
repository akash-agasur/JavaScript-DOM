let box = document.querySelector(".box");
let btn = document.querySelector(".btn");

//changing style of an element using javascript
// box.style.backgroundColor = "rgb(110,140,150)";

//RGB values ranging from 0 to 255

btn.addEventListener("click", () => {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  console.log(red, green, blue);

  box.style.backgroundColor = `rgb(${red},${green},${blue})`;
});
