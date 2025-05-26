export function buscaInfHora() {
    const agora = new Date();
    const hora = agora.getHours();
    const eDia = hora >= 6 && hora < 18;
    return { hora, eDia };
}