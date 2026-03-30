function initSaveContact() {
const form = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const clearBtn = document.getElementById("clearBtn");
const status = document.getElementById("status");

form.addEventListener("input", () => {
  const data = {
    name: nameInput.value,
    email: emailInput.value,
    message: messageInput.value
  };

  localStorage.setItem("contactFormData", JSON.stringify(data));

  status.textContent = "Saved ✅";

  setTimeout(() => {
    status.textContent = "";
  }, 2000);
});

window.addEventListener("DOMContentLoaded", () => {
  const savedData = localStorage.getItem("contactFormData");

  if (savedData) {
    const data = JSON.parse(savedData);

    nameInput.value = data.name || "";
    emailInput.value = data.email || "";
    messageInput.value = data.message || "";
  }
});

clearBtn.addEventListener("click", () => {
  localStorage.removeItem("contactFormData");

  form.reset();

  status.textContent = "Data cleared 🗑️";

  setTimeout(() => {
    status.textContent = "";
  }, 2000);
});

}