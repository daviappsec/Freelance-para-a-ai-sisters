let btn = document.getElementById("dropdownBtn")
let options = document.getElementById("dropdownOptions")
let items = document.querySelectorAll(".option")

// Abrir e fechar
btn.addEventListener("click", function() {
    options.classList.toggle("active")
})

// Selecionar opção
items.forEach(function(item) {
    item.addEventListener("click", function() {
        btn.innerHTML = item.textContent + " <span>⌄</span>"

        options.classList.remove("active")
    })
})

let entregaBtn = document.getElementById("entregaBtn")
let entregaOptions = document.getElementById("entregaOptions")

let entregaItems = entregaOptions.querySelectorAll(".option")

// Abrir e fechar
entregaBtn.addEventListener("click", function() {
    entregaOptions.classList.toggle("active")
})

// Selecionar modalidade
entregaItems.forEach(function(item) {
    item.addEventListener("click", function() {

        entregaBtn.innerHTML = item.textContent + " <span>⌄</span>"

        entregaOptions.classList.remove("active")

    })
})