window.addEventListener('load',function() {
    updateClock()
    setInterval(updateClock,200);
});
function updateClock() {
    var now=new Date();
    var day = now.getDay();
    var hours=now.getHours();
    var minute=now.getMinutes();
    var second=now.getSeconds();
    var ampm= hours >= 12 ? 'PM':'AM';
    var dayNames = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

    hours=hours % 12;

    document.getElementById("day").innerHTML = dayNames[day];
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("min").innerHTML = minute;
    document.getElementById("sec").innerHTML = second;
    document.getElementById("ampm").innerHTML = ampm;


}