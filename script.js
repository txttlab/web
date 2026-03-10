document.querySelectorAll('a[href^="#"]').forEach(anchor => {

anchor.addEventListener('click', function(e){

const target = document.querySelector(this.getAttribute('href'));

if(target){

e.preventDefault();

window.scrollTo({
top: target.offsetTop - 80,
behavior: 'smooth'
});

}

});

});


/* =========================
MODO OSCURO
========================= */

const themeBtn = document.getElementById("themeToggle");

function setTheme(theme){

if(theme === "light"){

document.body.classList.add("light-mode");
themeBtn.textContent = "☀️";

}else{

document.body.classList.remove("light-mode");
themeBtn.textContent = "🌙";

}

}

let savedTheme = localStorage.getItem("theme") || "dark";

setTheme(savedTheme);

themeBtn.addEventListener("click", () => {

savedTheme = savedTheme === "dark" ? "light" : "dark";

localStorage.setItem("theme", savedTheme);

setTheme(savedTheme);

});


/* =========================
IDIOMA ES / EN
========================= */

const langBtn = document.getElementById("langToggle");

let currentLang = localStorage.getItem("lang") || "es";

function setLanguage(lang){

document.querySelectorAll("[data-es]").forEach(el => {

const text = el.getAttribute("data-" + lang);

if(text){
el.textContent = text;
}

});

langBtn.textContent = lang.toUpperCase();

}

setLanguage(currentLang);

langBtn.addEventListener("click", () => {

currentLang = currentLang === "es" ? "en" : "es";

localStorage.setItem("lang", currentLang);

setLanguage(currentLang);

});
