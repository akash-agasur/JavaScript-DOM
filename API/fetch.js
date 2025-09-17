// fetch("https://jsonplaceholder.typicode.com/posts/1")
//   .then((response) => {
//     console.log("Status:", response.status);
//     return response.json();//converting the response into json
//   })
//   .then((data) => {
//     console.log("Post Title:", data.title);
//     console.log("Post Body:", data.body);
//   })
//   .catch((error) => console.error("Error:", error));

//syntax
// fetch("https://jsonplaceholder.typicode.com/posts/1").then((res)=>{
//     console.log(res.status);
//     console.log(res.json());
// })

let name = document.querySelector(".name");
let username = document.querySelector(".username");
let email = document.querySelector(".email");

fetch("https://jsonplaceholder.typicode.com/users/10")
  .then((res) => {
    console.log(res.status);
    return res.json();
  })
  .then((data) => {
    console.log(data);
    name.textContent = data.name;
    username.textContent = data.username;
    email.textContent = data.email;
  })
  .catch((error) => console.error(error));
