

export function imgPreview() {
    document.getElementById('img-input').addEventListener('change', function () {
        const file = this.files[0]
        const reader = new FileReader()
    
        reader.addEventListener('load', function () {
          document.getElementById('img-preview').src = reader.result
          document.getElementById('img-preview').style.display = 'block'
        })
    
        reader.readAsDataURL(file)
      })
}

    const imgInput = document.getElementById('img-input')
    const titleInput = document.getElementById('title-info')
    const categoryInput = document.getElementById('category-info')
    const validBtn = document.getElementById('form-valid')

export function checkForm(){
    if(imgInput.files.length > 0 && titleInput.value.length > 0 && categoryInput.value !== '0'){
        validBtn.style.backgroundColor = '#1D6154'
        return true
    } else {
        validBtn.style.backgroundColor = '#A7A7A7'
        return false
  }
}

export function postImg() {
    document.getElementById('form-valid').addEventListener('click', (e) =>{
        console.log(e)
        e.preventDefault()

        const title = document.getElementById('title-info').value
        const category = document.getElementById('category-info').value

        const formData = new FormData()
        formData.append('title', title)
        formData.append('category', category)

        const img = document.getElementById('img-input').files[0]

        if(img) {
            formData.append('image', img)
        }

        const token = localStorage.getItem('token')

        try {
            fetch('http://localhost:5678/api/works', {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${token}`
            },
            body: formData
        })
        }catch (error) { console.error('Une erreur est survenue:', error) }
    })
}

