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
  const spinner = document.querySelector(".hidden");

  button.addEventListener("click", (event) => {
    event.preventDefault();
    spinner.classList.remove("hidden");
    setTimeout(() => {
      location.replace("../../index.html");
    }, 3000);
  });
};

const buttonReturnLast = () => {
  const button = document.querySelector(".returnButtonLogin");
  const spinner = document.querySelector(".hidden");

  button.addEventListener("click", (event) => {
    event.preventDefault();
    spinner.classList.remove("hidden");
    setTimeout(() => {
      location.replace("../../index.html");
    }, 3000);
  });
};
buttonReturnLast();
buttonReturn();
handleNewUser();
