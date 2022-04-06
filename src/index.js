// getUrl = "http://www.omdbapi.com/?s=harry potter&apikey=adf1f2d7"

// postUrl = https://reqres.in/api/register

// rehersal
// const setBtnAttr = (button, attr, val) => {
//   button.setAttribute(attr, val);
// };

// const btn = document.querySelector(".btn");
// btn.addEventListener("click", (e) => {
//   e.currentTarget.innerText = "Disabled";

//   setBtnAttr(e.currentTarget, "disabled", "");
// });

// get request

// const results = document.querySelector(".list-inline");

// const form = document.querySelector("form");

// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   //   console.log(event);
//   const input = document.querySelector("input");
//   const query = input.value;
//   showResults(query);
// });
// const showResults = (query) => {
//   const getUrl = `http://www.omdbapi.com/?s=${query}&apikey=adf1f2d7`;
//   fetch(getUrl)
//     .then((response) => response.json())
//     .then((data) => {
//       // console.log(data);
//       const movies = data.Search;
//       // console.log(movies);
//       results.innerHTML = "";
//       movies.forEach((movie) => {
//         results.insertAdjacentHTML(
//           "beforeend",
//           `<li class="list-inline-item">
//       <img src="${movie.Poster}" alt="">
//       <p>${movie.Title}</p>
//       </li>`
//         );
//       });
//     });
// };
// showResults("harry potter");

// post request
const form = document.querySelector("form");

const register = () => {
  const url = "https://reqres.in/api/register";
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  console.log(email, password);
  fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email,
      password,
    }),
  })
    .then((response) => response.json())
    .then(
      (data) => console.log(data)
      //   window.alert(`Sign up successful! Your token is ${data.token}`)
    );
};
form.addEventListener("submit", (event) => {
  event.preventDefault();
  //   console.log(event);
  register();
});
