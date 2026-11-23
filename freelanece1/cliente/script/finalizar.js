
"use strict"

// ======================================
// DROPDOWN SABORES
// ======================================

const btn = document.getElementById("dropdownBtn")
const options = document.getElementById("dropdownOptions")
const items = options.querySelectorAll(".option")

btn.addEventListener("click", function() {
    options.classList.toggle("active")
})

items.forEach(function(item) {
    item.addEventListener("click", function() {
        btn.innerHTML = item.textContent + " <span>⌄</span>"
        options.classList.remove("active")
    })
})


// ======================================
// DROPDOWN ENTREGA
// ======================================

const entregaBtn = document.getElementById("entregaBtn")
const entregaOptions = document.getElementById("entregaOptions")
const entregaItems = entregaOptions.querySelectorAll(".option-entrega")

entregaBtn.addEventListener("click", function() {
    entregaOptions.classList.toggle("active")
})

entregaItems.forEach(function(item) {
    item.addEventListener("click", function() {
        entregaBtn.innerHTML = item.textContent + " <span>⌄</span>"
        entregaOptions.classList.remove("active")
    })
})
