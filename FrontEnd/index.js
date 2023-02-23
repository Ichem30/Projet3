import { genererGalerie } from "./galery.js";
import { works } from "./galery.js";


genererGalerie(works);


// window.localStorage.removeItem("nom");

export const token = localStorage.getItem('token')
const loginBtn = document.querySelector('.login-btn')
const logoutBtn = document.querySelector('.logout-btn')
const streamer = document.querySelector('#streamer')
const buttons = document.querySelector('.buttons')

if(token){
    loginBtn.classList.add('none')
    logoutBtn.style.display = null
    streamer.style.display = null
    buttons.classList.add('none')
} else{
    logoutBtn.classList.add('none')
    
}

logoutBtn.addEventListener('click', () => {
    window.localStorage.removeItem("token")
    logoutBtn.classList.add('none')
    window.location.reload()
})

// La modale créé un tableau copie de works avec les éléments qu'on ajoute et supprime et le bouton dans le streamer sert à déployer ce tableau