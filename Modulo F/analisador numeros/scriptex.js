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
    var menor
    var soma
    var média
    window.alert(maior)
    for(var s = 0; s < vetor.length ;s++){
    var soma = vetor += vetor
    }
    window.alert(s)
}