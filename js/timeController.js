class TimeController {
    constructor() {
        this.offsetMs = 0;
    }

    now() {
        return new Date(Date.now() + this.offsetMs);
    }

    setTime(hora, minutos) {
        const realNow = new Date();
        const virtualNow = new Date(realNow);

        virtualNow.setHours(hora);
        virtualNow.setMinutes(minutos);
        virtualNow.setSeconds(0);

        this.offsetMs = virtualNow.getTime() - realNow.getTime();
    }

    adjustHours(delta) {
        this.offsetMs += delta * 60 * 60 * 1000;
    }

    adjustMinutes(delta) {
        this.offsetMs += delta * 60 * 1000;
    }
}

export const timeController = new TimeController();
