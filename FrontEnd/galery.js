export const reponse = await fetch("http://localhost:5678/api/works");
export const works = await reponse.json();
export const gallery = document.querySelector(".gallery")

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