axios
  .get("https://jsonplaceholder.typicode.com/users/1")
  .then((response) => {
    console.log(response.data.phone);
  })
  .catch((error) => {
    console.error("Axios Error:", error.message);
  });
