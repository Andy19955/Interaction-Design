import * as storage from "../helpers/getCart.js";
import { renderItemCount } from "../ui/cart/renderItemCount.js";

export function addToCart(event) {
  const size = document.querySelector("#product-size-selector").value;
  const { id, title, price, image } = event.target.dataset;
  const item = { id, title, price, image, size };
  storage.addItemToCart(item);
  renderItemCount();
}
