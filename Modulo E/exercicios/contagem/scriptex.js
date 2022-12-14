function contar(){
    var inicio = document.querySelector('input#inicio')
    var fim = document.querySelector('input#fim')
    var passo = document.querySelector('input#passo')
    var texto = document.querySelector('p#txt')
   
    if(inicio.value.length == 0){
        texto.innerHTML = 'Impossível contar (preencha o inicio) !'
    } else if(fim.value.length == 0){
        texto.innerHTML = 'Impossível contar (preencha o fim) !'
    } else{
        texto.innerHTML = 'Contando: <br> '
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if (p <= 0){
            window.alert('Passo não preenchido, considerando Passo = 1 ')
            p = 1
        }
    }
    if(i < f){
        for (var c = i; c <= f; c += p){
                texto.innerHTML += `${c} \u{1F449}`
            }
    } else {
        for (var c = i; c >= f; c -= p){
            texto.innerHTML += `${c} \u{1F449}`
        }
        texto.innerHTML += `\u{1F3C1}`
    
    } 
}