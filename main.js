// Exercicio 1
const arrayDeNumeros = [463, 288, 120, 687, 596, 492, 111, 759, 816, 623, 191, 342, 570, 892, 250, 703, 419, 732, 644, 853,];

const somaDosNumeros = arrayDeNumeros.reduce((valor, elemento)=> valor + elemento,0)
console.log(somaDosNumeros)
// Exercicio 2

const arrayDePares = arrayDeNumeros.filter(numero => numero % 2 === 0);
console.log(arrayDePares);
// Exercicio 3

const quadrados = arrayDeNumeros.map(numero => Math.pow(numero, 2));
console.log(quadrados)
// Exercicio 4-5-6-7-8

class Produto{
    nome
    preco
    quantidade
    constructor(nome, preco, quantidade){
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }

    vender(quantidadeVendida) {
        if( this.quantidade > quantidadeVendida){
            this.quantidade -= quantidadeVendida
        } else {
            console.log("Fora de estoque")
        }
    }
    repor(quantidadeDaReposicao) {
        this.quantidade += quantidadeDaReposicao
    }
    mostrarEstoque(){
        console.log("O produto" + this.nome + "possui" + this.quantidade + "unidades disponíveis")
    }
    atualizarPreco(novoPreco){
        this.preco = novoPreco
    }
}