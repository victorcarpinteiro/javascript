function gerar(){
    var numero = document.querySelector('input#numero')
    var tabuada = document.getElementById('tabuada')

    if (numero.value.length == 0){
        window.alert('Por favor, digite um numero')
    }else {
        var n = Number(numero.value)
        var c = 1
        tabuada.innerHTML=' '
        while (c <= 10){
            var tabu = document.createElement('option')
            tabu.text = `${n} x ${c} = ${n*c}`
            tabu.value = `tab${c}`
            tabuada.appendChild(tabu)
            c++
        }
    }
}