/* Desenvolva seu código aqui */
import { login } from "./requests.js"

function handleLogin () {
    const inputs = document.querySelectorAll(".containerLogin__input")
    const button = document.querySelector(".confirm__button")
    let loginBody = {}
    let count = 0

    button.addEventListener("click", (event) => {
        event.preventDefault()

        inputs.forEach(input => {
            if(input.value.trim() === ""){
                count++
            }
            loginBody[input.name] = input.value
        })
        if(count != 0){
            count = 0
            return alert ("por favor, preencha todos os campos")
        }else{
            login(loginBody)
        }
    })
}

const buttonCadastre = () => {
    const button = document.querySelector(".redirect-edit__button")
    
    button.addEventListener("click", (event) => {
        event.preventDefault();
        location.replace("./src/pages/signup.html");
    })
}
handleLogin()
buttonCadastre();