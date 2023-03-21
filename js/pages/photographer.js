class PhotographerApp {
  //Use of the constructor function to create similar objects. It is a special method for creating and initializing an object created within a class.
  constructor() {
    this.$photographerSection = getElement(".photograph-header");
    this.$photographerWorkSection = getElement(".photograph-work");

    this.photographersApi = new photographersApi("/data/photographers.json");
  }
  async main() {
    //Retieve data from api
    const photographersData = await this.photographersApi.getMedias();

    //Use destructuring to retrieve utile data
    const { photographers, medias } = photographersData;

    //   use photographerId to display the right photographer
    const photographerDetails = photographers.filter(
      (photographer) => photographer.id == urlPhotographerId
    )[0];

    //Create an instance of PhotographersFactory to create an instance of Photographer
    //transformer le tableau de données en tableau de class en utilisant le PhotographersFactory
    let Photographer = new PhotographerProfileFactory(photographerDetails);

    //Create ann instance of PhotographerCard to display photographers
    let PhotographerProfileTemplate = new PhotographerProfile(
      Photographer,
      this.$photographerSection
    );

    //display photographer profile
    PhotographerProfileTemplate.createPhotographerProfile();

    //   use photographerId to display the right medias
    const photographerMediasDetails = medias.filter(
      (media) => media.photographerId == urlPhotographerId
    );

    //Create ann instance of PhotographerPosts to display photographer posts
    let PhotographerMediasTemplate = new PhotographerPosts(
      photographerMediasDetails,
      this.$photographerWorkSection,
      photographerDetails
    );

    //display photographer medias
    PhotographerMediasTemplate.createPhotographerPosts();

    //filter photographer posts
  }
}

//Create an instance of IndexApp and call main method
const photographerApp = new PhotographerApp();
photographerApp.main();

//retrieve id from url
let urlPhotographerId = Number(getUrlParameter("id"));
console.log(
  "🚀 ~ file: photographer.js:41 ~ urlPhotographerId:",
  urlPhotographerId
);
