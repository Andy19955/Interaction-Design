export function displayMessage(container = "#message-container", message = "There was an unexpected error.", messageType = "error") {
  const parent = document.querySelector(container);
  parent.innerHTML = `<div class="message ${messageType}">${message}</div>`;
}
