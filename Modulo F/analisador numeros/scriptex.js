var numero = document.querySelector('input#numero')
var campoVetor = document.querySelector('select#vetor')
var texto = document.querySelector('p#txt')
var vetor = []
function adicionar(){
    if(numero.value.length == 0 || numero.value < 1 || numero.value > 100){
        window.alert('[Erro] Digite um número válido')
    } else {
        var ex = vetor.indexOf(numero.value)
        if(vetor == [] || ex == -1){
        vetor.push(numero.value)
        var num = document.createElement('option')
        num.innerHTML = `Valor ${numero.value} adicionado`
        campoVetor.appendChild(num)
        }else{
        window.alert('[Erro] Número já inserido')
    }
}
}

function finalizar(){
    var organizar = vetor.sort()
    var quantidade = vetor.length
    var maior 
    var menor = vetor[0]
    var soma
    // var média // soma dividido pela quantidade
    // window.alert(maior)
    // window.alert(s)
    var qtt = document.createElement('p')
    qtt.innerHTML = `Ao todo temos ${quantidade} números cadastrados.`
    texto.appendChild(qtt)
    var meno = document.createElement('p')
    meno.innerHTML = `O menor valor informado foi ${menor}.`
    texto.appendChild(meno)
}