import { works } from "./galery.js";

const form = document.querySelector('#form-login')

form.addEventListener('submit', (e) =>{
  e.preventDefault();

  const mail = document.querySelector('#email-input').value   
  const password = document.querySelector('#password-input').value  

  const post = {
      email: mail,
      password: password
  }
 
  fetch("http://localhost:5678/api/users/login", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(post)
    })
    .then((response) => response.json())
    .then((data) => {
        if(data.userId){
        window.localStorage.setItem("token", data.token);
        window.location.href = "index.html"
    } else {
        alert("Identifiant ou mot de passe incorrect")
    }
})
   
    
})


