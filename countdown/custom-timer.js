/* timer  */
const countdown = () => {
    const countDate = new Date('May 12, 2024 00:00:00').getTime(); //May 09, 2024 
    const now = new Date().getTime();
    const gap = countDate - now;
 
    // How the time Works ??
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Calculate the Shit 
    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second);

    document.querySelector('.day-s').innerHTML = textDay;
    document.querySelector('.hour-s').innerHTML = textHour;
    document.querySelector('.minute-s').innerHTML = textMinute;
    document.querySelector('.second-s').innerHTML = textSecond;
};
setInterval(countdown, 1000);




















