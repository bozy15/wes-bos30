const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setDate() {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondDegrees = (seconds / 60) * 360 + 90;

  const minutes = now.getMinutes();
  const minuteDegrees = (minutes / 60) * 360 + 90;

  const hours = now.getHours();
  const hourDegrees = (hours / 12) * 360 + 90;

  secondHand.style.transform = `rotate(${secondDegrees}deg)`;
  minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
  console.log(seconds);
  console.log(minutes);
  console.log(hours)
}

setInterval(setDate, 1000);
