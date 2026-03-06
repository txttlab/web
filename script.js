/* SCROLL SUAVE */

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener('click',function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute('href'));

if(target){

window.scrollTo({
top:target.offsetTop-80,
behavior:'smooth'
});

}

});

});

/* MODO OSCURO */

const themeBtn=document.getElementById("themeToggle");

if(localStorage.getItem("theme")==="light"){
document.body.classList.add("light-mode");
themeBtn.textContent="☀️";
}

themeBtn.addEventListener("click",()=>{

document.body.classList.toggle("light-mode");

if(document.body.classList.contains("light-mode")){
themeBtn.textContent="☀️";
localStorage.setItem("theme","light");
}else{
themeBtn.textContent="🌙";
localStorage.setItem("theme","dark");
}

});

/* IDIOMA */

const langBtn=document.getElementById("langToggle");
let lang="es";

langBtn.addEventListener("click",()=>{

lang=lang==="es"?"en":"es";

langBtn.textContent=lang==="es"?"EN":"ES";

document.querySelectorAll("[data-es]").forEach(el=>{
el.textContent=el.dataset[lang];
});

});
