import { fetchSingleProduct } from "../api/fetchSingleProduct.js";
import { displaySingleProduct } from "../ui/products/displaySingleProduct.js";
import { getQueryParam } from "../helpers/getQueryParam.js";
import { displayMessage } from "../ui/shared/displayMessage.js";

export async function handleSingleProductDisplay() {
  const id = getQueryParam("id");
  if (!id) {
    window.location.href = "/";
  }

  const loading = document.querySelector("#loading-products");

  try {
    const product = await fetchSingleProduct(id);
    displaySingleProduct(product);
  } catch (error) {
    displayMessage("#message-container", error.message);
  } finally {
    loading.classList.add("hidden");
  }
}
