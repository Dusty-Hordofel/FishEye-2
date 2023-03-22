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
    console.log(
      "🚀 ~ file: photographerLikesAndPrice.js:13 ~ photographerLikesAndPrice ~ createPhotographerLikesAndPrice ~ totalLikes:",
      totalLikes
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
