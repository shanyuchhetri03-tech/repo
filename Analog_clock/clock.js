class Clock {
    constructor() {
        this.Hhand = document.querySelector("#hour");
        this.Mhand = document.querySelector("#minute");
        this.Shand = document.querySelector("#second");
        this.timer = null;
    }

    start() {
        if (this.timer) return; // Prevent multiple intervals
        this.timer = setInterval(() => {
            let time = new Date();
            let hour = time.getHours() % 12;
            let minute = time.getMinutes();
            let second = time.getSeconds();

            this.Hhand.style.transform = `translateX(-50%) rotate(${hour * 30 + second * 0.0083}deg)`;
            this.Mhand.style.transform = `translateX(-50%) rotate(${minute * 6 + second * 0.1}deg)`;
            this.Shand.style.transform = `translateX(-50%) rotate(${second * 6}deg)`;

        }, 1000);
    }

    stop() {
        clearInterval(this.timer);
        this.timer = null;
    }
}

let fun = new Clock();

let startBtn = document.querySelector("#features #start");
startBtn.addEventListener("click", () => fun.start());

let stopBtn = document.querySelector("#features #stop");
stopBtn.addEventListener("click", () => fun.stop());


