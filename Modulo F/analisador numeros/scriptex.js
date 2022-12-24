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
        vetor.push(Number(numero.value))
        var num = document.createElement('option')
        num.innerHTML = `Valor ${numero.value} adicionado`
        campoVetor.appendChild(num)
        texto.innerHTML = ''
        }else{
        window.alert('[Erro] Número já inserido')
    }
}
}

function finalizar(){

    if(vetor == 0){
        window.alert('Favor preenhcer um numero')
    }else{
        
        var total = vetor.length
        var maior = vetor[0]
        var menor = vetor[0]
        var soma = 0
        var media = 0

        for(var pos in vetor){
            soma += vetor[pos]
            if(vetor[pos] > maior){
                maior = vetor[pos]
            }
            if(vetor[pos] < menor){
                menor = vetor[pos]
            }
        }
        media = soma / total
        texto.innerHTML = ''
        texto.innerHTML += `<p> Ao todo, temos ${total} números cadastrados <\p>`
        texto.innerHTML += `<p> O menor número é ${menor}<\p>`
        texto.innerHTML += `<p> O maior número é ${maior}<\p>`
        texto.innerHTML += `<p> A soma dos valores é ${soma}<\p>`
        texto.innerHTML += `<p> A média dos valores é ${media}<\p>`
    }
    
}