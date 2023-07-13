const menuBtn = document.getElementById("menubtn")
const menu = document.getElementById("menu")

menuBtn.addEventListener("click", () => {
    menu.classList.toggle("hidden")
})