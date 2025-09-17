let name = document.querySelector("#name");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let userDetails = document.querySelector("#userDetails");
let btn = document.querySelector("#btn");
let h3 = document.querySelector("h3");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  if (name.value === "" && email.value === "" && password.value === "") {
    h3.textContent = "Form submitted Empty";
  } else {
    console.log(name.value, email.value, password.value);
    h3.textContent = "Form submitted Successfully";
  }
  userDetails.reset();
});
