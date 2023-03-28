import { PhotographerPosts } from "../js/templates/PhotographerPosts";
import { PhotographerProfile } from "../js/templates/PhotographerProfile";

// Get photographer id from url
let photographerIdFromUrl = Number(getUrlParameter("id"));

//Define Photographer class
class PhotographerPage {
  //Use of the constructor function to create similar objects. It is a special method for creating and initializing an object created within a class.
  constructor() {
    //Get element
    this.$photographerSection = getElement(".photograph-header");
    this.$photographerWorkSection = getElement(".photographer-all-medias");
    this.$photographerLikesAndPrice = getElement(
      ".photographer-likes-and-prices"
    );
    // this.$likeNumber = getAllElement(".photographer-likes");
    // // this.$newTotalLikes = getElement(".photographer-rate-and-price-likes");
    // this.$likesBtn = getAllElement(".like-btn");
    // this.$photographerWorkSection = getElement(".photograph-work");

    //Get Data from api
    this.photographersApi = new photographersApi("/data/photographers.json");
    this.mediasApi = new mediasApi("/data/photographers.json");

    //Data filters functions
    this.photographer = async () => {
      const photographerData = await this.photographersApi.getPhotographers();
      photographerData.map((photographer) => new Photographer(photographer));
      const photographerDataFiltered = photographerData.find(
        (photographer) => photographer.id == photographerIdFromUrl
      );
      return photographerDataFiltered;
    };

    this.media = async () => {
      const mediasData = await this.mediasApi.getMedias();
      mediasData.map((media) => new MediasFactory(media));
      const mediasDataFiltered = mediasData.filter(
        (photographer) => photographer.photographerId == photographerIdFromUrl
      );
      return mediasDataFiltered;
    };
  }

  // Display photographerProfile
  async photographerProfile() {
    const photographerDetails = await this.photographer();

    //Create an instance of PhotographerProfile to display photographer's profile
    let PhotographerProfileTemplate = new PhotographerProfile(
      photographerDetails,
      this.$photographerSection
    );
    PhotographerProfileTemplate.createPhotographerProfile();
  }

  // Display photographer's medias

  async photographerMedias() {
    const photographerDetails = await this.photographer();
    const photographerMediasDetails = await this.media();
    console.log(
      "🚀 ~ file: photographer.js:64 ~ PhotographerPage ~ photographerMedias ~ photographerMediasDetails:",
      photographerMediasDetails
    );

    // console.log(filterByTitle && "Yes");
    // filterByTitle ? "Yes" : "No";

    // console.log(
    //   "🚀 ~ file: photographer.js:66 ~ PhotographerPage ~ filterByTitle ~ filterByTitle:",
    //   filterByTitle
    // );

    //Create an instance of PhotographerPosts to display photographer posts
    let PhotographerMediasTemplate = new PhotographerPosts(
      photographerMediasDetails,
      this.$photographerWorkSection,
      photographerDetails
    );

    //display photographer medias
    PhotographerMediasTemplate.createPhotographerPosts();

    // getElement("#titre").addEventListener("click", () => {
    //   sortMediaByTitles(
    //     photographerMediasDetails,
    //     this.$photographerWorkSection,
    //     photographerDetails
    //   );
    // });
  }
  // Init filter and render medias

  // Display photographer's likes and prices
  // async photographerLikesAndPrice() {
  //   const photographerDetails = await this.photographer();
  //   const photographerMediasDetails = await this.media();

  //   //display photographer likes and price
  //   let likesTemplate = new photographerLikesAndPrice(
  //     photographerMediasDetails,
  //     photographerDetails,
  //     this.$photographerLikesAndPrice
  //   );

  //   //display photographer likes and price in Card
  //   likesTemplate.createPhotographerLikesAndPrice();

  //   // console.log(this.$likesBtn);
  // }

  //handle photographer likes
  // async handlePhotographerLikes() {
  //   const photographerMediasDetails = await this.media();
  //   this.$newTotalLikes = getElement(".photographer-rate-and-price-likes");

  //   //Get element
  //   const likesBtn = getAllElement(".like-btn");
  //   const likeNumber = getAllElement(".photographer-likes");
  //   const newTotalLikes = getElement(".photographer-rate-and-price-likes");
  //   // this.$likesBtn = getAllElement(".like-btn");
  //   // this.$likeNumber = getAllElement(".photographer-likes");
  //   // this.$newTotalLikes = getElement(".photographer-rate-and-price-likes");

  //   handleLikes(likesBtn, likeNumber, newTotalLikes, photographerMediasDetails);
  // }

  //filter medias
  async mano() {
    return console.log(await this.media());
  }

  //fitering

  //Filter Photographer Medias By Popularity
  // async filterPhotographerMediasByPopularity() {
  //   const photographerDetails = await this.photographer();
  //   const photographerMediasDetails = await this.media();
  //   //Filter Photographer Medias By Popularity
  //   getElement("#popularite").addEventListener("click", () => {
  //     sortMediaByPopularity(
  //       photographerMediasDetails,
  //       this.$photographerWorkSection,
  //       photographerDetails
  //     );
  //   });
  // }

  // async filterPhotographerMediasByTitle() {
  //   const photographerDetails = await this.photographer();
  //   const photographerMediasDetails = await this.media();
  //   //Filter Photographer Medias By Titles
  //   getElement("#titre").addEventListener("click", () => {
  //     sortMediaByTitles(photographerMediasDetails);
  //   });
  // }
}

//Create an instance of IndexApp and call main method
const photographerPage = new PhotographerPage();
// photographerPage.main();

// console.log(document.querySelectorAll(".photographer-likes"));
// this.$likeNumber = getAllElement(".photographer-likes");
// this.$newTotalLikes = getElement(".photographer-rate-and-price-likes");
// this.$likesBtn = getAllElement(".like-btn");

/*async filterPhotographerMediasByTitle() {
    const photographerDetails = await this.photographer();
    const photographerMediasDetails = await this.media();
    //Filter Photographer Medias By Titles
    getElement("#titre").addEventListener("click", () => {
      sortMediaByTitles(
        photographerMediasDetails,
        this.$photographerWorkSection,
        photographerDetails
      );
    });
  }*/

// initApp function
const initPhotographerApp = async () => {
  const photographerPage = new PhotographerPage();
  await photographerPage.photographerProfile();

  await photographerPage.photographerMedias();

  // console.log(await photographerPage.photographerMedias());
  await photographerPage.photographerLikesAndPrice();

  await photographerPage.handlePhotographerLikes();

  // await photographerPage.filterPhotographerMediasByPopularity();
  // await photographerPage.filterPhotographerMediasByTitle();

  await photographerPage.mano();
};

initPhotographerApp();
