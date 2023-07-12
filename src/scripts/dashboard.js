import { createList } from "./render.js";
import { createPosts } from "./requests.js";
import { editPost } from "./requests.js";
import { deletePostById } from "./requests.js";

import { toasts } from "./toasts.js";

const green = "#168821";

function createInPost() {
  const inputs = document.querySelectorAll(".inputsCreate");
  const button = document.querySelector(".button__signup");
  let newPost = {};
  button.addEventListener("click", (event) => {
    // event.preventDefault();

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

function addEventModalEditSaveButton() {
  const buttonSave = document.querySelector(".containerRedirectEdit__save");

  buttonSave.addEventListener("click", async () => {
    const inputTitle = document.querySelector(
      ".containerContentEdit__inputTitle"
    );
    const inputContent = document.querySelector(
      ".containerContentEdit__inputContent"
    );

    const id = buttonSave.dataset.postId;

    const body = {
      title: inputTitle.value,
      content: inputContent.value,
    };

    await editPost(id, body);
    await createList();
  });
}

function deletePost() {
  const deleteButton = document.querySelector(".deleteButton");
  const deleteCancelButtons = document.querySelectorAll(".close-Modal");
  const deleteModal = document.querySelector(".modalDelete");

  deleteButton.addEventListener("click", async (e) => {
    const id = deleteButton.dataset.postId;

    await deletePostById(id);
    await createList();
    if (deleteButton) {
      deleteModal.close();
    }
  });

  deleteCancelButtons.forEach((buttons) => {
    buttons.addEventListener("click", () => {
      deleteModal.close();
    });
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
    }, 1500);
  });
};

deletePost();
buttonLogout();
addEventModalEditSaveButton();
createInPost();
