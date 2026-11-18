
"use strict"

// ELEMENTOS DO HTML
const adicionais = document.querySelectorAll(".adicional")
const precoOriginal = document.querySelector(".valorDoacai")
const valorTotalFixado = document.getElementById("valorTotalFixado")
const barraFixa = document.getElementById("sectionValorTotalFixado")
const botaoAvancar = document.querySelector(".AvancarOPedido")

// INFORMAÇÕES DO PRODUTO
const tituloAcai = document.querySelector(".tituloDoAcai").textContent.trim()
const descricaoAcai = document.querySelector(".descricaoDoAcai").textContent.trim()

// PREÇO DO AÇAÍ
const precoAcai = 12.00

// FORMATAR VALOR EM REAIS
function formatarPreco(valor) {
    return valor.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    })
}

// CALCULAR PREÇO TOTAL
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

    // Atualizar preço do produto
    precoOriginal.textContent = `Valor: ${formatarPreco(total)}`

    // Atualizar barra fixa
    valorTotalFixado.textContent = `Preço: ${formatarPreco(total)}`

    return total
}

// CONTROLE DOS ADICIONAIS
adicionais.forEach(function (adicional) {

    const botaoAumentar = adicional.querySelector(".aumentar")
    const botaoDiminuir = adicional.querySelector(".diminuir")
    const quantidadeElemento = adicional.querySelector(".quantidade")

    let quantidade = 0

    // AUMENTAR
    botaoAumentar.addEventListener("click", function () {

        quantidade++

        quantidadeElemento.textContent = quantidade

        calcularTotal()

    })

    // DIMINUIR
    botaoDiminuir.addEventListener("click", function () {

        if (quantidade > 0) {

            quantidade--

            quantidadeElemento.textContent = quantidade

            calcularTotal()

        }

    })

})

// BARRA DE PREÇO FIXA
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

// AVANÇAR PARA O CARRINHO
botaoAvancar.addEventListener("click", function () {

    const total = calcularTotal()

    // Capturar os adicionais escolhidos
    const adicionaisEscolhidos = []

    adicionais.forEach(function (adicional) {

        const quantidade = Number(
            adicional.querySelector(".quantidade").textContent
        )

        if (quantidade > 0) {

            adicionaisEscolhidos.push({

                id: adicional.dataset.id,

                nome: adicional.querySelector(".nomeAdicional").textContent.trim(),

                preco: Number(
                    adicional.querySelector(".precoAdicional").dataset.preco
                ),

                quantidade: quantidade

            })

        }

    })

    // Montar o produto
    const produto = {

        nome: tituloAcai,

        descricao: descricaoAcai,

        precoBase: precoAcai,

        adicionais: adicionaisEscolhidos,

        total: total

    }

    // Recuperar carrinho existente
    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || []

    // Adicionar produto ao carrinho
    carrinho.push(produto)

    // Salvar carrinho
    localStorage.setItem("carrinho", JSON.stringify(carrinho))

    // Ir para a página do carrinho
    window.location.href = "carrinho.html"

})

// CALCULAR PREÇO INICIAL
calcularTotal()
