let currentLang = "es"

document.getElementById("toggleLang").onclick = () => {

currentLang = currentLang === "es" ? "en" : "es"

document.querySelectorAll("[data-es]").forEach(el => {
el.textContent = el.getAttribute("data-" + currentLang)
})

}


document.getElementById("toggleDark").onclick = () => {

document.body.classList.toggle("dark")

}
