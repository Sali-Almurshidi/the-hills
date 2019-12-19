function getMonth() {

    // your code here
    let year = document.getElementById('year').value;
    let day;
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let this_month = 0;

    for(m=0 ; m < 12 ; m++){
        day = new Date(year , m , 13);
        let dayName = days[day.getDay()];
        if (dayName == "Friday"){
            //alert(this_month + "number");
            this_month = getMonthName(m);
            alert(this_month);
        }
    }
}

function getMonthName(num) {
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
    //alert(num + "send number in function");

    let n = month[num];
    //alert(n + "name in function");
    return n;
}

