// Variável que recebe e mostra os dados na tela
let result = document.querySelector('.result');

function verifica(event) {
    let botaoClicado = event.target.value;

    // verifica se existe o zero na tela ou não
    result.value == 0 ? result.value = botaoClicado : result.value += botaoClicado;
}

function addSub() {
    let sub = result.value.substr(0,1);
}

function resete(){
    result.value = ''
}

function apagar() {
    let valorApagado = result.value.length -1;
    let sliced = result.value.slice(0, valorApagado);
    result.value = sliced
}

function calcular() {
    let resultValue = eval(result.value)
    result.value = resultValue;
}