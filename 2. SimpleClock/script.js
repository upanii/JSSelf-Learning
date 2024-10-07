function get_Date() {
    const secondHand = document.querySelector('.second-hand');
    const minuteHand = document.querySelector('.min-hand');
    const hoursHand = document.querySelector('.hour-hand');
  const now = new Date();
//
  const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
//
  const minute = now.getMinutes();
    const minuteDegrees = ((minute / 60) * 360) + 90;
    minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
//
  const hours = now.getHours();
    const hoursDegrees = ((hours / 23) * 360) + 90;
    hoursHand.style.transform = `rotate(${hoursDegrees}deg)`;
//
}


setInterval(get_Date, 1000);
