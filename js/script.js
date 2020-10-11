const newYear = "1 Jan 2021";

function countDown() {
    let date = new Date();
    let newDate = new Date(newYear);
    let day = document.querySelector('.day .time');
    let hour = document.querySelector('.hour .time');
    let minute = document.querySelector('.minut .time');
    let second = document.querySelector('.second .time');

    let diff = (newDate - date) / 1000;

    let days = Math.floor(diff / 3600 / 24);
    let hours = Math.floor(diff / 3600) % 24;
    let minutes = Math.floor(diff / 60) % 60;
    let seconds = Math.floor(diff) % 60;

    console.log('date',date);

    day.innerHTML = days;
    hour.innerHTML = hours;
    minute.innerHTML = minutes;
    second.innerHTML = seconds;
}


countDown();

setInterval(countDown, 1000);
