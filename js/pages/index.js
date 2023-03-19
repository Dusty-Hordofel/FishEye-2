// import { getElement } from "../../utils/utils";

class IndexApp {
  //Use of the constructor function to create similar objects. It is a special method for creating and initializing an object created within a class.
  constructor() {
    this.$photographersSection = getElement(".photographer_section");

    this.photographersApi = new photographersApi("/data/photographers.json");
  }

  async main() {
    //Retieve data from api
    const photographersData = await this.photographersApi.getPhotos();

    //Use destructuring to retrieve utile data
    const { media, photographers } = photographersData;

    //Create ann instance of PhotographerCard to display photographers
    new PhotographerCard(
      photographers,
      this.$photographersSection
    ).createCards();
  }
}

//Create an instance of IndexApp and call main method
const app = new IndexApp();
app.main();
