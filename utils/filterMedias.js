/*handle sorting medias*/
function sorts(sortBy) {
  //select all medias
  let listePhotos = getAllElement(".photograph-work-container");
  //create an array
  let tableauTrier = [];
  //add all medias to the array
  for (let i = 0; i < listePhotos.length; i++) {
    tableauTrier.push(listePhotos[i]);
  }
  // sort the array by the selected option
  switch (sortBy.value) {
    case "Popularité":
      tableauTrier.sort(function (a, b) {
        return b.dataset.likes - a.dataset.likes;
      });
      break;
    case "Date":
      tableauTrier.sort(function (a, b) {
        return a.dataset.date.localeCompare(b.dataset.date);
      });
      break;
    case "Titre":
      tableauTrier.sort(function (a, b) {
        return a.dataset.titre.localeCompare(b.dataset.titre);
      });
      break;
    default:
      break;
  }

  tableauTrier.forEach(function (photo, index) {
    // adpat the id and the onclick function
    let indexModif = index + 1;
    //get the title of the media
    let titreModif = photo.dataset.titre;
    photo.setAttribute("id", indexModif);

    //add index and title to the onclick function
    photo
      .getElementsByClassName("lightbox-link")[0]
      .setAttribute(
        "onclick",
        "openLightbox(" + `${indexModif}` + ", '" + titreModif + "')"
      );

    // add the sorted medias to the DOM
    getElement(".photographer-all-medias").append(photo);
  });
}
