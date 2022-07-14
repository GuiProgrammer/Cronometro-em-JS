
/* Variáveis */
const start = document.getElementById('start-btn')
const pause = document.getElementById('pause-btn')
const reset = document.getElementById('reset-btn')
var seconds = 0
var minutes = 0
var hours = 0
var interval


/* Função para os numeros do cronometro */
function twodigits(digit){
    if(digit < 10){ /* Se o número da contagem do cronometro for menor que 10 */
        return '0'+digit /* Coloque um '0' antes do número */
    }
    else{
        return digit /* Deixe da forma que está */
    }
}
start.onclick = function(){
    contador() /* Contagem dos números */
    interval =setInterval(contador, 1000) /* Selecionando um intervalo de tempo em 1000ms */
}

function contador(){
    seconds++
    if(seconds == 60){ /* Se chegar a 60 segundos */
        minutes++ /* Comece a contar os minutos */
        seconds=0 /* e zere os segundos */
    }
    if(minutes == 60){
        hours++
        minutes=0
    }
    document.getElementById('cronometro').innerText=`${twodigits(hours)}:${twodigits(minutes)}:${twodigits(seconds)}` /* Contando os números na tela */
}

pause.onclick = function(){
    clearInterval(interval) /* Pausa o intervalo, mas não volta ao início */
}

reset.onclick = function(){
    clearInterval(interval)/* Pausa o intervalo */
    /* Zerando a contagem */
    minutes = 0
    seconds = 0
    hours=0
    document.getElementById('cronometro').innerText=`00:00:00`
}
