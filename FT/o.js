class Product {
  constructor(id, name, price, likes) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.likes = likes;
  }
}

class ProductList {
  constructor(products) {
    this.products = products;
  }

  display() {
    const productList = document.getElementById("product-list");
    productList.innerHTML = "";
    this.products.forEach((product) => {
      const productItem = document.createElement("div");
      productItem.innerHTML = `
          <h3>${product.name}</h3>
          <p>Price: $${product.price}</p>
          <p>Likes: ${product.likes}</p>
        `;
      productList.appendChild(productItem);
    });
  }

  filterByLikes(minLikes) {
    const filteredProducts = this.products.filter(
      (product) => product.likes >= minLikes
    );
    this.products = filteredProducts;
    this.display();
    return filteredProducts;
  }

  sortByLikes() {
    this.products.sort((a, b) => b.likes - a.likes);
    this.display();
  }

  sortByPrice() {
    this.products.sort((a, b) => a.price - b.price);
    this.display();
  }

  sortByName() {
    this.products.sort((a, b) => a.name.localeCompare(b.name));
    this.display();
  }
}

const products = [
  new Product(1, "T-Shirt", 19.99, 50),
  new Product(2, "Sneakers", 79.99, 100),
  new Product(3, "Jeans", 49.99, 25),
  new Product(4, "Jacket", 99.99, 75),
];

const productList = new ProductList(products);

// initial display
productList.filterByLikes(30);

// filter by likes
const sortLikesBtn = document.getElementById("sort-likes");
sortLikesBtn.addEventListener("click", () => {
  productList.sortByLikes();
});

// filter by price
const sortPriceBtn = document.getElementById("sort-price");
sortPriceBtn.addEventListener("click", () => {
  productList.sortByPrice();
});

// filter by name
const sortNameBtn = document.getElementById("sort-name");
sortNameBtn.addEventListener("click", () => {
  productList.sortByName();
});
