import * as storage from "../../helpers/getCart.js";

export function renderCartTotal() {
  const total = storage.getTotal();
  const totalContainer = document.querySelector("#cart-total");
  totalContainer.innerText = `Total: $ ${parseFloat(total).toFixed(2)}`;
}
