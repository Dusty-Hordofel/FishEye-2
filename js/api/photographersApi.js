//Create Api class to fetch data from api

class Api {
  //Use of the constructor function to create similar objects. It is a special method for creating and initializing an object created within a class.
  constructor(url) {
    this._url = url;
  }

  async get() {
    try {
      const response = await fetch(this._url);
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(
        "🚀 ~ file: photographersApi.js:12 ~ Api ~ get ~ error:",
        error
      );
    }
  }
}

// photographersApi class extends Api class to fetch data from api
class photographersApi extends Api {
  constructor(url) {
    super(url);
  }

  getPhotos() {
    return this.get();
  }
}
