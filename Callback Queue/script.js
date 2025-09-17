// function greet(name, callback) {
//   console.log("Hi " + name);
//   callback();
// }

// function sayBye() {
//   console.log("Bye!");
// }

// greet("Alice", sayBye);

// console.log("Start");

// setTimeout(() => {
//   console.log("Step 1");
//   setTimeout(() => {
//     console.log("Step 2");
//     setTimeout(() => {
//       console.log("Step 3");
//       setTimeout(() => {
//         console.log("Step 4");
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

// console.log("App started");

// setTimeout(() => {
//   console.log("Connecting to database...");

//   setTimeout(() => {
//     console.log("Fetching user data...");

//     setTimeout(() => {
//       console.log("User data fetched");

//       setTimeout(() => {
//         console.log("Processing data...");

//         setTimeout(() => {
//           console.log("Data processed");

//           setTimeout(() => {
//             console.log("Saving data...");

//             setTimeout(() => {
//               console.log("Data saved successfully!");

//               setTimeout(() => {
//                 console.log("Sending confirmation email...");

//                 setTimeout(() => {
//                   console.log("Email sent. All operations completed.");
//                 }, 1000);
//               }, 4000);
//             }, 3000);
//           }, 2000);
//         }, 1000);
//       }, 4000);
//     }, 3000);
//   }, 2000);
// }, 1000);

// loginUser("alice@email.com", function (loginError, user) {
//   if (loginError) {
//     console.error("Login failed:", loginError);
//     return;
//   }

//   getUserPosts(user.id, function (postsError, posts) {
//     if (postsError) {
//       console.error("Failed to get posts:", postsError);
//       return;
//     }

//     getComments(posts[0].id, function (commentsError, comments) {
//       if (commentsError) {
//         console.error("Failed to get comments:", commentsError);
//         return;
//       }

//       updateUserActivity(user.id, function (updateError, result) {
//         if (updateError) {
//           console.error("Failed to update activity:", updateError);
//           return;
//         }

//         console.log("All operations completed!");
//         console.log("Comments:", comments);
//         // This could go even deeper!
//       });
//     });
//   });
// });

// setTimeout(() => {
//   console.log("Hello");
//   setTimeout(() => {
//     console.log("World");
//   }, 1000);
// }, 2000);

// setTimeout(() => {
//   console.log("Hello");
// }, 2000);

// setTimeout(() => {
//   console.log("world");
// }, 1000);

// const promise = new Promise((resolve, reject) => {
//   // Asynchronous operation
//   let success = false;
//   if (success) {
//     resolve("Operation Successful!");
//     console.log("Operation Successful!");

//   } else {
//     reject("Error occurred.");
//     console.log("Operation Unsucessful!");
//   }
// });

// function fetchData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const success = Math.random() > 0.5;
//       if (success) {
//         resolve("Data fetched successfully!");
//         console.log(success);
//       } else {
//         reject("Failed to fetch data");
//         console.log(success);
//       }
//     }, 0);
//   });
// }

// fetchData()
//   .then((resolve) => console.log(resolve))
//   .catch((reject) => console.error(reject));

// Instead of callback hell:
// getUser(123, function(err, user) {
//     getUserPosts(user.id, function(err, posts) {
//         getComments(posts[0], function(err, comments) {
//             console.log(comments);
//         });
//     });
// });

// // Use Promise chaining:
// getUser(123)
//     .then(user => getUserPosts(user.id))
//     .then(posts => getComments(posts[0]))
//     .then(comments => console.log(comments))
//     .catch(error => console.error("Error:", error));

// function delay(message, time) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log(message);
//       resolve();
//     }, time);
//     if (false) {
//       reject("Failed to fetch data");
//     }

//   });
// }

// // Chaining the operations
// delay("Connecting to database...", 1000)
//   .then(() => delay("Fetching user data...", 2000))
//   .then(() => delay("User data fetched", 3000))
//   .then(() => delay("Processing data...", 4000))
//   .then(() => delay("Data processed", 1000))
//   .then(() => delay("Saving data...", 2000))
//   .then(() => delay("Data saved successfully!", 3000))
//   .then(() => delay("Sending confirmation email...", 4000))
//   .then(() => delay("Email sent. All operations completed.", 1000))
//   .catch((reject) => console.log(reject, "error occured"));

// const orderPizza = new Promise((resolve, reject) => {
//   let pizzaReady = true;

//   setTimeout(() => {
//     if (pizzaReady) {
//       resolve(function () {
//         return "Hello";
//       });
//     } else {
//       reject("Pizza could not be made 😞");
//     }
//   }, 2000);
// });

// orderPizza
//   .then((message) => console.log(message()))
//   .catch((error) => console.log(error));

// Microtasks (higher priority)
// Promise.resolve().then(() => console.log('Microtask'));

// // Macrotasks (lower priority)
// setTimeout(() => console.log('Macrotask'), 0);

// function returning a promise
// function fetchUserData(userId) {
//   return new Promise((resolve, reject) => {
//     const users = { 1: "Alice", 2: "Bob", 3: "Charlie" };

//     setTimeout(() => {
//       if (users[userId]) {
//         resolve({ id: userId, name: users[userId] });
//       } else {
//         reject(`User with ID ${userId} not found`);
//       }
//     }, 1000);
//   });
// }

// // Usage
// fetchUserData(8)
//   .then((user) => console.log("User:", user.name))
//   .catch((error) => console.log("Error:", error));

// // Promise.resolve example
// Promise.resolve(5)
//     .then(value => {
//         console.log('Initial value:', value); // 5
//         return value * 2;
//     })
//     .then(value => {
//         console.log('Doubled value:', value); // 10
//         return value + 10;
//     })
//     .then(value => {
//         console.log('Final value:', value); // 20
//     });

// Chaining with string manipulation
// Promise.resolve('hello')
//     .then(str => str + ' world')
//     .then(str => str.toUpperCase())
//     .then(str => console.log(str)); // HELLO WORLD
