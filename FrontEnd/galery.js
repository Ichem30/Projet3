import { token } from "./index.js";


export const reponse = await fetch("http://localhost:5678/api/works");
export const works = await reponse.json();
export const gallery = document.querySelector(".gallery")
export const modalGalery = document.querySelector('.modal-galery')


// Génère la galerie sur la page d'accueil
export function genererGalerie(works){
    
    for (let i = 0; i < works.length; i++) {
        const figure = document.createElement("figure")
        const nomFigure = document.createElement("p")
        nomFigure.innerText = works[i].title
        const imageFigure = document.createElement ("img")
        imageFigure.src = works[i].imageUrl
        imageFigure.crossOrigin = "Anonymous"



        gallery.appendChild(figure)
        figure.appendChild(imageFigure)
        figure.appendChild(nomFigure)
        
    }
    
}

// Génère la galerie dans la modal
export function genererGalerieModal(works){
    
    for (let i = 0; i < works.length; i++) {
        const figure = document.createElement("figure")
        const editFigure = document.createElement("p")
        editFigure.innerText = "éditer"
        editFigure.classList.add('modal-edit')
        const imageFigure = document.createElement ("img")
        imageFigure.src = works[i].imageUrl
        imageFigure.crossOrigin = "Anonymous"
        const deleteBtn = document.createElement("button")
        const deleteIcon = document.createElement("i")
        deleteBtn.classList.add("modal-deletebtn")
        deleteIcon.classList.add("fa-sharp", "fa-solid" ,"fa-trash-can", "modal-deleteicon")
        figure.id = works[i].id


        modalGalery.appendChild(figure)
        figure.appendChild(imageFigure)
        figure.appendChild(editFigure)
        figure.appendChild(deleteBtn)
        deleteBtn.appendChild(deleteIcon)
        
        deleteIcon.addEventListener('click', (e) =>{
        deleteWork(e.target.parentNode.parentNode)
    })
    }
    
    

}

export function deleteWork(figure){
    const id = figure.id
    fetch("http://localhost:5678/api/works/"+ id, {
    method: 'DELETE',
    headers: { Authorization: `Bearer ${token}`
    }
})
}

document.getElementById('modal-img-add').addEventListener('click', function (e) {
    e.preventDefault()
    const input = document.getElementById('img-input').click()
  })

// Attribuer un id aux img pour les déplacer dans la liste
// supprimer avec une requete delete et refetch la nouvelle liste après le delete pour refresh