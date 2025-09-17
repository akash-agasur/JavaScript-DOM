// let h1 = document.querySelector("h1");
// h1.innerHTML = `<ul><li>breakfast</li><li>lunch</li></ul>`;
// console.log(h1);

// h1.innerText="riya"
// h1.textContent="riya"
// h1.style.color="grey"

// let obj={
//     name:"hacker"
// }

// obj.name="putin"
// console.log(obj);

//get and set attributes
// function updateImage() {
//   const img = document.getElementById("myImage");

//   // Get current attributes
//   console.log(img.getAttribute("src")); // "old-image.jpg"
//   console.log(img.getAttribute("data-category")); // "nature"

//   // Set new attributes
//   img.setAttribute(
//     "src",
//     "https://images.unsplash.com/photo-1754244774221-cc8fcd5d0dcd?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//   );
//   img.setAttribute("alt", "New Image");
//   img.setAttribute("data-category", "landscape");
// }

//select multiple elements

// function highlightItems() {
//   const items = document.querySelectorAll(".item");
//   console.log(items);

//   // Using forEach
//   items.forEach((item, index) => {
//     item.style.backgroundColor = "yellow";
//     item.style.fontWeight = "bold";
//     item.style.fontSize = "20px"
//     item.textContent += ` (Highlighted ${index + 1})`;
//   });
// }

// let h3 = document.querySelectorAll("h3");

// function change() {
//   h3.forEach((item, index) => {
//     if (index > 2) {
//       item.textContent += " Google";
//     }
//   });
// }

// function updateHTML() {
//     const container = document.getElementById("container");

//     // Get current HTML
//     console.log(container.innerHTML); // "<p>Original content</p>"

//     // Set new HTML content
//     container.innerHTML = `
//         <h2>New Title</h2>
//         <p>This is <strong>bold</strong> text</p>
//         <ul>
//             <li>Item 1</li>
//             <li>Item 2</li>
//         </ul>
//     `;
// }

// function toggleStyles() {
//   const div = document.getElementById("myDiv");

//   // Toggle multiple classes
//   div.classList.toggle("highlight");
//   div.classList.toggle("large-text");

//   // Check if class exists
//   if (div.classList.contains("highlight")) {
//     console.log("Element is highlighted!");
//   }

//   // Add class conditionally
//   if (div.textContent.includes("Click")) {
//     div.classList.add("interactive");
//   }
// }

// function changePara(){
//   let ready = document.querySelector(".ready");
//   console.log(ready);

//   //element.classList.add("className");
// //   ready.classList.add("highlight")
// //   ready.classList.remove("ready");

//     // ready.classList.toggle('highlight')
//     ready.classList.replace("ready", "highlight");

// }

// let parent = document.querySelector(".parent");

// const h1 = document.createElement("h1");
// h1.textContent = "Vinay.JavaScript";
// parent.appendChild(h1);

// JavaScript
// function addElements() {
//     const container = document.getElementById("container");

//     // Method 1: innerHTML
//     container.innerHTML += "<p>Added with innerHTML</p>";

//     // Method 2: createElement
//     const newDiv = document.createElement("div");
//     newDiv.textContent = "Added with createElement";
//     newDiv.style.color = "blue";
//     container.appendChild(newDiv);

//     // Method 3: insertAdjacentHTML
//     container.insertAdjacentHTML("beforeend", "<span>Added with insertAdjacentHTML</span>");
// }

// function addTodo() {
//   const input = document.getElementById("todoInput");
//   const todoList = document.getElementById("todoList");

//   if (input.value.trim() === "") return;

//   // Create new todo item
//   const todoItem = document.createElement("div");
//   todoItem.className = "todo-item";
//   todoItem.style.padding = "10px";
//   todoItem.style.border = "1px solid #ccc";
//   todoItem.style.margin = "5px 0";

//   // Create text span
//   const todoText = document.createElement("span");
//   todoText.textContent = input.value;

//   // Create delete button
//   const deleteBtn = document.createElement("button");
//   deleteBtn.textContent = "Delete";
//   deleteBtn.onclick = () => todoItem.remove();

//   // Assemble todo item
//   todoItem.appendChild(todoText);
//   todoItem.appendChild(deleteBtn);
//   todoList.appendChild(todoItem);

//   // Clear input
//   input.value = "";
// }

function insertContent() {
  const mainContent = document.getElementById("main-content");

  // Insert before the entire div
  mainContent.insertAdjacentHTML(
    "beforebegin",
    "<header>Header inserted before</header>"
  );

  // Insert at the beginning inside the div
  mainContent.insertAdjacentHTML(
    "afterbegin",
    "<p><em>Inserted at beginning</em></p>"
  );

  // Insert at the end inside the div
  mainContent.insertAdjacentHTML(
    "beforeend",
    "<p><strong>Inserted at end</strong></p>"
  );

  // Insert after the entire div
  mainContent.insertAdjacentHTML(
    "afterend",
    "<footer>Footer inserted after</footer>"
  );
}
