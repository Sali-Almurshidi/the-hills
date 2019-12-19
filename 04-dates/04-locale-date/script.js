(function() {

    let date = new Date();
    let todayDay =  getDay();
    let thisMonth =  getMonth();

    let thisDate = date.getDate() ;
    let thisYear = date.getFullYear();
    let thisHour = date.getHours();
    let thisMinutes = date.getMinutes();
    document.getElementById("target").innerHTML = todayDay + " " + thisDate + " " + thisMonth  + " " + thisYear + " " +  thisHour + " H " +  thisMinutes;
})();

function getDay() {
    let day = new Date();
    let weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    let n = weekday[day.getDay()];
    return n;
}

function getMonth() {
    var month = new Array();
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";

    var d = new Date();
    var n = month[d.getMonth()];
    return n;
}