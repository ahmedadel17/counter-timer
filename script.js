var daysel= document.getElementById('days');
var hoursel= document.getElementById('hours');
var minutesel= document.getElementById('minutes');
var secondsel= document.getElementById('seconds');


var new_year="1 Jan 2022";
function countdown(){
    var newYeardate = new Date(new_year);
    var currentdate =new Date();
    var totalseconds=Math.floor((newYeardate-currentdate)/1000);
    var days=Math.floor(totalseconds/3600/24);
    // console.log(newYeardate-currentdate);
    // console.log(days);
    var hours=Math.floor(totalseconds/3600)%24;
    var minutes=Math.floor((totalseconds/60)%60);
    var seconds=(totalseconds)%60;
    daysel.innerHTML=days;
    hoursel.innerHTML=hours;
    minutesel.innerHTML=minutes;
    secondsel.innerHTML=seconds;
}
countdown();
setInterval(countdown, 1000);