//handle photographer likes

function handleLikes(id, type) {
  let nbLike = document.getElementById("like-" + id).innerHTML;

  nbLike = parseInt(nbLike); //convert string to number
  let nbLikeTotal = getElement(
    ".photographer-rate-and-price-likes-number"
  ).innerHTML;

  nbLikeTotal = parseInt(nbLikeTotal);

  if (type == "like") {
    nbLike = nbLike + 1;
    nbLikeTotal = nbLikeTotal + 1;

    document
      .getElementsByClassName("like-" + id)[0]
      .getElementsByClassName("count-plus")[0].style.color = "#901c1c";

    // Changer la function

    document
      .getElementsByClassName("like-" + id)[0]
      .getElementsByClassName("like-btn")[0]
      .setAttribute("onclick", "handleLikes('" + id + "', 'unlike')");
  } else {
    nbLike = nbLike - 1;
    nbLikeTotal = nbLikeTotal - 1;

    document
      .getElementsByClassName("like-" + id)[0]
      .getElementsByClassName("count-plus")[0].style.color = "#db8876";

    // Changer la function
    document
      .getElementsByClassName("like-" + id)[0]
      .getElementsByClassName("like-btn")[0]
      .setAttribute("onclick", "handleLikes('" + id + "', 'like')");
  }
  //Changer les éléments
  document.getElementById("like-" + id).innerHTML = nbLike;
  getElement(".photographer-rate-and-price-likes-number").innerHTML =
    nbLikeTotal;
}
