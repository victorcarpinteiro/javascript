function carregar(){
    var data = new Date()
    var hora = data.getHours()
    var txt = document.querySelector('div#msg')
    var ft = document.querySelector('div#img')
    var photo = document.getElementById('foto')
    var corpo = document.getElementsByTagName('body')[0]
    var hora = 10
    txt.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 0 && hora < 12){
        //manhã
        photo.src = 'imagens/manha.jpg'
        corpo.style.background= '#A18D01'
    }else if(hora >= 12 && hora <= 18){
        //tarde
        photo.src = 'imagens/tarde.jpg'
        corpo.style.background= '#552006'
    } else{
        //noite
        photo.src = 'imagens/noite.jpg'
        corpo.style.background= '#464648'
    }
}