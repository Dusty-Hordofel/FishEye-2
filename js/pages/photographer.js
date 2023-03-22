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
    console.log(
      "🚀 ~ file: photographer.js:20 ~ PhotographerApp ~ main ~ photographerDetails:",
      photographerDetails
    );

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

    //display photographer likes and price
    let likesTemplate = new photographerLikesAndPrice(
      photographerMediasDetails,
      photographerDetails,
      this.$photographerWorkSection
    );

    //display photographer likes and price in Card
    likesTemplate.createPhotographerLikesAndPrice();

    //Likes DOM elements
    const likeNumber = getAllElement(".photographer-likes");
    const newTotalLikes = getElement(".photographer-rate-and-price-likes");
    const likesBtn = getAllElement(".like-btn");

    //handle likes
    handleLikes(likesBtn, likeNumber, newTotalLikes, photographerMediasDetails);

    //filter photographer posts
  }
}

//Create an instance of IndexApp and call main method
const photographerApp = new PhotographerApp();
photographerApp.main();

/*retrieve id from url*/
let urlPhotographerId = Number(getUrlParameter("id"));

/*handle photographer likes*/
const handleLikes = (
  likesBtn,
  numberOfLike,
  totalOfLike,
  photographerMedias
) => {
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
};
