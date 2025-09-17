let getUser = document.querySelector(".get-user");
let parent = document.querySelector(".parent");
getUser.addEventListener("click", () => {
  fetch("https://randomuser.me/api/")
    .then((res) => res.json())
    .then((data) => {
      console.log(data.results[0].name.first);
      parent.innerHTML += `<div class="box h-[400px] border-2 w-[350px] rounded-xl m-5 text-center">
        <h2 class="p-3 font-bold">${data.results[0].name.first}</h2>
        <img
          class="pl-7 pr-7 h-[200px] w-[350px]"
          src=${data.results[0].picture.large}
          alt="vinay-begar"
        />
        <p class="font-bold p-4">
          email: <span class="font-extralight"> ${data.results[0].email}</span>
        </p>
        <p class="font-bold">
          address:
          <span class="font-extralight"
            >${data.results[0].location.street.name} ${data.results[0].location.city}<br />
            ${data.results[0].location.state}${data.results[0].location.country}${data.results[0].location.postcode}</span
          >
        </p>
      </div>`;
    });
});
