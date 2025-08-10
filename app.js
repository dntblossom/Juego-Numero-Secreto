let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
let numeroMaximoDeJuego = 5;


function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('numeroUsuario').value);

    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}.`);
        document.querySelector('#termino').setAttribute('disabled',true);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p', 'El número secreto es menor');
        } else {
            asignarTextoElemento('p', 'El número secreto es mayor');
        }
        intentos++;
        if (intentos <= 3){
            limpiarCaja();
        } else {
            asignarTextoElemento('p', 'Limite de intentos. Juega de nuevo');
            document.querySelector('#termino').setAttribute('disabled',true);
            document.getElementById('reiniciar').removeAttribute('disabled');
        }
    }

    return;
}

function limpiarCaja(){
    document.querySelector('#numeroUsuario').value = '';
}

function asignarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo) + 1;
    //si el numero genearado está incluido en la lista
    if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');
    } else {
        if (listaNumerosSorteados.includes(numeroGenerado)){
            return asignarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'JUEGO DEL NÚMERO SECRETO');
    asignarTextoElemento('p' , `Indíca un número del 1 al ${numeroMaximo}`);
    numeroSecreto = asignarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números
    //Generar nuevo número aleatorio
    //Inicializar el número intentos
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled',true);
    document.getElementById('termino').removeAttribute('disabled');
}

condicionesIniciales();

