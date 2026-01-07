
import { timeController } from './timeController.js';

  export default  class MenuSecreto {
        constructor(funcao) {
            this.clockEl = null;
            this.time = new Date();
            this.init();
            this.atualizaUI = funcao;
        }

        init() {
            document.addEventListener('contextmenu', (e) => {
                e.preventDefault();
                this.mostraRelogio(e.clientX, e.clientY);
            });

            document.addEventListener('click', () => this.escondeRelogio());
        }

        mostraRelogio(x, y) {
            this.escondeRelogio();

            this.clockEl = document.createElement('div');
            this.clockEl.className = 'rc-clock';
            this.clockEl.style.left = `${x}px`;
            this.clockEl.style.top = `${y}px`;

            this.render();
            document.body.appendChild(this.clockEl);
        }

        escondeRelogio() {
            if (this.clockEl) {
                this.clockEl.remove();
                this.clockEl = null;
            }
        }

        render() {
            const agora = timeController.now();
            const h = String(agora.getHours()).padStart(2, '0');
            const m = String(agora.getMinutes()).padStart(2, '0');

            this.clockEl.innerHTML = `
                <div class="rc-clock-time">${h}:${m}</div>
                <div class="rc-clock-controls">
                    <button data-h="1">H+</button>
                    <button data-h="-1">H−</button>
                    <button data-m="5">M+</button>
                    <button data-m="-5">M−</button>
                </div>
            `;

            this.clockEl.querySelectorAll('button').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    this.ajustaHora(btn.dataset);
                });
            });
        }

        ajustaHora({ h, m }) {
            if (h) timeController.adjustHours(Number(h));
            if (m) timeController.adjustMinutes(Number(m));
            this.render();
            this.atualizaUI()
        }
    }

    const style = document.createElement('style');
    style.textContent = `
        .rc-clock {
            position: fixed;
            transform: translate(-50%, -50%);
            background: radial-gradient(circle at top, #2b2f55, #0a0f1f);
            color: #aebcff;
            border-radius: 14px;
            padding: 16px 18px;
            font-family: system-ui, sans-serif;
            box-shadow: 0 20px 40px rgba(0,0,0,.6);
            z-index: 99999;
            user-select: none;
        }

        .rc-clock-time {
            font-size: 28px;
            text-align: center;
            margin-bottom: 12px;
            font-weight: 600;
            letter-spacing: 2px;
        }

        .rc-clock-controls {
            display: flex;
            gap: 6px;
            justify-content: center;
        }

        .rc-clock-controls button {
            background: #1a1f3a;
            color: #cfd6ff;
            border: none;
            border-radius: 6px;
            padding: 6px 10px;
            cursor: pointer;
            font-size: 13px;
        }

        .rc-clock-controls button:hover {
            background: #2e3570;
        }
    `;
    document.head.appendChild(style);

    

