let dolar = document.getElementById('monto');
let pesos = document.getElementById('pesos');
let tarjeta = document.getElementById('tarjeta').value;
let total = document.getElementById('valor');
let tres = document.getElementById('tres');
let seis = document.getElementById('seis') ;
let doce = document.getElementById('doce') ;
let btn = document.getElementById('btn');

function multiplicar(valor,interes3,interes6,interes12){
    let resultado = (valor * interes3) / 3;
    let resultado2 = (valor * interes6)/6;
    let resultado3 = (valor * interes12)/12;
    limpiarValores();
    total.innerHTML = "El precio en pesos es de: " + "$"+ valor;
    tres.innerHTML = "El valor en 3 Cuotas es de : " + "$"+ resultado;
    seis.innerHTML = "El valor en 6 Cuotas es de : " +"$"+resultado2;
    doce.innerHTML = "El valor en 12 Cuotas es de : "+"$"+resultado3;


}

function limpiarValores(){
    tres.innerHTML = "";
    seis.innerHTML = "";
    doce.innerHTML = "";

}

btn.addEventListener('click', function() {

    let valor = dolar.value * pesos.value;

    switch(tarjeta) {
        case 'visa':
            multiplicar(valor, 1.25, 1.40, 1.60);
            break;
        case 'mastercard':
            multiplicar(valor, 1.25, 1.40, 1.60);
            break;
        case 'cabal':
            multiplicar(valor, 1.25, 1.40, 1.60);
            break;
        case 'naranja':
            multiplicar(valor, 1.30, 1.50, 1.80);
            alert('Tu tarjeta es naranja');
            break;
        default:
            alert('Tu tarjeta es invalida');
            break;
    }


})