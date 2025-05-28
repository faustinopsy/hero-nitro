const celestialBodyElement = document.querySelector('.celestial-body');
const heroSkyElement = document.querySelector('.hero-sky');

export function AtualizaCorpoCeleste(eDia, horaAtual) {
    if (!celestialBodyElement || !heroSkyElement) {
        console.error("Elemento celestial ou céu não encontrado.");
        return;
    }

    const root = document.documentElement;

    if (eDia) {
        root.style.setProperty('--current-celestial-color', 'var(--sun-color)');
        celestialBodyElement.classList.add('sun');
        celestialBodyElement.classList.remove('moon');
    } else {
        root.style.setProperty('--current-celestial-color', 'var(--moon-color)');
        celestialBodyElement.classList.add('moon');
        celestialBodyElement.classList.remove('sun');
    }

    let normalizaHora;
    if (eDia) {
        normalizaHora = horaAtual - 6;
    } else { 
        normalizaHora = (horaAtual >= 18) ? (horaAtual - 18) : (horaAtual + 6); 
    }

    const progress = (normalizaHora / 12) * 100;
    let xPercent = eDia ? progress : 100 - progress;

    const yAmplitude = 40;
    const yOffset = 10;
    let yPercent = yOffset + (yAmplitude - (Math.sin(progress / 100 * Math.PI) * yAmplitude));


    xPercent = Math.max(5, Math.min(95, xPercent));
    yPercent = Math.max(5, Math.min(60, yPercent));

    celestialBodyElement.style.left = `${xPercent}%`;
    celestialBodyElement.style.top = `${yPercent}%`;
}