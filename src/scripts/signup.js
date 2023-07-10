import { createUser } from "./requests.js";
function handleNewUser() {
  const inputs = document.querySelectorAll(".inputs");
  const button = document.querySelector(".button__signup");
  let newUser = {};
  button.addEventListener("click", (event) => {
    event.preventDefault();

    inputs.forEach((input) => {
      newUser[input.name] = input.value;
    });
    createUser(newUser);
  });
}

const buttonReturn = () => {
  const button = document.querySelector(".close-cancel__button");

  button.addEventListener("click", (event) => {
    event.preventDefault();
    location.replace("../../index.html");
  });
};

const buttonReturnLast = () => {
  const button = document.querySelector(".returnButtonLogin");

  button.addEventListener("click", (event) => {
    event.preventDefault();
    location.replace("../../index.html");
  });
};
buttonReturnLast();
buttonReturn();
handleNewUser();
