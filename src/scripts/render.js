import { posts } from "./requests.js";
import { authenticUserId } from "./dashboard.js";
const contador = 10;

async function createList() {
  const postsUser = await posts();
  const ul = document.querySelector(".container__itemList");

  ul.innerHTML = " ";

  postsUser.forEach((post, index) => {
    if (index > contador) {
      const { id, user, title, content, createdAt } = post;

      const itemList = document.createElement("li");
      const container = document.createElement("div");
      const containerHeader = document.createElement("div");
      const containerProfile = document.createElement("div");
      const imageList = document.createElement("img");
      const nameUser = document.createElement("p");
      const cardDate = document.createElement("p");
      const containerButtons = document.createElement("div");
      const buttonEdit = document.createElement("button");
      const buttonClear = document.createElement("button");
      const containerContent = document.createElement("div");
      const titlePost = document.createElement("h2");
      const contentPost = document.createElement("p");
      const accessModal = document.createElement("p");

      itemList.classList.add("containerList");
      container.classList.add("containerPost");
      containerHeader.classList.add("containerHeader");
      containerProfile.classList.add("containerProfile");

      imageList.classList.add("containerPost__imageProfile");
      imageList.src = user.avatar;
      imageList.alt = "image profile";

      nameUser.classList.add("containerPost__nameUser");
      nameUser.innerText = user.username;

      cardDate.classList.add("containerPost__cardDate");
      cardDate.innerText = `| ${new Date(createdAt).toLocaleDateString()}`;
      containerButtons.classList.add("containerButtonsHeader");

      buttonEdit.classList.add("containerButtonsHeader__buttonEditPost");
      buttonEdit.id = "buttonEdit";
      buttonEdit.innerText = "Editar";
      buttonEdit.dataset.postId = id;

      buttonClear.classList.add("containerButtonsHeader__buttonClearPost");
      buttonClear.id = "buttonClear";
      buttonClear.innerText = "Excluir";

      containerContent.classList.add("containerContent");

      titlePost.classList.add("containerContent__titlePost");
      titlePost.innerText = title;

      contentPost.classList.add("containerContent__contentPost");
      contentPost.innerText = `${content.slice(0, 145)} ...`;

      accessModal.classList.add("containerContent__accessModal");
      accessModal.innerText = "Acessar publicação";

      ul.appendChild(itemList);
      itemList.append(container, containerButtons, containerContent);
      container.append(containerHeader);
      containerHeader.append(containerProfile, containerButtons);
      containerProfile.append(imageList, nameUser, cardDate);
      containerButtons.append(buttonEdit, buttonClear);
      containerContent.append(titlePost, contentPost, accessModal);

      buttonEdit.addEventListener("click", () => {
        const modalContainer = document.querySelector(".modalContainerEdit");
        const inputTitle = document.querySelector(
          ".containerContentEdit__inputTitle"
        );
        const inputContent = document.querySelector(
          ".containerContentEdit__inputContent"
        );
        const buttonSave = document.querySelector(
          ".containerButtonsHeader__buttonEditPost"
        );

        buttonSave.dataset.postId = post.id;

        inputTitle.value = post.title;
        inputContent.value = post.content;

        if (!modalContainer.open) {
          modalContainer.showModal();
        }
      });
      const idData = authenticUserId();
      if (user.id !== idData.id) {
        containerButtons.style.display = "none";
      }
      return ul;
    }
  });
}
await createList();
