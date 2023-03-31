class PhotographerPosts {
  //Use of the constructor function to create similar objects. It is a special method for creating and initializing an object created within a class.
  constructor(medias, /*element,*/ photographer) {
    this.medias = medias;
    // this.element = element;
    this.photographer = photographer.name;
  }

  //Create the createCards function to create the cards of the photographers
  createPhotographerPosts() {
    const mediasList = getElement(".photographer-all-medias");
    mediasList.innerHTML = "";
    //autoplay muted controls
    mediasList.innerHTML = `
          <ul class= "photograph-work-content">
          ${this.medias
            .map((media, index) => {
              const { likes, title, video, image, date, photographerId, id } =
                media;
              // console.log(media);
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

  sortMediaByTitles() {
    //sort photographerMedias By Likes
    const sortTitles = this.medias.sort((a, b) =>
      a.title.localeCompare(b.title)
    );

    this.medias = sortTitles;
    this.createPhotographerPosts();

    console.log(
      "🚀 ~ file: filterPhotographerMedias.js:24 ~ sortMediaByTitles ~ sortTitles:",
      sortTitles
    );

    return sortTitles;
  }
}
