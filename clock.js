const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".minute-hand");
const hourHand = document.querySelector(".hour-hand");
function setDate(){
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();
    const secondsDrgrees = (seconds / 60) * 360 + 90;
    const minutesDrgrees = (minutes / 60) * 360 + (seconds / 60) * 6 +90;
    const hoursDrgrees = (hours / 60) * 360 + (minutes / 60) * 30 + 90;
    secondHand.style.transform = `rotate(${secondsDrgrees}deg)`;
    minuteHand.style.transform = `rotate(${minutesDrgrees}deg)`;
    hourHand.style.transform = `rotate(${hoursDrgrees}deg)`;
}
setInterval(setDate, 1000);
setDate();
