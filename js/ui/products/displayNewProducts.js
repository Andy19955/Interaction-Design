import { createProduct } from "./createProduct.js";

export function displayNewProducts(products) {
  const productDisplay = document.querySelector("#product-container");
  const shortenedProducts = products.slice(0, 4);

  shortenedProducts.forEach(function (product) {
    const productItem = createProduct(product);
    productDisplay.append(productItem);
  });
}
