let minus = document.querySelector(".minus");
let plus = document.querySelector(".plus");
let counter = document.querySelector(".counter");
let miniImage1 = document.querySelector(".img1");
let miniImage2 = document.querySelector(".img2");
let miniImage3 = document.querySelector(".img3");
let miniImage4 = document.querySelector(".img4");
let mainImage1 = document.querySelector(".imgmain1");
let mainImage2 = document.querySelector(".imgmain2");
let mainImage3 = document.querySelector(".imgmain3");
let mainImage4 = document.querySelector(".imgmain4");
// let mainmodal = document.querySelector("mainmodal");
// let modal1 = document.querySelector("modal1");
// let modal2 = document.querySelector("modal2");
// let modal3 = document.querySelector("modal3");
// let modal4 = document.querySelector("modal4");
let menubar = document.querySelector(".menubar");
let menu1 = document.querySelector(".menu1");
let menu2 = document.querySelector(".menu2");
let menu3 = document.querySelector(".menu3");
let menu4 = document.querySelector(".menu4");
let menu5 = document.querySelector(".menu5");





let count = 0;
minus.addEventListener("click", () => {
  if (count > 0) {
    count--;
    counter.innerHTML = count;
  }
});
plus.addEventListener("click", () => {
  count++;
  counter.innerHTML = count;
});

let cartIcon = document.querySelector(".cart-icon");
let cartDropdown = document.querySelector(".cart-dropdown");

cartIcon.addEventListener("click", () => {
  cartDropdown.style.display =
    cartDropdown.style.display === "block" ? "none" : "block";
});

document.addEventListener("click", (e) => {
  if (!e.target.closest(".cart-container")) {
    cartDropdown.style.display = "none";
  }
});

let cartbtn = document.querySelector(".cartbtn");
let shoe = document.querySelector(".imgmain");
// let cartDropdown = document.querySelector(".cartDropdown");

let product = {
  name: "Fall Limited Edition Sneakers",
  price: 125,
  quantity:0,
};

cartbtn.addEventListener("click", function () {
  console.log("click");

  cartDropdown.style.display = "block";
  cartDropdown;
  cartDropdown.innerHTML = `

        <p class="fall"><strong>${product.name}</strong></p>
        
       <p>$${product.price} x ${product.quantity} = <strong>$${
    product.price * product.quantity
  }</strong></p>
       <button class="check" onclick="checkout()">Checkout</button>
       
     `;
});

miniImage1.addEventListener("click", () => {
  mainImage1.style.display = "block";
  mainImage2.style.display = "none";
  mainImage3.style.display = "none";
  mainImage4.style.display = "none";
});
miniImage2.addEventListener("click", () => {
    mainImage1.style.display = "none";
    mainImage2.style.display = "block";
    mainImage3.style.display = "none";
    mainImage4.style.display = "none";
  
});
miniImage3.addEventListener("click", () => {
    mainImage1.style.display = "none";
    mainImage2.style.display = "none";
    mainImage3.style.display = "block";
    mainImage4.style.display = "none";
});
miniImage4.addEventListener("click", () => {
  mainImage1.style.display = "none";
  mainImage2.style.display = "none";
  mainImage3.style.display = "none";
  mainImage4.style.display = "block";
});

mainImage1.addEventListener("click",() =>{
// mainmodal.style.display="block"
modal1.style.display="block"
modal1.style.display = "none";
modal1.style.display = "none";
modal1.style.display = "none";


})
menubar.addEventListener("click",() =>{
  menu1.style.display="block";
  menu2.style.display = "block";
  menu3.style.display = "block";
  menu4.style.display = "block";
  menu5.style.display = "block";

} )


