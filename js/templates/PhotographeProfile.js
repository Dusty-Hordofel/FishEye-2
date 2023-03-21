class PhotographerProfile {
  //Use of the constructor function to create similar objects. It is a special method for creating and initializing an object created within a class.
  constructor(information, element) {
    this.information = information;
    this.element = element;
  }

  //Create the createCards function to create the cards of the photographers
  createPhotographerProfile() {
    const { city, country, name, portrait, tagline } = this.information;
    console.log(
      "🚀 ~ file: PhotographeProfil.js:11 ~ PhotographerProfil ~ createPhotographerProfil ~ city:",
      city
    );

    this.element.innerHTML = `
      <div class="photograph-description">
      <h1 tabindex="0">${name}</h1>
      <p class="location" aria-label="ville et pays de ${name}" tabindex="0">${city}, ${country}</p>
      <p class="description" tabindex="0" aria-label="citation du photographe ${name}">${tagline}</p>
    </div>
    <button class="contact_button" onclick="displayModal()" tabindex="0"
    aria-label="Bouton pour ouvrir la boîte de dialogue pour contacter le photographe ${name}">Contactez-moi</button>
    <img src="assets/photographers/${portrait}" alt="photo de profil du photographe ${name}" tabindex="0"/>
  
    `;
  }
}
