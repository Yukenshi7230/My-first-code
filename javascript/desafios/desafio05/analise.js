let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

// A princío, foi definido a associação das variáveis com as classes e ids no HTML ou CSS utilizando o comando getByElement OU nesse caso o querySelector que associa ao CSS



/* Abaixo estarão todas as funções utilizadas*/


//Essa função verifica se o número digitado pelo usuário (input) está entre 1 e 100
function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else { 
        return false
    }
}

//Esta função verifica se o número está ou não está presente na lista dos (valores: [])
function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }

}

//Esta função permite "adicionar" um número na lista grande.
function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, valores)) {
            valores.push(Number(num.value))
            let item = document.createElement('option')
            item.text = `Valor ${num.value} adicionado.`
            lista.appendChild(item)
            res.innerHTML = ''
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = ''
    num.focus()

}


// Esta função traz consigo a analise mais apropriada de cada dado.
function finalizar() {
    if (valores.length == 0) { //Pede pra ter pelo menos um número na caixa
        window.alert('Adicione valores antes de finalizar!')
    } else {                                            //Caso o contrário, ele vai executar esse comando de baixo.
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p> Ao todo, temos ${tot} números cadastrados</p>`
        res.innerHTML += `<p> O maior valor informado foi ${maior}. </p>`
        res.innerHTML += `<P> O menor valor informado foi ${menor}. </p>`
        res.innerHTML += `<p> Somando todos os valores, temos ${soma}. </p>`
        res.innerHTML += `<p> A média dos valores é ${media}. </p>`
    }
}