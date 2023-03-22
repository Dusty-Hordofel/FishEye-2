# FISHEYE - Photographers Activities Website

### Author Links

👋 Hello, I'm Hordofel Dusty BAMANA.

👇 Follow Me:

- [Twitter](https://twitter.com/hordofel)
- [LinkedIn](https://www.linkedin.com/in/dusty-hordofel-bamana-08389310a)

---

### 🚀 Description

HBD .... comment .....

---

### NB: This project has already been done using functional programming. For compliance reasons, it is redone in the Factory pattern used in OOP. The CSS of the first project will therefore be copied and pasted.

---

## Demo

![FishEye Desktop Demo](./assets/homePage.png "Desktop Demo")

<!-- ![FishEye Tablet Demo](./images/maquettes/Tablet.png "Tablet Demo") -->

---

## Section 1. Setup

---

### 1. import Project from GitHub

- clone a github repository named `https://github.com/OpenClassrooms-Student-Center/Front-End-Fisheye.git`
- understand and test all scripts in the project
- create a setup branch `Setup` in github repository to save the setup folder structure

---

## Section 2. Import Data & Integrating the homepage

### 2. fetch data from JSON file and Integrate the homepage

- create a [photographersApi](./js/api/photographersApi.js) `class`

```js
//Create Api class to fetch data from api

class Api {
  //Use of the constructor function to create similar objects. It is a special method for creating and initializing an object created within a class.
  constructor(url) {
    this._url = url;
  }

  async get() {
    try {
      const response = await fetch(this._url);
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(
        "🚀 ~ file: photographersApi.js:12 ~ Api ~ get ~ error:",
        error
      );
    }
  }
}

// photographersApi class extends Api class to fetch data from api
class photographersApi extends Api {
  constructor(url) {
    super(url);
  }

  getPhotos() {
    return this.get();
  }
}
```

- create [photographerCard](./js/templates/photographerCard.js)

```js
class PhotographerCard {
  //Use of the constructor function to create similar objects. It is a special method for creating and initializing an object created within a class.
  constructor(informations, element) {
    this.informations = informations;
    this.element = element;
  }

  //Create the createCards function to create the cards of the photographers
  createCards() {
    this.element.innerHTML = this.informations
      .map((information) => {
        const { city, country, id, name, portrait, price, tagline } =
          information;
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
```

- use [photographersApi](./js/api/photographersApi.js) && [photographerCard](./js/templates/photographerCard.js) in [index](./js/pages/index.js)

```js
class IndexApp {
  //Use of the constructor function to create similar objects. It is a special method for creating and initializing an object created within a class.
  constructor() {
    this.$photographersSection = document.querySelector(
      ".photographer_section"
    );

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
```

- add [Home Page](./css/style.css)

```css
/************************************/
/* GOOGLE FONTS */
/************************************/
@import url("photographer.css");

/************************************/
/* CUSTOM PROPERTY*/
/************************************/
:root {
  --max-width: 144rem;
}

/************************************/
/* Global Styles */
/************************************/

body {
  font-family: "DM Sans", sans-serif;
  margin: 0;
}

header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* background: rosybrown; */
  animation: fadeOut 4s ease-in-out forwards;
  animation-delay: 1s;
  transition: 0.1s ease-in;
  padding-top: 40px;
}

h1 {
  color: #901c1c;
}

header h1 {
  text-align: end;
}

.logo {
  height: 50px;
}

.section-center {
  width: 90vw;
  max-width: var(--max-width);
  margin: 0 auto;
}

.photographer_section {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 70px;
  margin-top: 100px;
  margin-bottom: 115px;
  animation: fadeOut 3s ease-in-out forwards;
  animation-delay: 1s;
  transition: all 0.3s ease-in-out;
}
main {
  max-width: var(--max-width);
  width: 100%;
  margin: 0 auto;
  transition: all 0.2s ease-in;
}

@media screen and (max-width: 1053px) {
  .photographer_section {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (max-width: 700px) {
  .photographer_section {
    grid-template-columns: 1fr;
  }
}

@media screen and (max-width: 800px) {
  header {
    flex-direction: column;
  }

  header a {
    display: flex;
    justify-content: center;
  }

  header img {
    justify-content: center;
  }

  header h1 {
    width: 100%;
    text-align: center;
  }
}

@keyframes fadeOut {
  0% {
    opacity: 0;
  }

  25% {
    opacity: 0.25;
  }
  50% {
    opacity: 0.5;
  }

  75% {
    opacity: 0.75;
  }

  100% {
    opacity: 1;
  }
}

.photographer_section article {
  justify-self: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.photographer-header-title {
  font-weight: 400;
}

/************************************/
/* Photographe header */
/************************************/

.photoraher-profile {
  display: flex;
  align-items: center;
  justify-content: center;
  /* background: thistle; */
}
.photographer_section article h2 {
  color: #d3573c;
  font-size: 36px;
  margin-bottom: 0;
  font-weight: 400;
}

.photographer_section article img {
  height: 200px;
  width: 200px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 20px;
}

.photographer_section .location {
  color: #901c1c;
  margin-bottom: 0;
}
.photographer_section .price {
  color: #757575;
}
.photographer_section .description {
  margin-bottom: 0;
  /* background: yellow; */
}
.photographer_section a {
  text-decoration: none;
  display: block;
  /* background: #901c1c; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

/************************************/
/* Photographe loader */
/************************************/

.loader {
  width: 100%;
  height: 100vh;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 10;
}

.container {
  display: flex;
}

.dot,
.shadow {
  width: 50px;
  height: 50px;
  background-color: #901c1c;
  border-radius: 25px;
  margin: 0 4px;
}

.shadow {
  opacity: 0.3;
}
```

- test accessi Accessibility

## Section 3. Manage Navigation

### 3. Add utils , Models and Retrieve photographerId

- create [getUrlParameter](./js/utils/getUrlParameter.js)

```js
const getUrlParameter = (parameterName) => {
  // retrieve parameter from url
  let parameters = new URLSearchParams(document.location.search);
  // check if parameter exists
  if (parameters.has(parameterName)) {
    return parameters.get(parameterName);
  }
  // return error message if parameter doesn't exist
  return `The ${parameterName} parameter  doesn't exist!`;
};
```

- create [utils](./js/utils/utils.js)

```js
const allPhotographerInfo = "http://localhost:3000/photographers";

const allMedias = "http://localhost:3000/media";

const getElement = (selection) => {
  const element = document.querySelector(selection);
  if (element) return element;
  throw new Error(
    `Please check "${selection}" selector, no such element exist`
  );
};
const getAllElement = (selection) => {
  const element = document.querySelectorAll(selection);
  if (element) return element;
  throw new Error(
    `Please check "${selection}" selector, no such element exist`
  );
};

//format price
const formatPrice = (price) => {
  let formattedPrice = new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
  })
    .format(price)
    .replace(/,00/, "");
  return formattedPrice;
};

