// class PhotographerFactory {
//   constructor(cardObject, type) {
//     if (type === "video") {
//       return new PhotographerProfileTemplateV2(cardObject).createPostVideo();
//     } else if (type === "image") {
//       return new PhotographerProfileTemplateV2(cardObject).createPostImage();
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
