function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes();
        if (hora >= 0 && hora < 12) {
        msg.innerHTML  =  `Agora são ${hora} horas e ${minutos} minutos, bom dia!`
        img.src = 'imagens/fotomanha.jpg'
        document.body.style.background = '#E0FFFF'
    }   else if (hora >= 12 && hora <= 18) {
        msg.innerHTML  =  `Agora são ${hora} horas e ${minutos} minutos, boa tarde!`
        img.src = 'imagens/fototarde.jpg'
        document.body.style.background = '#ff8c00'
    }   else {
        msg.innerHTML  =  `Agora são ${hora} horas e ${minutos} minutos, boa noite!`
        img.src = 'imagens/fotonoite.jpg'
        document.body.style.background = '#100c08'
       }
    }
    
    