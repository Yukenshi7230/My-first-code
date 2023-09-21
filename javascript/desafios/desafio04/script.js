function Tabuada() {
    let num = document.getElementById('txtn');
    let tab = document.getElementById('seltab');

    if (num.value.length == 0) {
        window.alert("Insira um número");
    } 
    // else if (isNaN(num.value)) {
    //     window.alert(`Por favor digite um valor numérico`)
    // }
    else {
        let n = Number(num.value);
        let c = 1
        tab.innerHTML = ''
        while (c <= 100) {
            let item = document.createElement('option')

            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
            c++
        }
    }
}
