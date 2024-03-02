import { displayMessage } from "../ui/shared/displayMessage.js";

export async function handleContactForm() {
  const contactForm = document.querySelector("#contact-form");
  const submitButton = document.querySelector("#submit-btn");
  const messageContainer = document.querySelector("#message-container");

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      displayMessage("#message-container", "Thank you for sending us a message! We will reply as soon as possible.", "success");

      submitButton.classList.add("hidden");
      document.querySelector("#name").setAttribute("disabled", true);
      document.querySelector("#email").setAttribute("disabled", true);
      document.querySelector("#phone").setAttribute("disabled", true);
      document.querySelector("#message").setAttribute("disabled", true);
      messageContainer.scrollIntoView();
    });
  }
}
