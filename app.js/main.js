let countDownDate = new Date("june 12, 2024 00:00:00").getTime()
let x = setInterval(function(){
    let now = new Date().getTime()
    let distance = countDownDate - now


    let days = Math.floor(distance / (1000 * 60 * 60 * 24))
    let hours = Math.floor((distance % (1000 * 60 * 60 *24)) / (1000 * 60 * 60))
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    let second = Math.floor((distance % (1000 * 60)) / 1000)




    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = second;



},1000)