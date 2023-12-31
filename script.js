"use strict";
const container = document.querySelector(".container");
const containerValid = document.querySelector(".container-valid");
const submitBtn = document.querySelector(".btn");
const inputEmail = document.getElementById("mail");
const img = document.querySelector(".img-side");
const form = document.getElementById("subscribeForm");
const notValidPlace = document.getElementById("not-valid-place");

function isValidEmail(email) {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(email);
}

const handleSubmit = function (event) {
  event.preventDefault();

  const email = inputEmail.value;
  console.log(email.trim());
  console.log(isValidEmail(email));

  if (isValidEmail(email)) {
    container.classList.add("hidden");
    containerValid.classList.remove("hidden");
    document.getElementById("email-place").innerHTML = email
      .bold()
      .toLowerCase();
    document.querySelector(".dismiss").addEventListener("click", () => {
      container.classList.remove("hidden");
      containerValid.classList.add("hidden");
      inputEmail.value = "";
      notValidPlace.textContent = "";
      inputEmail.classList.remove("not-valid");
    });
  } else {
    notValidPlace.textContent = "Valid email required";
    inputEmail.value = "";
    inputEmail.classList.add("not-valid");
  }
};

inputEmail.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    handleSubmit(event);
  }
});
submitBtn.addEventListener("click", handleSubmit);

const changeImage = function () {
  const screenWidth = window.innerWidth;
  img.src = `./assets/images/illustration-sign-up-${
    screenWidth <= 740 ? "mobile" : "desktop"
  }.svg`;
};

window.addEventListener("resize", changeImage);