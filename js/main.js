import { buscaInfHora } from './timeController.js';
import { updateTheme } from './uiController.js';
import { AtualizaCorpoCeleste } from './celestialController.js';
import { initializeHamburgerMenu } from './menuController.js';

function iniciaCicloCeleste() {
    const { hora, eDia } = buscaInfHora();
    console.log(`Hora atual: ${hora}, É dia? ${eDia}`);
    updateTheme(eDia);
    AtualizaCorpoCeleste(eDia, hora);
}

document.addEventListener('DOMContentLoaded', () => {
    iniciaCicloCeleste();
    initializeHamburgerMenu();
    setInterval(iniciaCicloCeleste, 60 * 60 * 1000);
});