let amigo = {nome: 'Isabela', 
sexo: 'F', 
peso: 52.4,
engordar (p){
    console.log('Engordou')
    this.peso += p
}}
amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)