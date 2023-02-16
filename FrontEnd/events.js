import { works } from "./galery.js"
import { genererGalerie } from "./galery.js"
import { gallery } from "./galery.js"

const boutonAll = document.querySelector('.btn-all')
const boutonObjects = document.querySelector('.btn-objects')
const boutonApt = document.querySelector('.btn-apt')
const boutonHr = document.querySelector('.btn-hr')

boutonAll.addEventListener('click', () =>{
    gallery.innerHTML = ''
    genererGalerie(works)
})

boutonObjects.addEventListener('click', () =>{
    filterImg([1])
})

boutonApt.addEventListener('click', () =>{
    filterImg([2])
})

boutonHr.addEventListener('click', () =>{
    filterImg([3])
})

export function filterImg(id){
    const imgFiltered = works.filter(work => work.categoryId == id)
    gallery.innerHTML = ''
    genererGalerie(imgFiltered)
    
    
}





