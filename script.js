function setLang(lang){

document.querySelectorAll("[data-es]").forEach(el=>{
el.textContent=el.getAttribute("data-"+lang)
})

}

const themeBtn=document.getElementById("themeToggle")

if(localStorage.getItem("theme")==="light"){
document.body.classList.add("light-mode")
themeBtn.textContent="☀️"
}

themeBtn.onclick=function(){

document.body.classList.toggle("light-mode")

if(document.body.classList.contains("light-mode")){
localStorage.setItem("theme","light")
themeBtn.textContent="☀️"
}else{
localStorage.setItem("theme","dark")
themeBtn.textContent="🌙"
}

}
