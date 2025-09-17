let minus = document.querySelector(".minus");
let plus = document.querySelector(".plus");
let countPeople = document.querySelector(".count-people");

let count = 0;
minus.addEventListener("click", () => {
  if (count > 0) {
    count--;
    countPeople.innerHTML = count;
  }
});
plus.addEventListener("click", () => {
  count++;
  countPeople.innerHTML = count;
});
