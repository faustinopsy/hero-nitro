export function buscaInfHora() {
    const agora = new Date();
    let hora = agora.getHours();
    let minutos = agora.getMinutes();
    //hora = 2;
    //minutos = 5;

    const eDia = hora >= 6 && hora < 18;
    return { hora, minutos, eDia };
}