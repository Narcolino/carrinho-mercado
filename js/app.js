function adicionar() {
    let produto = document.getElementById('produto').value;
    let quantidade = document.getElementById('quantidade').value;

    let valor = parseInt(produto.split('R$')[1]);
    let textoProd = produto.split('-')[0];

    if (quantidade == 0){
        alert('Quantidade igual a zero, por favor selecione alguma quantidade para o produto ');
        document.getElementById('produto').value = 'Fone de ouvido - R$100';
    }else{
        escreverCarrinho(textoProd,quantidade,valor);
        calcular(valor,quantidade);
        document.getElementById('quantidade').value = '';
        document.getElementById('produto').value = 'Fone de ouvido - R$100';
    }

}

function escreverCarrinho (prod,quant,valor){
    let lista = document.getElementById ('lista-produtos');
    let itens = lista.querySelector('section');
    itens.innerHTML += `<br><span class="texto-azul">${quant}x</span> ${prod} <span class="texto-azul">R$${valor}</span>`
}

function limpar(){
    let lista = document.getElementById ('lista-produtos');
    let itens = lista.querySelector('section');
    itens.innerHTML = '';
    document.getElementById('valor-total').innerHTML = '000';

}

function calcular(valor,quant){
    let soma = valor*quant;
    let carrinho_total = document.getElementById('valor-total');
    let total = parseInt(carrinho_total.textContent);
    total += soma;
    carrinho_total.innerHTML = `${total}`;

}

