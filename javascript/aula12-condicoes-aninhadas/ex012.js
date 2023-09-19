var agora = new Date(); // Cria um objeto Date representando o momento atual.
var hora = agora.getHours(); // Obtém a hora atual a partir do objeto Date.
console.log(`CÓCÓ! Agora são exatamente ${hora} horas.`); // Exibe a hora atual.

if (hora >= 6 && hora < 12) {
    console.log('Bom dia!!'); // Se a hora estiver entre 6 (inclusive) e 12 (exclusivo), exibe "Bom dia!!".
} else if (hora >= 12 && hora < 18) {
    console.log('Boa Tarde!'); // Se a hora estiver entre 12 (inclusive) e 18 (exclusivo), exibe "Boa Tarde!".
} else if (hora >= 18 || hora < 6) {
    console.log('Boa Madrugada!'); // Se a hora for maior ou igual a 18 ou menor que 6, exibe "Boa Madrugada!".
} else {
    console.log('Só mais um bom dia'); // Se nenhuma das condições anteriores for atendida, exibe "Só mais um bom dia".
}
