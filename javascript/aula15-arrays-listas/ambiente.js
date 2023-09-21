let num = ['carro ', 'moto ', 'motinha '] //Uma array(lista) que começa (0, 1, 2, 3) ... A variável "num" tem esse valor
num[3] = 'onibus' // Aqui foi adicionado "onibus" como o terciro da lista A lista agora é [carro, moto, motinha, onibus]
console.log(`Agora o vetor tem ${num.length}`)
num.push('aviao') // O comando "num.push" adicina uma array por ultimo na lista, sempre, sem se preocupar em especificar a numeração. [carro, moto, motinha, onibus, aviao]
num.sort()
console.log(`Nosso vetor é o ${num[4]}`)

console.log(`O nosso vetor tem ${num.length} posições!`)

