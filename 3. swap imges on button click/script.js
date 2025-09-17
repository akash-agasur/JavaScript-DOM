let subah = document.querySelector(".subah");
let raat = document.querySelector(".raat");
let btn = document.querySelector(".btn");

// console.log(subah.src);
// console.log(raat.src);

btn.addEventListener("click", () => {
  let subahsrc = subah.src;
  let raatsrc = raat.src;
  raat.src = subahsrc;
  subah.src = raatsrc;
});
