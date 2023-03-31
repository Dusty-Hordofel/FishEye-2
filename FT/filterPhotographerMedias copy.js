//FILTER MENU ALGORITHM

const sortMediaByPopularity = (medias, element, photographer) => {
  //sort photographerMedias By Likes
  const sortByLikes = medias.sort((a, b) => b.likes - a.likes);
  console.log(
    "🚀 ~ file: filterPhotographerMedias.js:10 ~ sortMediaByPopularity ~ sortByLikes:",
    sortByLikes
  );

  new PhotographerPosts(
    sortByLikes,
    element,
    photographer
  ).createPhotographerPosts();
};

const sortMediaByTitles = (tableauTrier) => {
  //sort photographerMedias By Likes
  const sortTitles = tableauTrier.sort((a, b) =>
    a.dataset.titre.localeCompare(b.dataset.titre)
  );
  console.log(
    "🚀 ~ file: filterPhotographerMedias.js:23 ~ sortMediaByTitles ~ sortTitles:",
    sortTitles
  );

  // console.log("MASLASA");
  // console.log(
  //   "🚀 ~ file: filterPhotographerMedias.js:24 ~ sortMediaByTitles ~ sortTitles:",
  //   sortTitles
  // );

  // tableauTrier.sort(function (a, b) {
  //   return a.dataset.titre.localeCompare(b.dataset.titre);
  // });

  // new PhotographerPosts(
  //   sortTitles,
  //   element,
  //   photographer
  // ).createPhotographerPosts();
};
// const sortMediaByTitles = (photographerMedias, element, photographer) => {
//   //sort photographerMedias By Likes
//   const sortTitles = photographerMedias.sort((a, b) =>
//     a.title.localeCompare(b.title)
//   );
//   console.log(
//     "🚀 ~ file: filterPhotographerMedias.js:24 ~ sortMediaByTitles ~ sortTitles:",
//     sortTitles
//   );

//   new PhotographerPosts(
//     sortTitles,
//     element,
//     photographer
//   ).createPhotographerPosts();
// };

const sortMediaByDates = (photographerMedias, element, photographer) => {
  //sort photographerMedias By Likes
  const sortDates = photographerMedias.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );
  console.log(
    "🚀 ~ file: filterPhotographerMedias.js:45 ~ sortMediaByDates ~ sortDates:",
    sortDates
  );

  new PhotographerPosts(
    sortDates,
    element,
    photographer
  ).createPhotographerPosts();
};
