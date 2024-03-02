import * as storage from "../../helpers/getCart.js";
import { renderCartTotal } from "./renderCartTotal.js";
import { renderItemCount } from "./renderItemCount.js";

export function renderCart() {
  const cart = storage.getCart();
  const container = document.querySelector("#cart");
  const totalContainer = document.querySelector("#cart-total");
  const shippingForm = document.querySelector("#shipping-form");
  container.innerText = "";
  totalContainer.innerText = "$ 0.00";

  if (cart.length === 0) {
    container.innerText = "Your cart is empty";
    shippingForm.classList.add("hidden");
    return;
  }

  cart.forEach((item) => {
    const cartItem = createCartItem(item);
    container.appendChild(cartItem);
  });

  renderCartTotal();
}

function createCartItem(item) {
  const { id, title, price, image, size, quantity } = item;

  const detailsRow = document.createElement("div");
  detailsRow.classList.add("order-details-row");

  const imageContainer = document.createElement("div");
  imageContainer.classList.add("order-details-element");

  const productImageContainer = document.createElement("div");
  productImageContainer.classList.add("order-image");

  const productImage = document.createElement("img");
  productImage.setAttribute("src", image);
  productImage.setAttribute("alt", title);
  productImageContainer.append(productImage);
  imageContainer.append(productImageContainer);

  const infoContainer = document.createElement("div");
  infoContainer.classList.add("order-details-element");

  const productInfo = document.createElement("div");
  productInfo.classList.add("order-info");

  const productTitle = document.createElement("span");
  productTitle.classList.add("product-title");
  productTitle.innerText = title;

  const productPrice = document.createElement("span");
  productPrice.classList.add("product-price");
  productPrice.innerText = `$ ${price}`;

  const productSize = document.createElement("span");
  productSize.classList.add("product-size");
  productSize.innerText = `Size: ${size}`;

  const removeButton = document.createElement("button");
  removeButton.classList.add("remove-button");
  removeButton.innerText = "Remove";
  removeButton.dataset.id = id;
  removeButton.dataset.size = size;
  removeButton.addEventListener("click", (event) => {
    const { id, size } = event.target.dataset;
    storage.removeItemFromCart(id, size);
    renderCart();
    renderItemCount();
  });

  productInfo.append(productTitle);
  productInfo.append(productPrice);
  productInfo.append(productSize);
  productInfo.append(removeButton);
  infoContainer.append(productInfo);

  const quantityContainer = document.createElement("div");
  quantityContainer.classList.add("order-details-element");

  const productQuantity = document.createElement("span");
  productQuantity.innerText = `x${quantity}`;

  quantityContainer.append(productQuantity);

  const priceContainer = document.createElement("div");
  priceContainer.classList.add("order-details-element");

  const productTotalPrice = document.createElement("span");
  productTotalPrice.innerText = `$ ${parseFloat(price * quantity).toFixed(2)}`;
  priceContainer.append(productTotalPrice);

  detailsRow.append(imageContainer);
  detailsRow.append(infoContainer);
  detailsRow.append(quantityContainer);
  detailsRow.append(priceContainer);

  return detailsRow;
}
