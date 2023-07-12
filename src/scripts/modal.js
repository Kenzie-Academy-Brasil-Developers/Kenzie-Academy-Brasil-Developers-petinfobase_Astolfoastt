const modalCreatePost = () => {
  const button = document.querySelector(".containerHeader__createPostButton");
  const modalContainer = document.querySelector(".modalController");

  button.addEventListener("click", () => {
    modalContainer.showModal();
    closeModalCreatePost();
    closeButtonCreate();
  });
};

const closeModalCreatePost = () => {
  const button = document.querySelector(".modalContainer__buttonClose");
  const modalContainer = document.querySelector(".modalController");

  button.addEventListener("click", () => {
    modalContainer.close();
  });
};

const closeButtonCreate = () => {
  const button = document.querySelector(".buttonCloseModal");
  const modalContainer = document.querySelector(".modalController");

  button.addEventListener("click", () => {
    modalContainer.close();
  });
};

const modalLogout = () => {
  const button = document.querySelector(".buttonLogout");
  const modalContainer = document.querySelector(".modalControllerLogout");

  button.addEventListener("click", () => {
    modalContainer.showModal();
  });
};

const closeButton = document.querySelector(".containerHeader__buttonClose");
closeButton.addEventListener("click", () => {
  const modalContainer = document.querySelector(".modalContainerEdit");
  modalContainer.close();
});

modalLogout();
modalCreatePost();
