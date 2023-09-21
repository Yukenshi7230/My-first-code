let valores = ['Meiko', 'Camila', 'Gregs', 'Zenny', 'Danni', 'Orfield', 'Mikki']
//               (0)        (1)     (2)       (3)      (4)      (5)        (6)




/*
--------------------Maneira mais based de mostrar os valores-----------------

console.log(valores)


------------------------------ Maneira Noob de fazer mostrar os valores---------------------------------
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])
console.log(valores[6])


---------------------Mostra a posição de cada um e a numeração de modo mais e mais REDPILL------------------------------

for(let pos=0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem valor ${valores[pos]}`)
}
*/


//----------------------------------- Simplificado---------------------------
for (let pos in valores) {
    console.log(`A posição ${pos} tem valor ${valores[pos]}`)
}


//Aqui é como um BUSCAR o nome de algo que está dentro de sua variável, mas somente em número
let pos = valores.indexOf('Gregs')
if (pos == -1) {
    console.log('O valor não foi encontrado')
} else {
    console.log(`O nome ${valores[pos]} será ${pos}`)
}