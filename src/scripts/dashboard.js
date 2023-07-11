import { posts } from "./requests.js";
import { createPosts } from "./requests.js";
import { editPost } from "./requests.js";
import { toasts } from "./toasts.js";

const green = "#168821";

function createInPost() {
  const inputs = document.querySelectorAll(".inputsCreate");
  const button = document.querySelector(".button__signup");
  let newPost = {};
  button.addEventListener("click", (event) => {
    event.preventDefault();

    inputs.forEach((input) => {
      newPost[input.name] = input.value;
    });
    createPosts(newPost);
  });
}

export const authenticUserId = () => {
  const userId = JSON.parse(localStorage.getItem("@petInfo:postsIdUser"));
  return userId;
};


function addEventModalEditSaveButton(id, body) {
  const button = document.querySelector(".containerRedirectEdit__save");

  button.addEventListener("click", async () => {
    const inputTitle = document.querySelector(
      ".containerContentEdit__inputTitle"
    );
    const inputContent = document.querySelector(
      ".containerContentEdit__inputContent"
    );

    id = button.dataset.id;

    body = {
      title: inputTitle.value,
      content: inputContent.value,
    };
   await editPost(id, body);
  });
}

const buttonLogout = () => {
  const button = document.querySelector(".modalContainerLogout");

  button.addEventListener("click", (event) => {
    event.preventDefault();
    toasts(
      "Usuário desconectado com sucesso, você será redirecionado à página de login",
      green
    );
    setTimeout(() => {
      location.replace("../../index.html");
    }, 3000);
  });
};

buttonLogout();
addEventModalEditSaveButton();
createInPost();
// renderPosts();
