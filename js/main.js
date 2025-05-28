import { buscaInfHora } from './timeController.js';
import { updateTheme } from './uiController.js';
import { AtualizaCorpoCeleste } from './celestialController.js';
import { initializeHamburgerMenu } from './menuController.js';

function iniciaCicloCeleste() {
    const { hora, minutos, eDia } = buscaInfHora();
    console.log(`Hora atual: ${hora}:${minutos}, É dia? ${eDia}`);
    updateTheme(eDia);
    AtualizaCorpoCeleste(eDia, hora, minutos);
}

document.addEventListener('DOMContentLoaded', () => {
    iniciaCicloCeleste();
    initializeHamburgerMenu();
    setInterval(() => {
        iniciaCicloCeleste();
    }, 60 * 1000);
});