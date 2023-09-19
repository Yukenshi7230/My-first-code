function verificar() {
    var dat = new Date()
    var ano = dat.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var img = document.createElement('img')
        img.setAttribute('id', 'foto');
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >=0 && idade < 10) {
                //Criança
                ('src', 'images/boy1.png')
            } else if (idade < 50) {
                //Jovem
                img.setAttribute('src', 'images/boy2.png')
            } else {
                //idoso
                img.setAttribute('src', 'images/boy3.png')
            }
            
            
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >=0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'images/girl1.png')
            } else if (idade < 50) {
                //Jovem
                img.setAttribute('src', 'images/girl2.png')
            } else {
                //idoso
                img.setAttribute('src', 'images/girl3.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos. `
        res.appendChild(img)
    }

}