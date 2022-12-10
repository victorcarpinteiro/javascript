function verificar(){
    var data = new Date()
    var anoAtual = data.getFullYear()
    var nasc = document.querySelector('input#ano')
    var res = document.querySelector('div#verificador')
    
    if (nasc.value < 1900 || nasc.value >= anoAtual){
        window.alert('[ERRO] Preencha os dados corretamente')
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = anoAtual - Number(nasc.value)

        var genero = ''
        if(fsex[0].checked){
            genero = 'Homem'
        } else if(fsex[1].checked){
            genero = 'Mulher'
        }
        res.innerHTML = `Detectado ${genero} com ${idade} anos.`
    } if(idade >= 5 && idade <=12 && genero = 'Homem'){
        window.alert('criança homem')
    } else if(idade >= 5 && idade <=12 && genero = 'Mulher'){
        window.alert('criança mulher')
    }  if(idade >=13 && idade <= 18){
        window.alert('adolescente')
    }
}