import { createProduct } from "./createProduct.js";

export function displayProducts(products, gender) {
  const productDisplay = document.querySelector("#product-container");

  products.forEach(function (product) {
    if (product.gender.toLowerCase() === gender) {
      const productItem = createProduct(product);
      productDisplay.append(productItem);
    }
  });
}
