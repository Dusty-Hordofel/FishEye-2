class PhotographerApp {
  //Use of the constructor function to create similar objects. It is a special method for creating and initializing an object created within a class.
  constructor() {
    this.$photographerSection = getElement(".photograph-header");

    this.photographersApi = new photographersApi("/data/photographers.json");
  }
  async main() {
    //Retieve data from api
    const photographersData = await this.photographersApi.getMedias();

    //Use destructuring to retrieve utile data
    const { photographers } = photographersData;

    console.log(
      "🚀 ~ file: photographer.js:30 ~ PhotographerApp ~ main ~ photographers:",
      photographers
    );
    console.log(urlPhotographerId);

    //   use photographerId to display the right photographer
    const photographerDetails = photographers.filter(
      (photographer) => photographer.id == urlPhotographerId
    )[0];

    //Create ann instance of createPhotographerProfil to display photographer
    new PhotographerProfile(
      photographerDetails,
      this.$photographerSection
    ).createPhotographerProfile();

    //   use photographerId to display the right medias

    // const photographerMediaDetails = informations.filter(
    //   (p) => p.photographerId == id
    // );
  }
}

//Create an instance of IndexApp and call main method
const photographerApp = new PhotographerApp();

photographerApp.main();

//Mettre le code JavaScript lié à la page photographer.html

console.log("DUE");

//
let urlPhotographerId = Number(getUrlParameter("id"));
console.log(
  "🚀 ~ file: photographer.js:41 ~ urlPhotographerId:",
  urlPhotographerId
);

// retrieve id from url
let params = new URLSearchParams(document.location.search);
let id = params.get("id");
console.log("🚀 ~ file: photographer.js:28 ~ id:", id);
