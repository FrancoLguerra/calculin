let dolar = document.getElementById('monto');
let pesos = document.getElementById('pesos');
let tarjeta = document.getElementById('tarjeta');

function multiplicar(valor,interes3,interes6,interes12){
    let resultado = (valor * interes3) / 3;
    let resultado2 = (valor * interes6)/6;
    let resultado3 = (valor * interes12)/12;
    return resultado, resultado2, resultado3;
}

addEventListener('submit', function() {

    let valor = dolar.value * pesos.value;

    // let tarjeta = tarjeta.value;
    // switch(tarjeta) {
    //     case 'visa':
    //         alert('Tu tarjeta es visa');
    //         break;
    //     case 'mastercard':
    //         alert('Tu tarjeta es mastercard');
    //         break;
    //     case 'amex':
    //         alert('Tu tarjeta es amex');
    //         break;
    //     default:
    //         alert('Tu tarjeta es invalida');
    //         break;
    // }
    this.alert('Tu monto es: ' + valor);

})