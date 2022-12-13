function contar(){
    var inicio = document.querySelector('input#inicio')
    var fim = document.querySelector('input#fim')
    var passo = document.querySelector('input#passo')
    var texto = document.querySelector('p#txt')
    var conta =''
    if(inicio.value <= 0){
        texto.innerHTML = 'Impossível contar !'
    } else if(fim.value == 0){
        texto.innerHTML = 'Impossível contar !'
    } else if(passo.value == 0){
        window.alert('Passo não preenchido, considerando valor de inicio! ')
    }
    
    for (var conta = inicio.value ; conta <= fim.value ; conta + passo.value){
        texto.innerHTML = `${conta} mão `
    }
    
    
    // for(var j = inicio.value;j <= fim.value;c+passo.value){
    //     console.log('passo ${j}')
    // }


}