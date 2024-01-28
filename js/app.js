import { handleNewProductsDisplay } from "./handlers/handleNewProductsDisplay.js";
import { handleProductsDisplay } from "./handlers/handleProductsDisplay.js";
import { handleSingleProductDisplay } from "./handlers/handleSingleProductDisplay.js";

function router() {
  const path = window.location.pathname;

  switch (path) {
    case "/":
    case "/index.html":
      handleNewProductsDisplay();
      break;
    case "/women/":
      handleProductsDisplay("female");
      break;
    case "/men/":
      handleProductsDisplay("male");
      break;
    case "/product/":
      handleSingleProductDisplay();
  }
}

router();
