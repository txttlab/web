document.addEventListener("DOMContentLoaded",function(){

/* DARK MODE */

const themeBtn=document.getElementById("themeToggle");

if(localStorage.getItem("theme")==="light"){
document.body.classList.add("light");
themeBtn.textContent="☀️";
}

themeBtn.addEventListener("click",function(){

document.body.classList.toggle("light");

if(document.body.classList.contains("light")){
themeBtn.textContent="☀️";
localStorage.setItem("theme","light");
}else{
themeBtn.textContent="🌙";
localStorage.setItem("theme","dark");
}

});

/* LANGUAGE */

const langSwitcher=document.getElementById("languageSwitcher");

langSwitcher.addEventListener("change",function(){

const lang=this.value;

document.querySelectorAll("[data-es]").forEach(el=>{
el.textContent=el.getAttribute("data-"+lang);
});

localStorage.setItem("lang",lang);

});

const savedLang=localStorage.getItem("lang");

if(savedLang){

langSwitcher.value=savedLang;

document.querySelectorAll("[data-es]").forEach(el=>{
el.textContent=el.getAttribute("data-"+savedLang);
});

}

});
