// const allPhotographerInfo = "http://localhost:3000/photographers";
// const allMedias = "http://localhost:3000/media";

const getElement = (selection) => {
  const element = document.querySelector(selection);
  if (element) return element;
  throw new Error(
    `Please check "${selection}" selector, no such element exist`
  );
};
const getAllElement = (selection) => {
  const element = document.querySelectorAll(selection);
  if (element) return element;
  throw new Error(
    `Please check "${selection}" selector, no such element exist`
  );
};

const getElementsByTagName = (selection) => {
  const element = document.getElementsByTagName(selection);
  if (element) return element;
  throw new Error(
    `Please check "${selection}" selector, no such element exist`
  );
};

const getElementsByClassName = (selection) => {
  const element = document.getElementsByClassName(selection);
  if (element) return element;
  throw new Error(
    `Please check "${selection}" selector, no such element exist`
  );
};

//format price
const formatPrice = (price) => {
  let formattedPrice = new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
  })
    .format(price)
    .replace(/,00/, "");
  return formattedPrice;
};
