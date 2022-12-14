function gerar(){
    var numero = document.querySelector('input#numero')
    var tabuada = document.getElementById('tabuada')

    if (numero.value.length == 0){
        window.alert('favor preencher um numero')
    }else{
        var n = Number(numero.value)
        var c = 1
        while (c <= 10){
            var tab = document.creatElement('option')
            tab.text = `${n} x ${c} = ${n*c}`
            tabuada.appenChild(tab)
            c++
        }
    }
}