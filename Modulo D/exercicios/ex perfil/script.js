function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var formAno = document.querySelector('input#ano')
    var res = document.querySelector('div#verificador')
    if (formAno.value <= 0 || formAno.value >= ano){
        window.alert('[ERRO] Verifique os dados e tente novamente! ')
    }else{
         var sex = document.getElementsByName('radsex')
         var idade = ano - formAno.value
         var genero = ''
         var img = document.createElement('img')
         img.setAttribute('id', 'fotos') 
         if (sex[0].checked){
            genero = 'Homem'
            if (idade >=0 && idade <10){
                // criança
                img.setAttribute('src','imagens/criancah.jpg') 
            } else if (idade <21){
                //joven
                img.setAttribute('src','imagens/jovenh.jpg') 
            } else if (idade <50){
                //adulto
                img.setAttribute('src','imagens/adultoh.jpg') 
            }else{
                //idoso
                img.setAttribute('src','imagens/idosoh.jpg') 
            }
         } else if(sex[1].checked){ 
            genero = 'Mulher'
            if (idade >=0 && idade <10){
                // criança
                img.setAttribute('src','imagens/criancam.jpg') 
            } else if (idade <21){
                //joven
                img.setAttribute('src','imagens/jovenm.jpg') 
            } else if (idade <50){
                //adulto
                img.setAttribute('src','imagens/adultom.jpg') 
            }else{
                //idoso
                img.setAttribute('src','imagens/idosam.jpg') 
            }
         }
         res.style.textAlign = 'center'
         res.innerHTML = `Detectamos ${genero} com ${idade} idade.`
         res.appendChild(img)
    }
}