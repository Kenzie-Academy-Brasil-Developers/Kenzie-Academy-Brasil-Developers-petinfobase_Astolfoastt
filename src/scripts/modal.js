
const modalCreatePost = () => {
    const button = document.querySelector(".containerHeader__createPostButton")
    const modalContainer = document.querySelector(".modalController")

    button.addEventListener("click", () => {
        modalContainer.showModal();
        closeModalCreatePost();
    })
    
}

const closeModalCreatePost = () => {
    const button = document.querySelector(".modalContainer__buttonClose")
    const modalContainer = document.querySelector(".modalController");
    
    button.addEventListener("click", () => {
        
        modalContainer.close();
    })
};

const modalLogout = () => {
  const button = document.querySelector(".buttonLogout");
  const modalContainer = document.querySelector(".modalControllerLogout");
  const nameUser = document.createElement("h3");
    const user = JSON.parse(localStorage.getItem("@petInfo:postsIdUser"));
    
    button.style.backgroundImage = `url('${user.avatar}')`;
    button.style.backgroundSize = "cover";
    
    nameUser.classList.add("nameUserLogout")
    nameUser.innerText = `@${user.username}`
    
    
    button.addEventListener("click", () => {
      modalContainer.showModal();
    });

    modalContainer.appendChild(nameUser)
  }
  
  
  const modalEditPost = () => {
    const buttonsEditPost = document.querySelectorAll(".containerButtonsHeader__buttonEditPost");
    
    buttonsEditPost.forEach((button) => {
      button.addEventListener("click", () => {
        const modalContainer = document.querySelector(".modalContainerEdit");
        
        if (!modalContainer.open) {
          modalContainer.showModal();
        }
      });
    });
    
    const closeButton = document.querySelector(".containerHeader__buttonClose");
    closeButton.addEventListener("click", () => {
      const modalContainer = document.querySelector(".modalContainerEdit");
      modalContainer.close();
    });
  };
  
  modalEditPost();
  modalLogout();
  modalCreatePost();
  
  