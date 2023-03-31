// Lightbox System

function openLightbox(index, title) {
  //select all medias: medias length
  let allMedias = getAllElement(".photograph-work-container").length;

  //select photo by index
  let media = document.getElementById(index);
  //select media src
  let mediaSrc = media
    .getElementsByClassName("photographer-medias")[0]
    .getAttribute("src");

  //retrieve  mediatype
  let mediaType = mediaSrc.split(".").pop(); //pop() method removes the last element from an array and returns that element.

  //define media format
  let mediaFormat = "";
  if (
    mediaType === "jpg" ||
    mediaType === "jpeg" ||
    mediaType == "gif" ||
    mediaType === "png"
  ) {
    mediaFormat = "image";
  } else if (
    mediaType === "mp4" ||
    mediaType === "mkv" ||
    mediaType === "avi"
  ) {
    mediaFormat = "video";
  }

  // Retrieve media id
  let idMedia = index;

  //Display media in lightbox
  getElementsByTagName("body")[0].style.overflow = "hidden";
  // display full screen Media
  getElement(".full-screen-media").style.display = "flex";

  // manage the display of arrows in lightbox
  if (idMedia == 1) {
    console.log((getElement(".fa-chevron-left").style.display = "none"));
    console.log((getElement(".fa-chevron-right").style.display = "block"));
    //Change the index of the arrows
    getElement(".fa-chevron-left").setAttribute("onclick", "");
    getElement(".fa-chevron-right").setAttribute(
      "onclick",
      "rightArrow(" + (idMedia + 1) + ")"
    );
  } else if (idMedia === allMedias) {
    getElement(".fa-chevron-left").style.display = "block";
    getElement(".fa-chevron-right").style.display = "none";
    //Change the index of the arrows
    getElement(".fa-chevron-left").setAttribute(
      "onclick",
      "leftArrow(" + (idMedia - 1) + ")"
    );
    getElement(".fa-chevron-right").setAttribute("onclick", "");
  } else {
    getElement(".fa-chevron-left").style.display = "block";
    getElement(".fa-chevron-right").style.display = "block";
    //Change the index of the arrows
    getElement(".fa-chevron-left").setAttribute(
      "onclick",
      "leftArrow(" + (idMedia - 1) + ")"
    );
    getElement(".fa-chevron-right").setAttribute(
      "onclick",
      "rightArrow(" + (idMedia + 1) + ")"
    );
  }

  if (mediaFormat === "image") {
    console.log(mediaSrc);
    getElement(
      ".medias"
    ).innerHTML = `<img alt='${title}' class='photograph-work-content-img-modal photograph-work-img' src="${mediaSrc}"/>`;
  } else {
    getElement(
      ".medias"
    ).innerHTML = `<video title='${title}' class='photograph-work-content-img-modal photograph-work-video' controls><source src="${mediaSrc}"></video>`;
  }

  // Display title
  getElement(".title").innerHTML = title;
  //Manages the keyboard arrows
  document.onkeydown = function (event) {
    //If the Lightbox is open
    if (getElement(".full-screen-media ").style.display === "flex") {
      switch (event.key) {
        case "ArrowLeft":
          leftArrow(idMedia - 1);
          break;
        case "ArrowRight":
          rightArrow(idMedia + 1);
        default:
          break;
      }
    }
  };
}

// Close lightbox
function closeLightbox() {
  getElement(".full-screen-media").style.display = "none";
  getElementsByTagName("body")[0].style.overflow = "auto";
}

// Left arrow
function leftArrow(index) {
  //get title of the previous media
  let titleBefore = document
    .getElementsByClassName("photograph-work-container")
    [index - 1].getElementsByClassName("media-title")[0].innerHTML;
  //open lightbox of the previous media
  openLightbox(index, titleBefore);
}

// Right arrow
function rightArrow(index) {
  let allMedias = getAllElement(".photograph-work-container").length;

  if (index === allMedias) {
    let titleAfter = Array.from(
      getAllElement(".photograph-work-container")
    ).pop();
    titleAfter = titleAfter.getElementsByClassName("media-title")[0].innerHTML;
    openLightbox(index, titleAfter);
  } else {
    let titleAfter = document
      .getElementsByClassName("photograph-work-container")
      [index - 1].getElementsByClassName("media-title")[0].innerHTML;
    openLightbox(index, titleAfter);
  }
}
