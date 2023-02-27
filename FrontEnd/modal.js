import { works } from "./galery.js"
import { genererGalerieModal } from "./galery.js"
import { modalGalery } from "./galery.js"

const modal1 = document.getElementById('modal1')
const modal2 = document.getElementById('modal2')

let modal = null

// Fonction pour l'ouverture de la modale
const openModal = function (e) {
    e.preventDefault()
    modalGalery.innerHTML = ''
    const target = document.querySelector(e.target.getAttribute('href'))
    target.style.display = null
    target.removeAttribute('aria-hidden')
    target.setAttribute('aria-modal', 'true')
    modal = target
    modal.addEventListener('click', closeModal)
    modal.querySelector('.js-modal-close').addEventListener('click', closeModal)
    modal.querySelector('.js-modal-stop').addEventListener('click', stopPropagation)
    genererGalerieModal(works)
}

// Fonction pour la fermeture de la modale
const closeModal = function (e){
    if (modal === null) return
    e.preventDefault()

    modal1.style.display = 'none'
    modal2.style.display = 'none'
    modal.setAttribute('aria-hidden', 'true')
    modal.removeAttribute('aria-modal')
    modal.removeEventListener('click', closeModal)
    modal.querySelector('.js-modal-close').removeEventListener('click', closeModal)
    modal.querySelector('.js-modal-stop').removeEventListener('click', stopPropagation)
    modal = null
    modalGalery.innerHTML = ''
}

// StopPropagation pour retirer les évènements de fermeture à l'intérieur des parents
const stopPropagation = function (e) {
    e.stopPropagation()
}

// Evenement sur tout les liens contenant .js-modal
document.querySelectorAll('.js-modal').forEach(a => {
    a.addEventListener('click', openModal)
  
})

document.querySelector('.modal-add').addEventListener('click', () =>{
    document.getElementById('modal1').style.display = "none"
})


document.querySelector('.js-modal-back').addEventListener('click', (e) =>{
    document.getElementById('modal1').style.display = "flex"
    document.getElementById('modal2').style.display = "none"
})


// Appuyer sur echap pour fermer la page
window.addEventListener('keydown', (e) =>{
    if (e.key === "Escape" || e.key === "Esc") {
        closeModal(e) 
    }
})


// 2 modal différentes pour l'ajout photo en js
// fetch category sur l'api et map pour avoir un tableau de catégories et l'afficher dans la modal 2
