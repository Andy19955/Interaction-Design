import { renderCart } from "../ui/cart/renderCart.js";

export function handleCheckout() {
  renderCart();
  const orderForm = document.querySelector("#order-form");
  orderForm.addEventListener("submit", (e) => {
    e.preventDefault();
    localStorage.clear("cart");
    location.href = "/checkout-success/";
  });
}
