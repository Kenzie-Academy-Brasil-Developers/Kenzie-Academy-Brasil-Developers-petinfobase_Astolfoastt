










// import { authenticUserId } from "./dashboard.js";

// export const createCard = (post) => {
//   const itemList = document.createElement("li");
//   const container = document.createElement("div");
//   const containerHeader = document.createElement("div");
//   const containerProfile = document.createElement("div");
//   const imageList = document.createElement("img");
//   const nameUser = document.createElement("p");
//   const cardDate = document.createElement("p");
//   const containerButtons = document.createElement("div");
//   const buttonEdit = document.createElement("button");
//   const buttonClear = document.createElement("button");
//   const containerContent = document.createElement("div");
//   const titlePost = document.createElement("h2");
//   const contentPost = document.createElement("p");
//   const accessModal = document.createElement("p");

//   itemList.classList.add("containerList");
//   container.classList.add("containerPost");
//   containerHeader.classList.add("containerHeader");
//   containerProfile.classList.add("containerProfile");

//   imageList.classList.add("containerPost__imageProfile");
//   imageList.src = post.user.avatar;
//   imageList.alt = "image profile";

//   nameUser.classList.add("containerPost__nameUser");
//   nameUser.innerText = post.user.username;

//   cardDate.classList.add("containerPost__cardDate");
//   cardDate.innerText = `| ${new Date(post.createdAt).toLocaleDateString()}`;
//   containerButtons.classList.add("containerButtonsHeader");

//   buttonEdit.classList.add("containerButtonsHeader__buttonEditPost");
//   buttonEdit.id = "buttonEdit";
//   buttonEdit.innerText = "Editar";
//   buttonEdit.dataset.postId = post.id;

//   buttonClear.classList.add("containerButtonsHeader__buttonClearPost");
//   buttonClear.id = "buttonClear";
//   buttonClear.innerText = "Excluir";

//   containerContent.classList.add("containerContent");

//   titlePost.classList.add("containerContent__titlePost");
//   titlePost.innerText = post.title;

//   contentPost.classList.add("containerContent__contentPost");
//   contentPost.innerText = `${post.content.slice(0, 145)} ...`;

//   accessModal.classList.add("containerContent__accessModal");
//   accessModal.innerText = "Acessar publicação";

//   itemList.append(container, containerButtons, containerContent);
//   container.append(containerHeader);
//   containerHeader.append(containerProfile, containerButtons);
//   containerProfile.append(imageList, nameUser, cardDate);
//   containerButtons.append(buttonEdit, buttonClear);
//   containerContent.append(titlePost, contentPost, accessModal);

//   buttonEdit.addEventListener("click", () => {
//     const modalContainer = document.querySelector(".modalContainerEdit");
//     const inputTitle = document.querySelector(
//       ".containerContentEdit__inputTitle"
//     );
//     const inputContent = document.querySelector(
//       ".containerContentEdit__inputContent"
//     );
//     const buttonSave = document.querySelector(
//       ".containerButtonsHeader__buttonEditPost"
//     );

//     buttonSave.dataset.postId = post.id;

//     inputTitle.value = post.title;
//     inputContent.value = post.content;

//     if (!modalContainer.open) {
//       modalContainer.showModal();
//     }
//   });

//   const idData = authenticUserId();
//   if (post.user.id !== idData.id) {
//     containerButtons.style.display = "none";
//   }

//   return itemList;
// };