//get item in the local storage
const getStorageItem = (item) => {
  let storageItem = localStorage.getItem(item);

  if (storageItem && storageItem !== undefined) {
    storageItem = JSON.parse(localStorage.getItem(item));
  } else {
    storageItem = [];
  }
  // storageItem
  //   ? (storageItem = JSON.parse(localStorage.getItem(item)))
  //   : (storageItem = []); //parse is used to transform string values to an object

  return storageItem;
};

// set item in the local storage
const setStorageItem = (name, item) => {
  //name of my key and the item
  localStorage.setItem(name, JSON.stringify(item)); //La méthode JSON.stringify() convertit une valeur JavaScript en chaîne JSON. we can only store data as a string in localStorage
};
```

- add [Models](/js/models/Photographer.js)

```js
class Photographer {
  constructor(photographers) {
    this._id = photographers.id;
    this._name = photographers.name;
    this._portrait = photographers.portrait;
    this._city = photographers.city;
    this._country = photographers.country;
    this._tagline = photographers.tagline;
    this._price = photographers.price;
    this._tags = photographers.tags;
  }

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  get portrait() {
    return this._portrait;
  }

  get city() {
    return this._city;
  }

  get country() {
    return this._country;
  }

  get tagline() {
    return this._tagline;
  }

  get price() {
    return this._price;
  }

  get tags() {
    return this._tags;
  }
}
```

- add [Models](/js/models/Photo.js)

```js
class Photo {
  constructor(photo, nomPhotographe) {
    this._id = photo.id;
    this._photographerId = photo.photographerId;
    this._title = photo.title;
    this._image = photo.image;
    this._tags = photo.tags;
    this._likes = photo.likes;
    this._date = photo.date;
    this._price = photo.price;
    this._description = photo.description;
    this._nomPhotographe = nomPhotographe;
  }

  get id() {
    return this._id;
  }

  get photographerId() {
    return this._photographerId;
  }

  get title() {
    return this._title;
  }

  get image() {
    return this._image;
  }

  get tags() {
    return this._tags;
  }

  get likes() {
    return this._likes;
  }

  get date() {
    return this._date;
  }

  get price() {
    return this._price;
  }

  get description() {
    return this._description;
  }

