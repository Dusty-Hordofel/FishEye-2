// PhotographerPages;

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

    this.$likeNumber = getAllElement(".photographer-likes");
    // this.$newTotalLikes = getElement(".photographer-rate-and-price-likes");
    this.$likesBtn = getAllElement(".like-btn");
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

    //Create an instance of PhotographersFactory to create an instance of Photographer
    //transformer le tableau de données en tableau de class en utilisant le PhotographersFactory
    const Photographer = new PhotographerProfileFactory(photographerDetails);

    //Create an instance of PhotographerProfile to display photographer's profile
    let PhotographerProfileTemplate = new PhotographerProfile(
      Photographer,
      this.$photographerSection
    );
    PhotographerProfileTemplate.createPhotographerProfile();
  }

  // Display photographer's medias

  async photographerMedias() {
    const photographerDetails = await this.photographer();
    const photographerMediasDetails = await this.media();

    //Create an instance of PhotographerPosts to display photographer posts
    let PhotographerMediasTemplate = new PhotographerPosts(
      photographerMediasDetails,
      this.$photographerWorkSection,
      photographerDetails
    );

    //display photographer medias
    PhotographerMediasTemplate.createPhotographerPosts();
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
  // }

  //handle photographer likes
  // async handlePhotographerLikes() {
  //   const photographerMediasDetails = await this.media();
  //   this.$newTotalLikes = getElement(".photographer-rate-and-price-likes");
  //   handleLikes(
  //     this.$likesBtn,
  //     this.$likeNumber,
  //     this.$newTotalLikes,
  //     photographerMediasDetails
  //   );
  //   //test
  //   console.log(
  //     document.querySelector(".photographer-rate-and-price-container")
  //   );
  // }

  async main() {
    // const photographer = await this.photographer();
    // console.log(
    //   "🚀 ~ file: photographer.js:44 ~ PhotographerPage ~ main ~ photographer:",
    //   photographer
    // );
    // const mediasData = await this.media();
    // console.log(
    //   "🚀 ~ file: photographer.js:46 ~ PhotographerPage ~ main ~ mediasData:",
    //   mediasData
    // );

    //Retieve data from api
    // const photographersData = await this.photographersApi.getMedias();

    // //Use destructuring to retrieve utile data
    // const { photographers, medias } = photographersData;

    //   use photographerId to display the right photographer
    // const photographerDetails = photographers.filter(
    //   (photographer) => photographer.id == urlPhotographerId
    // )[0];
    // console.log(
    //   "🚀 ~ file: photographer.js:20 ~ PhotographerPage ~ main ~ photographerDetails:",
    //   photographerDetails
    // );

    // //Create an instance of PhotographersFactory to create an instance of Photographer
    // //transformer le tableau de données en tableau de class en utilisant le PhotographersFactory
    // let Photographer = new PhotographerProfileFactory(photographerDetails);

    // //Create ann instance of PhotographerCard to display photographers
    // let PhotographerProfileTemplate = new PhotographerProfile(
    //   Photographer,
    //   this.$photographerSection
    // );

    //display photographer profile
    // PhotographerProfileTemplate.createPhotographerProfile();

    //   use photographerId to display the right medias
    // const photographerMediasDetails = medias.filter(
    //   (media) => media.photographerId == urlPhotographerId
    // );
    // console.log(
    //   "🚀 ~ file: photographer.js:46 ~ PhotographerPage ~ main ~ photographerMediasDetails:",
    //   photographerMediasDetails
    // );

    // let ama = new Photo()
    // let amama = new photographerMediasFactory(
    //   photographerMediasDetails,
    //   this.$photographerWorkSection,
    //   "image"
    // );
    // console.log(
    //   "🚀 ~ file: photographer.js:56 ~ PhotographerPage ~ main ~ amama:",
    //   amama
    // );

    //Create an instance of PhotographerPosts to display photographer posts
    // let PhotographerMediasTemplate = new PhotographerPosts(
    //   photographerMediasDetails,
    //   this.$photographerWorkSection,
    //   photographerDetails
    // );

    // //display photographer medias
    // PhotographerMediasTemplate.createPhotographerPosts();

    //display photographer likes and price
    // let likesTemplate = new photographerLikesAndPrice(
    //   photographerMediasDetails,
    //   photographerDetails,
    //   this.$photographerLikesAndPrice
    // );

    //display photographer likes and price in Card
    // likesTemplate.createPhotographerLikesAndPrice();

    //Likes DOM elements
    // const likeNumber = getAllElement(".photographer-likes");
    // const newTotalLikes = getElement(".photographer-rate-and-price-likes");
    // const likesBtn = getAllElement(".like-btn");

    //handle likes
    // handleLikes(likesBtn, likeNumber, newTotalLikes, photographerMediasDetails);

    //Filter Photographer Medias By Popularity
    getElement("#popularite").addEventListener("click", () => {
      sortMediaByPopularity(
        photographerMediasDetails,
        this.$photographerWorkSection,
        photographerDetails
      );
    });

    //Filter Photographer Medias By Titles
    getElement("#titre").addEventListener("click", () => {
      sortMediaByTitles(
        photographerMediasDetails,
        this.$photographerWorkSection,
        photographerDetails
      );
    });

    //Filter Photographer Medias By Date
    getElement("#date").addEventListener("click", () => {
      sortMediaByDates(
        photographerMediasDetails,
        this.$photographerWorkSection,
        photographerDetails
      );
    });
  }
}

/*handle photographer likes*/
function handleLikes(likesBtn, numberOfLike, totalOfLike, photographerMedias) {
  likesBtn.forEach((like) => {
    like.addEventListener("click", () => {
      //retrieve the like index
      const likeIndex = like.getAttribute("key");
      console.log(
        "🚀 ~ file: handleLikes.js:22 ~ like.addEventListener ~ likeIndex:",
        likeIndex
      );

      //conditionnal rendering: increase or decrease the like
      if ([...like.classList].includes("count-plus")) {
        like.classList.remove("count-plus");
        like.classList.add("count-moin");

        //increase the number of likes
        let increase = (photographerMedias[likeIndex].likes += 1);

        //display increased likes on screen
        numberOfLike[likeIndex].textContent = increase;
      } else {
        like.classList.add("count-plus");
        like.classList.remove("count-moin");

        //decrease the number of likes
        let decrease = (photographerMedias[likeIndex].likes -= 1);

        //display decreased likes on screen
        numberOfLike[likeIndex].textContent = decrease;
      }

      //calcul new  totalLikes
      const totalLikes = photographerMedias.reduce(
        (accumulator, currentItemValue) => accumulator + currentItemValue.likes,
        0
      );

      //display new  totalLikes
      totalOfLike.innerHTML = totalLikes;
    });
  });
}

// initApp function
const initPhotographerApp = async () => {
  const photographerPage = new PhotographerPage();
  await photographerPage.photographerProfile();

  await photographerPage.photographerMedias();

  // await photographerPage.photographerLikesAndPrice();

  // await photographerPage.handlePhotographerLikes();

  // filter and display filtered medias
  //test
  console.log(document.querySelector(".photographer-rate-and-price-container"));

  //handle likes
};

initPhotographerApp();

//Create an instance of IndexApp and call main method
const photographerPage = new PhotographerPage();
photographerPage.main();
