function reloj(){
    const fecha = new Date();

    const horas = agregarCero (fecha.getHours());
    const minutos = agregarCero (fecha.getMinutes());
    const segundos = agregarCero (fecha.getSeconds());
    const HoraActual = `${horas}:${minutos}:${segundos}`;
    document.getElementById('reloj').textContent = HoraActual;

}

function agregarCero (numero){
    return numero <10? `0${numero}`:numero;
}

setInterval(reloj,1000);
reloj();