/**
 * Напишемо клас Timer, який буде
 * запускати та зупиняти відлік часу
 */

// const startBtn = document.querySelector("button[data-action-start]");
// const stopBtn = document.querySelector("button[data-action-stop]");
// const clockFace = document.querySelector(".clock-face");

// class Timer {
//     constructor({ onTick }) {
//         this.onTick = onTick;
//         this.isActive = false;
//         this.intervalId = null;

//         this.init();
//     }

//     init() {
//         const time = this.getTime(0);
//         this.onTick(time);
//     }

//     start() {
//         if(this.isActive) {
//             return;
//         }

//         this.isActive = true;
//         const startTime = Date.now();

//         this.intervalId = setInterval(() => {
//             const currentTime = Date.now();
//             const delayTime = currentTime - startTime;
//             const time = this.getTime(delayTime);
            
//             this.onTick(time);
//         }, 1000)
//     }

//     stop() {
//         clearInterval(this.intervalId);
//         this.isActive = false;
//         const time = this.getTime(0);
//         this.onTick(time);
//     }

//     getTime(time) {
//         const seconds = this.pad(Math.floor((time % (1000 * 60)) / 1000));
//         const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
//         const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));

//         return { hours, mins, seconds }
//     }

//     pad(value) {
//        return String(value).padStart(2, "0");
//     }
// }


// const timer = new Timer({
//     onTick: updateClockface
// });

// startBtn.addEventListener("click", timer.start.bind(timer));
// stopBtn.addEventListener("click", timer.stop.bind(timer));

// function updateClockface({ hours, mins, seconds }) {
//     clockFace .innerHTML = `${hours}:${mins}:${seconds}`;
// }

