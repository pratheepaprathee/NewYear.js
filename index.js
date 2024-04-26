

function displayTime() {
    let dateTime = new Date();
    let dt=dateTime.getDay();
    let hr = dateTime.getHours();
    let min = dateTime.getMinutes();
    let sec = dateTime.getSeconds();
     
    document.getElementById("days").innerHTML = dt <10 ? "0"+dt : dt;
    document.getElementById("hours").innerHTML = hr <10 ? "0"+hr : hr;
    document.getElementById("mins").innerHTML = min <10 ? "0"+min : min;
    document.getElementById("seconds").innerHTML = sec <10 ? "0"+sec : sec;

}
setInterval(displayTime, 1000)