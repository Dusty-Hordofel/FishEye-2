//Mettre le code JavaScript lié à la page photographer.html

console.log("DUE");

//
let urlPhotographerId = Number(getUrlParameter("id"));
console.log(
  "🚀 ~ file: photographer.js:7 ~ urlPhotographerId:",
  urlPhotographerId
);

// retrieve id from url
let params = new URLSearchParams(document.location.search);
let id = params.get("id");
console.log("🚀 ~ file: photographer.js:28 ~ id:", id);
