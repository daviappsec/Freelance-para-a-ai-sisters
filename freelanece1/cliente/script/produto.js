const menuBtn = document.getElementById("menuBtn")
const menu = document.getElementById("menu")

menuBtn.addEventListener("click", () => {

    menu.classList.toggle("ativo")

    const aberto = menu.classList.contains("ativo")

    menuBtn.setAttribute("aria-expanded", aberto)
    menuBtn.setAttribute("aria-label", aberto ? "Fechar menu" : "Abrir menu")
})