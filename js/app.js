function adicionar() {
    let opcoes = document.getElementById('produto');
    let produto = opcoes.value;
    let quantidade = document.getElementById('quantidade').value;

    let posicaoHifen = produto.indexOf('-');
    let valor = produto.slice(posicaoHifen + 4).trim();

    let textoProd = produto.substring(0,posicaoHifen).trim();

    escreverCarrinho(textoProd,quantidade,valor);

}

function escreverCarrinho (prod,quant,valor){
    let lista = document.getElementById ('lista-produtos');
    let itens = lista.querySelector('section');
    itens.innerHTML += `<span class="texto-azul">${quant}x</span> ${prod} <span class="texto-azul">R$${valor}</span>`
}

function limpar(){

}

function calcular(){

}

