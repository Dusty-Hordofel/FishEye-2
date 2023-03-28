const products = [
  {
    id: 1,
    name: "T-Shirt",
    price: 19.99,
    likes: 50,
  },
  {
    id: 2,
    name: "Sneakers",
    price: 79.99,
    likes: 100,
  },
  {
    id: 3,
    name: "Jeans",
    price: 49.99,
    likes: 25,
  },
  {
    id: 4,
    name: "Jacket",
    price: 99.99,
    likes: 75,
  },
];

// display products
function displayProducts(products) {
  const productList = document.getElementById("product-list");
  productList.innerHTML = "";
  products.forEach((product) => {
    const productItem = document.createElement("div");
    productItem.innerHTML = `
        <h3>${product.name}</h3>
        <p>Price: $${product.price}</p>
        <p>Likes: ${product.likes}</p>
      `;
    productList.appendChild(productItem);
  });
}

// sort by likes
function sortByLikes(products) {
  return products.sort((a, b) => b.likes - a.likes);
}

// sort by price
function sortByPrice(products) {
  return products.sort((a, b) => a.price - b.price);
}

// sort by name
function sortByName(products) {
  return products.sort((a, b) => a.name.localeCompare(b.name));
}

// initial display
displayProducts(products);

// filter by likes
const sortLikesBtn = document.getElementById("sort-likes");
sortLikesBtn.addEventListener("click", () => {
  const sortedProducts = sortByLikes(products);
  displayProducts(sortedProducts);
});

// filter by price
const sortPriceBtn = document.getElementById("sort-price");
sortPriceBtn.addEventListener("click", () => {
  const sortedProducts = sortByPrice(products);
  displayProducts(sortedProducts);
});

// filter by name
const sortNameBtn = document.getElementById("sort-name");
sortNameBtn.addEventListener("click", () => {
  const sortedProducts = sortByName(products);
  displayProducts(sortedProducts);
});
