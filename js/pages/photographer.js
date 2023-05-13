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

  // Display photographer's likes and prices
  async photographerLikesAndPrice() {
    const photographerDetails = await this.photographer();
    const photographerMediasDetails = await this.media();

    //display photographer likes and price
    let likesTemplate = new photographerLikesAndPrice(
      photographerMediasDetails,
      photographerDetails,
      this.$photographerLikesAndPrice
    );

    //display photographer likes and price in Card
    likesTemplate.createPhotographerLikesAndPrice();
  }

  // Display photographer's medias

  async photographerMedias() {
    const photographerDetails = await this.photographer();
    const photographerMediasDetails = await this.media();

    photographerMediasDetails
      .sort((a, b) => b.likes - a.likes)
      .map((media) => {
        const Template = new PhotographerPosts(media, photographerDetails);
        return this.$photographerWorkSection.append(
          Template.createPhotographerPost()
        );
        // return (this.$photographerWorkSection.innerHTML +=
        //   Template.createPhotographerPost());
      });
  }
}

//Create an instance of IndexApp and call main method
const photographerPage = new PhotographerPage();

// initApp function
const initPhotographerApp = async () => {
  const photographerPage = new PhotographerPage();
  await photographerPage.photographerProfile();

  await photographerPage.photographerMedias();

  await photographerPage.photographerLikesAndPrice();
};

initPhotographerApp();
