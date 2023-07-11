import { authenticUser, posts } from "./requests.js";

export async function createList() {
  const postsUser = await posts();
  const ul = document.querySelector(".container__itemList");
  let contador = 0;

  ul.innerHTML = "";

  const loggedInUser = await authenticUser(); 

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

      containerContent.classList.add("containerContent");

      titlePost.classList.add("containerContent__titlePost");
      titlePost.innerText = title;

      contentPost.classList.add("containerContent__contentPost");
      contentPost.innerText = `${content.slice(0, 145)} ...`;

      accessModal.classList.add("containerContent__accessModal");
      accessModal.innerText = "Acessar publicação";
      accessModal.dataset.postId = id;

      accessModal.addEventListener("click", () => {
        const modal = document.querySelector(".showPostModal");
        const modalImage = modal.querySelector(".modal__image");
        const modalUsername = modal.querySelector(".modal__username");
        const modalCreatedAt = modal.querySelector(".modal__createdAt");
        const modalTitle = modal.querySelector(".modal__title");
        const modalContent = modal.querySelector(".modal__content");
        const closeButton = modal.querySelector(".modal__closeButton");

        modalImage.src = user.avatar;
        modalImage.alt = "image profile";
        modalUsername.textContent = user.username;
        modalCreatedAt.textContent = new Date(createdAt).toLocaleDateString();
        modalTitle.textContent = title;
        modalContent.textContent = content;

        closeButton.addEventListener("click", () => {
          modal.close();
        });

        modal.showModal();
      });

      ul.appendChild(itemList);
      itemList.append(container, containerButtons, containerContent);
      container.append(containerHeader);
      containerHeader.append(containerProfile, containerButtons);
      containerProfile.append(imageList, nameUser, cardDate);
      containerContent.append(titlePost, contentPost, accessModal);

    
      if (loggedInUser && post.user.id === loggedInUser.id) {
        const buttonEdit = document.createElement("button");
        const buttonClear = document.createElement("button");

        buttonEdit.classList.add("containerButtonsHeader__buttonEditPost");
        buttonEdit.id = "buttonEdit";
        buttonEdit.innerText = "Editar";
        buttonEdit.dataset.postId = id;

        buttonClear.classList.add("containerButtonsHeader__buttonClearPost");
        buttonClear.id = "buttonClear";
        buttonClear.innerText = "Excluir";
        buttonClear.dataset.postId = id;

        containerButtons.append(buttonEdit, buttonClear);

        buttonEdit.addEventListener("click", () => {
          const modalContainer = document.querySelector(".modalContainerEdit");
          const inputTitle = document.querySelector(
            ".containerContentEdit__inputTitle"
          );
          const inputContent = document.querySelector(
            ".containerContentEdit__inputContent"
          );
          const buttonSave = document.querySelector(
            ".containerRedirectEdit__save"
          );

          buttonSave.dataset.postId = id;
          console.log(buttonSave);

          inputTitle.value = title;
          inputContent.value = content;

          if (!modalContainer.open) {
            modalContainer.showModal();
          }
        });

        buttonClear.addEventListener("click", () => {
          const deleteButton = document.querySelector(".deleteButton");
          const deleteModal = document.querySelector(".modalDelete");
          deleteButton.dataset.postId = id;
          deleteModal.showModal();
        });
      }
    }
  });

  return ul;
}

await createList();
