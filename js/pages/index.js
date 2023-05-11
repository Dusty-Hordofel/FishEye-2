class Homepage {
  //Use of the constructor function to create similar objects. It is a special method for creating and initializing an object created within a class.
  constructor() {
    this.$photographersSection = getElement(".photographer_section");
    this.photographersApi = new photographersApi("/data/photographers.json");
  }

  async photographers() {
    //Retieve data from api
    const photographersData = await this.photographersApi.getPhotographers();

    //Create an instance of Photographer to create an instance of Photographer
    //transformer le tableau de données en tableau de class en utilisant le PhotographerFactory
    let Photographers = photographersData.map(
      (photographer) => new Photographer(photographer)
    );

    //Create ann instance of PhotographerCard to display photographers

    let PhotographersCardTemplate = new PhotographersCard(
      Photographers,
      this.$photographersSection
    );
    PhotographersCardTemplate.createCards();
    //OR
    // new PhotographerCard(
    //   photographers,
    //   this.$photographersSection
    // ).createCards();
  }
}

//Create an instance of IndexApp and call main method
const homepage = new Homepage();
homepage.photographers();
