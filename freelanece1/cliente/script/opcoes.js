
"use strict"

// Elementos do HTML
const adicionais = document.querySelectorAll(".adicional")
const precoOriginal = document.querySelector(".valorDoacai")
const valorTotalFixado = document.getElementById("valorTotalFixado")
const barraFixa = document.getElementById("sectionValorTotalFixado")

// Preço inicial do açaí
const precoAcai = 12.00

// Formatar preço em reais
function formatarPreco(valor) {
    return valor.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    })
}

// Calcular e atualizar os preços
function calcularTotal() {

    let total = precoAcai

    adicionais.forEach(function (adicional) {

        const preco = Number(
            adicional.querySelector(".precoAdicional").dataset.preco
        )

        const quantidade = Number(
            adicional.querySelector(".quantidade").textContent
        )

        total += preco * quantidade

    })

    // Atualizar preço original
    precoOriginal.textContent = `Valor: ${formatarPreco(total)}`

    // Atualizar preço da barra fixa
    valorTotalFixado.textContent = `Preço: ${formatarPreco(total)}`
}

// Controlar os botões de quantidade
adicionais.forEach(function (adicional) {

    const botaoAumentar = adicional.querySelector(".aumentar")
    const botaoDiminuir = adicional.querySelector(".diminuir")
    const quantidadeElemento = adicional.querySelector(".quantidade")

    let quantidade = 0

    botaoAumentar.addEventListener("click", function () {

        quantidade++

        quantidadeElemento.textContent = quantidade

        calcularTotal()

    })

    botaoDiminuir.addEventListener("click", function () {

        if (quantidade > 0) {

            quantidade--

            quantidadeElemento.textContent = quantidade

            calcularTotal()

        }

    })

})

// Mostrar ou esconder a barra fixa
const observador = new IntersectionObserver(function (entradas) {

    entradas.forEach(function (entrada) {

        if (entrada.isIntersecting) {
            barraFixa.classList.remove("visivel")
        } else {
            barraFixa.classList.add("visivel")
        }

    })

})

observador.observe(precoOriginal)

// Calcular preço inicial
calcularTotal()
