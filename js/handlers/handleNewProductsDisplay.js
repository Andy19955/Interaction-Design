import { fetchProducts } from "../api/fetchProducts.js";
import { displayNewProducts } from "../ui/products/displayNewProducts.js";
import { displayMessage } from "../ui/shared/displayMessage.js";

export async function handleNewProductsDisplay() {
  const loading = document.querySelector("#loading-products");
  try {
    const products = await fetchProducts();
    displayNewProducts(products);
  } catch (error) {
    displayMessage("#message-container", error.message);
  } finally {
    loading.classList.add("hidden");
  }
}
