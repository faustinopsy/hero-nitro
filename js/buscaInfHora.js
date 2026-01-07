import { timeController } from './timeController.js';

export function buscaInfHora() {
    const agora = timeController.now();

    const hora = agora.getHours();
    const minutos = agora.getMinutes();
    const eDia = hora >= 6 && hora < 18;

    return { hora, minutos, eDia };
}
