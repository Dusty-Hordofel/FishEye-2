class PhotographersCard {
  //Use of the constructor function to create similar objects. It is a special method for creating and initializing an object created within a class.
  constructor(photographers, element) {
    this.photographers = photographers;
    this.element = element;
  }

  //Create the createCards function to create the cards of the photographers
  createCards() {
    this.element.innerHTML = this.photographers
      .map((photographer) => {
        const { city, country, id, name, portrait, price, tagline } =
          photographer;
        return `
    <article class="photoraher-profile" aria-label="Informations sur le photographe ${name} tabindex="0">
    <a href="photographer.html?id=${id}" title="Visiter la page de profil de ${name}" role="link">
    <img src="assets/photographers/${portrait}" alt="Photo de profil du photographe ${name}"/>
    <h2>${name}</h2>
    </a>
    <p class="location" aria-label="ville et pays où se trouve le photographe">${city}, ${country}</p>
    <p class="description" aria-label="citation du photographe:${name}">${tagline}</p>
    <p class="price" aria-label="coût de la prestation du photographe ${name}">${price}€/jour</p>
    </article>
    `;
      })
      .join("");
  }
}
