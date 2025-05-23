function main() {
    let peso = Number(document.getElementById("peso").value);
    let altura = Number(document.getElementById("altura").value);

    let result = peso / (altura * altura)
    let txt
    if (result < 18.5) {
        txt = 'Abaixo do normal'
    } else if (result < 24,9){
        txt = 'Normal'
    } else if (result < 29,9){
        txt = 'Sobrepeso'
    } else if (result < 34,9){
        txt = 'Obesidade grau I'
    } else if (result < 39,9){
        txt = 'Obesidade grau II'
    } else {
        txt = 'Obesidade grau III'
    }
}