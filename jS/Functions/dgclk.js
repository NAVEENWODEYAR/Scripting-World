
function displayTime() {
    var dateTime = new Date();

    var hrs = dateTime.getHours();
    var minutes = dateTime.getMinutes();
    var seconds = dateTime.getSeconds();
    var session = document.getElementById('sessions');


    document.getElementById('hours').innerHTML= hrs;
    document.getElementById('minutes').innerHTML= minutes;
    document.getElementById('seconds').innerHTML= seconds;
}
displayTime();
setInterval(displayTime,5)