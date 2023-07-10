import { posts } from "./requests.js";
import { createPosts } from "./requests.js";
import { editPost } from "./requests.js";
import { toasts } from "./toasts.js";

const green = "#168821";

// export const showPosts = () => {
//   const posts = JSON.parse(localStorage.getItem("@petInfo:postsUsers"));
//   return posts;
// };

// export const renderPosts = async () => {
//   const postsData = showPosts();
//   const containerItemList = document.querySelector(".container__itemList");

//   if (postsData) {
//     containerItemList.innerHTML = "";

//     postsData.forEach((post) => {
//       const card = createCard(post);
//       containerItemList.appendChild(card);
//     });
//   }
// };

// posts();

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

// const modalEditPost = () => {
//   const buttonSave = document.querySelector(
//     ".containerButtonsHeader__buttonEditPost"
//   );
//   const modalContainer = document.querySelector(".modalContainerEdit");

//   buttonSave.addEventListener("click", () => {
//     modalContainer.showModal();
//   });
// };

// document.addEventListener("DOMContentLoaded", () => {
//   modalEditPost();
// });

// function addEventModalEditSaveButton(id, body) {
//   const button = document.querySelector(".containerRedirectEdit__save");

//   button.addEventListener("click", async () => {
//     const inputTitle = document.querySelector(
//       ".containerContentEdit__inputTitle"
//     );
//     const inputContent = document.querySelector(
//       ".containerContentEdit__inputContent"
//     );

//     id = button.dataset.id;

//     body = {
//       title: inputTitle.value,
//       content: inputContent.value,
//     };
//    await editPost(id, body);
//   });
// }

// document.addEventListener("DOMContentLoaded", () => {
//   addEventModalEditSaveButton();
// });

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
createInPost();
// renderPosts();
