// Define Image class with Media
class Image extends Media {
  constructor(data) {
    super(data);
    this._image = data.image;
  }
}
