import { fetchProducts } from "../api/fetchProducts.js";
import { displayProducts } from "../ui/products/displayProducts.js";
import { displayMessage } from "../ui/shared/displayMessage.js";

export async function handleProductsDisplay(gender) {
  const loading = document.querySelector("#loading-products");
  try {
    const products = await fetchProducts();
    displayProducts(products, gender);
  } catch (error) {
    displayMessage("#message-container", error.message);
  } finally {
    loading.classList.add("hidden");
  }
}
