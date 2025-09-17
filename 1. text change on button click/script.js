let text = document.querySelector(".text");
let btn = document.querySelector(".change");
// console.log(btn);

btn.addEventListener("click", function (event) {
  console.log(event);
  //innerHTML is used for change inner HTML of the element
  text.innerHTML = `<p><i>AKASH</i></p>`;
  //textContent is always used only for changing the text
//   text.textContent = `<p><i>AKASH</i></p>`
});
