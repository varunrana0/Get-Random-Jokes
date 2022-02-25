const jokeButton = document.querySelector(".btn");

jokeButton.addEventListener("click", loadRandomJokes);

// function loadRandomJokes(e) {
//   const xhl = new XMLHttpRequest();

//   //grab the inputboc from html
//   const jokeInput = document.querySelector(".joke-value").value;

//   //calll the api
//   xhl.open("GET", `http://api.icndb.com/jokes/random/${jokeInput}`, true);

//   //request from the other page(api)
//   xhl.onload = function () {
//     if (this.status === 200) {
//       let output = "";
//       const response = JSON.parse(this.responseText);
//       if (response.type === "success") {
//         response.value.forEach(function (jokes) {
//           output += `
//           <li>${jokes.joke}</li>`;
//         });
//       } else {
//         output += `<li>Something Went Wrong</li>`;
//       }

//       const jokesArea = document.querySelector(".show-joke");
//       jokesArea.innerHTML = output;
//     }
//   };

//   xhl.send();

//   e.preventDefault();
// }

async function loadRandomJokes(e) {
  e.preventDefault();

  // input
  const jokeInput = document.querySelector(".joke-value").value;

  const response = await fetch(
    `http://api.icndb.com/jokes/random/${jokeInput}`
  );

  const data = await response.json();

  let output = "";
  await data.value.map((jokes) => {
    output += `<li>${jokes.joke}</li>`;
  });
  // ul
  const jokesArea = document.querySelector(".show-joke");

  jokesArea.innerHTML = output;
}