  get nomPhotographe() {
    return this._nomPhotographe;
  }
}
```

- add [Models](/js/models/Video.js)

```js
class Video {
  constructor(photo, nomPhotographe) {
    this._id = photo.id;
    this._photographerId = photo.photographerId;
    this._title = photo.title;
    this._video = photo.video;
    this._tags = photo.tags;
    this._likes = photo.likes;
    this._date = photo.date;
    this._price = photo.price;
    this._description = photo.description;
    this._nomPhotographe = nomPhotographe;
  }

  get id() {
    return this._id;
  }

  get photographerId() {
    return this._photographerId;
  }

  get title() {
    return this._title;
  }

  get video() {
    return this._video;
  }

  get tags() {
    return this._tags;
  }

  get likes() {
    return this._likes;
  }

  get date() {
    return this._date;
  }

  get price() {
    return this._price;
  }

  get description() {
    return this._description;
  }

  get nomPhotographe() {
    return this._nomPhotographe;
  }
}
```

### 4. PhotographersFactory

- update [index](js/pages/index.js) by creating [PhotographersFactory](/js/factories/PhotographersFactory.js)

```js
class PhotographersFactory {
  constructor(photographers) {
    return new Photographer(photographers);
  }
}
```

### 5. Photographer Profile

- create [PhotographerProfile](./js/templates/PhotographeProfil.js)

```js
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
```

### 6. Display Photographer medias

- create [PhotographerPosts](/js/templates/PhotographerPosts.js)

```js
class PhotographerPosts {
  //Use of the constructor function to create similar objects. It is a special method for creating and initializing an object created within a class.
  constructor(medias, element, photographer) {
    this.medias = medias;
    this.element = element;
    this.photographer = photographer.name;
  }

  //Create the createCards function to create the cards of the photographers
  createPhotographerPosts() {
    //autoplay muted controls
    this.element.innerHTML = `
          <ul class= "photograph-work-content">
          ${this.medias
            .map((media, index) => {
              const { likes, title, video, image, date, photographerId, id } =
                media;
              return ` 
              <li class="photograph-work-container" tabindex="0" data-photographer-id="${photographerId}" data-post-id="${id}" data-date-of-publication="${date}" data-likes="${likes}" data-user-liked="false" data-title="${title}" >
              <a href="#" title="${title}" aria-label="${
                image ? "Image" : "Vidéo"
              } nommée ${title}" role="link" tabindex="0">
              <${image ? "img" : "video"} src="assets/images/${
                this.photographer
              }/${image ? image : video}"

              ${
                image
                  ? `alt=${title} fait en ${new Date(date).getFullYear()}`
                  : ""
              }
               ${video ? "muted" : ""}
                class="photographer-medias" 
               id=${
                 image ? "photograph-content-img" : "photograph-content-video"
               } key="${index}"  ${image ? "/" : ""}> ${image ? "" : "</video>"}
               </a>
              <div class="photograph-work-content-description">
              <p tabindex="0">${title}</p>
              <div class="photograph-work-content-description-likes" tabindex="0">
              <p class="photographer-likes" >${likes}</p>
              <button class="like-btn count-plus" key="${index}" title="Mettre un like au post '${title}'?" aria-pressed="false"
              aria-label="Bouton pour liker la publication nommée '${title}'" ><i class="fa-solid fa-heart count-plus" ></i></button>
              </div>
              </div>
              </li>`;
            })
            .join("")}
                </ul>
                `;
  }
}
```

- fill [Photographer](js/pages/photographer.js)

```js
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
```

### 7. Handle Likes

- create [photographerLikesAndPrice](/js/templates/photographerLikesAndPrice.js) template

```js
class photographerLikesAndPrice {
  constructor(medias, photographer, allWorkSelector) {
    this._medias = medias;
    this._photographer = photographer;
    this._allWorkSelector = allWorkSelector;
  }
  createPhotographerLikesAndPrice() {
    //calcul photographer totalLikes
    const totalLikes = this._medias.reduce(
      (accumulator, currentItemValue) => accumulator + currentItemValue.likes,
      0
    );

    //create rateAndPrice variable to store photographer totalLikes and price
    const rateAndPrice = `
        <div class="photographer-rate-and-price-container" tabindex="0">
        <div class="photographer-rate-and-price-likes" tabindex="0">${totalLikes}<span><i class="fa-solid fa-heart"></i></span></div>
        <div class="photographer-rate-and-price-prices" tabindex="0">${this._photographer.price}€ / jour</div>
        </div>
        `;

    this._allWorkSelector.insertAdjacentHTML("beforeend", rateAndPrice);
  }
}
```

- handle Likes [handleLikes](js/pages/photographer.js)

```js
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
```

### 7. Manage the navigation between the home page and the photographer page
