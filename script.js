console.log("Loving Homes Website Loaded");

const form = document.getElementById("contactForm");

const email = document.getElementById("email");
const phone = document.getElementById("phone");
const name = document.getElementById("name");
const message = document.getElementById("message");

const errorMessage = document.getElementById("errorMessage");
const successMessage = document.getElementById("successMessage");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  errorMessage.textContent = "";
  successMessage.style.display = "none";

  // check name + message
  if (name.value.trim() === "" || message.value.trim() === "") {
    errorMessage.textContent = "Please fill in your name and message.";
    return;
  }

  // check email OR phone
  if (email.value.trim() === "" && phone.value.trim() === "") {
    errorMessage.textContent = "Please enter either your email or phone number.";
    return;
  }

  // success
  successMessage.style.display = "block";
  form.reset();
});

function toggleMenu() {
  document.querySelector("nav ul").classList.toggle("show");
}