// SCROLL SUAVE

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener('click',function(e){

e.preventDefault()

const target=document.querySelector(this.getAttribute('href'))

window.scrollTo({

top:target.offsetTop-80,

behavior:'smooth'

})

})

})


// MODAL

function openModal(img){

document.getElementById("modalImage").src=img.src

document.getElementById("imageModal").style.display="flex"

}

function closeModal(){

document.getElementById("imageModal").style.display="none"

}


// TEMA OSCURO / CLARO

const toggle=document.getElementById("themeToggle")

if(localStorage.getItem("theme")==="light"){

document.body.classList.add("light-mode")

toggle.textContent="☀️"

}

toggle.addEventListener("click",()=>{

document.body.classList.toggle("light-mode")

if(document.body.classList.contains("light-mode")){

toggle.textContent="☀️"

localStorage.setItem("theme","light")

}else{

toggle.textContent="🌙"

localStorage.setItem("theme","dark")

}

})
