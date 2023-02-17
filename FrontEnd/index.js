import { genererGalerie } from "./galery.js";
import { works } from "./galery.js";


genererGalerie(works);


// window.localStorage.removeItem("nom");

const token = localStorage.getItem('token')
const loginBtn = document.querySelector('.login-btn')
const logoutBtn = document.querySelector('.logout-btn')
const streamer = document.querySelector('#streamer')

if(token){
    loginBtn.classList.add('none')
    logoutBtn.classList.remove('none')
    streamer.classList.add('none')

} else{
    logoutBtn.classList.add('none')
    
}

logoutBtn.addEventListener('click', () => {
    window.localStorage.removeItem("token")
    logoutBtn.classList.add('none')
    window.location.reload()
})