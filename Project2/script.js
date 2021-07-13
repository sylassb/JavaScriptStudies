function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Garoto'
            if (idade >= 0 && idade < 10) {
                
                img.setAttribute('src', 'imagens/babym.jpg')
            } else if (idade < 21) {
                
                img.setAttribute('src', 'imagens/youngm.jpg', widht= 250 , height=250)
            } else if (idade < 50) {
                
                img.setAttribute('src', 'imagens/adultm.png')
            } else {
                
                img.setAttribute('src', 'imagens/elderm.png')
            }
        } else if (fsex[1].checked) {
                genero = 'Garota'
                if (idade >= 0 && idade < 10) {

                    img.setAttribute('src', 'imagens/babyf.jpg')
            } else if (idade < 21) {
                
                img.setAttribute('src', 'imagens/youngf.png')
            } else if (idade <50) {
                
                img.setAttribute('src', 'imagens/adultf.jpeg')
            } else {
                
                img.setAttribute('src', 'imagens/elderf.png')
            }
        }
            res.style.textAlign = 'center'
            res.innerHTML = `Detectamos que você é ${genero} com ${idade} anos de idade.`
            res.appendChild(img)
            } 
        }
    

