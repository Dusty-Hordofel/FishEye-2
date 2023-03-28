class PhotographerPosts {
  //Use of the constructor function to create similar objects. It is a special method for creating and initializing an object created within a class.
  constructor(media, photographer) {
    this.media = media;
    this.photographer = photographer.name;
  }

  //Create the createCard function to create  photographer's posts
  createPhotographerPost() {
    let template = "";
    const { likes, title, video, image, date, photographerId, id } = this.media;

    let mediaContainer = document.createElement("div");
    mediaContainer.classList.add("photograph-work-container");
    this.indexPhoto =
      document.querySelectorAll(".photograph-work-container").length + 1;
    let datePrecise = date;
    datePrecise = new Date(datePrecise).getTime();
    mediaContainer.setAttribute("tabindex", "0");
    mediaContainer.setAttribute("id", `${this.indexPhoto}`);
    mediaContainer.setAttribute("data-likes", likes);
    mediaContainer.setAttribute("data-date", "'" + datePrecise + "'");
    mediaContainer.setAttribute("data-titre", title);

    //autoplay muted controls
    let mediaCard = ` 

              <a href="#" title="${title}" aria-label="${
      image ? "Image" : "Vidéo"
    } nommée ${title}" role="link" tabindex="0" onclick="openLightbox(${
      this.indexPhoto
    }, '${title}')" class="lightbox-link">
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
               } key="${id}"  ${image ? "/" : ""}> ${image ? "" : "</video>"}
               </a>
              <div class="photograph-work-content-description">
              <p tabindex="0" class="media-title">${title}</p>
              <div class="photograph-work-content-description-likes like-${id}" tabindex="0">
              <p class="photographer-likes" id="like-${id}">${likes}</p>
              <button class="like-btn" key="${id}" title="Mettre un like au post '${title}'?" aria-pressed="false"
              aria-label="Bouton pour liker la publication nommée '${title}'" onclick="handleLikes('${id}', 'like')"><i class="fa-solid fa-heart count-plus" ></i></button>
              </div>
              </div>`;

    mediaContainer.innerHTML = mediaCard;
    return mediaContainer;
  }
}
