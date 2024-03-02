export function getCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

export function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

export function removeItemFromCart(id, size) {
  const cart = getCart();
  const existingItem = cart.find((item) => item.id === id && item.size === size);

  if (existingItem.quantity > 1) {
    existingItem.quantity -= 1;
    saveCart(cart);
  } else {
    const newCart = cart.filter((item) => {
      if (item.id === id && item.size === size) {
        return false;
      } else {
        return true;
      }
    });
    saveCart(newCart);
  }
}

export function addItemToCart(item) {
  const cart = getCart();
  const existingItem = cart.find((cartItem) => cartItem.id === item.id && cartItem.size === item.size);

  if (!existingItem) {
    cart.push({ ...item, quantity: 1 });
    saveCart(cart);
    return;
  } else {
    existingItem.quantity += 1;
    saveCart(cart);
  }
}

export function getTotal() {
  const cart = getCart();

  return cart.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);
}

export function getItemCount() {
  const cart = getCart();
  return cart.reduce((acc, item) => {
    return acc + item.quantity;
  }, 0);
}
