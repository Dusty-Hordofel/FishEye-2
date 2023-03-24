// Factory function to create media with Image or Video Class
class MediasFactory {
  constructor(data) {
    if (data.image) {
      return new Image(data);
    } else if (data.video) {
      return new Video(data);
    } else {
      throw "Unknown data";
    }
  }
}

// export { MediasFactory };

// class photographerMediasFactory {
//   constructor(photographerData, type) {
//     if (type === "video") {
//       return new Video(photographerData);
//     } else if (type === "image") {
//       return new Photo(photographerData);
//     } else {
//       throw "Photographer factory error: unknown type format";
//     }
//   }
// }
// class photographerMediasFactory {
//   constructor(photographerData, element, photographer, type) {
//     if (type === "video") {
//       return new PhotographerPostsV2(
//         photographerData,
//         element,
//         photographer
//       ).createPhotographerPostVideo();
//     } else if (type === "image") {
//       return new PhotographerPostsV2(
//         photographerData,
//         element,
//         photographer
//       ).createPhotographerPostImage();
//     } else {
//       throw "Photographer factory error: unknown type format";
//     }
//   }
// }

// class MoviesFactory {
//     constructor(data, type) {
//       //type correspond à la source de données

//       if (type === "oldApi") {
//         return new OldMovie(data);
//       } else if (type === "newApi") {
//         return new Movie(data);
//       } else if (type === "externalApi") {
//         return new ExternalMovie(data);
//       } else {
//         throw new Error("Type de données non reconnu");
//       }
//     }
//   }
