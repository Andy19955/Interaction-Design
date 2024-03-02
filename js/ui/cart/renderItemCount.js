import * as storage from "../../helpers/getCart.js";

export function renderItemCount() {
  const itemCount = storage.getItemCount();
  const itemCountContainer = document.querySelector("#cart-counter");

  const itemCountIcon = document.querySelector("#item-count");

  if (itemCount === 0) {
    if (itemCountIcon) {
      itemCountIcon.remove();
    }
    return;
  }

  if (itemCountIcon) {
    itemCountIcon.innerText = itemCount;
  } else {
    const itemIcon = document.createElement("span");
    itemIcon.setAttribute("id", "item-count");
    itemIcon.classList.add("cart-count");
    itemIcon.innerText = itemCount;
    itemCountContainer.append(itemIcon);
  }
}
