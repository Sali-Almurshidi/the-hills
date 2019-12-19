(function() {

    // your code here
    document.getElementById('run').addEventListener('click',function () {

        let userDay = document.getElementById('dob-day').value;
        let userMonth = document.getElementById('dob-month').value;
        let userYear = document.getElementById('dob-year').value;

        let currentDate = new Date();
        let userAge = currentDate.getFullYear() - userYear ;
        let userAgeMonth  ;
        let userAgeDay;

        // this is for the days all the months has 30 day :P
        if (userAgeDay <= currentDate.getDate()){
            userAgeDay = currentDate.getDate() - userDay ;
        }else if (userAgeDay > currentDate.getDate()){
            userAgeDay = 30 - userDay ;
        }else{
            userAgeDay = 0 ;
        }

        // this is for year
        if ( currentDate.getMonth() < (userMonth - 1))
        {
            userAge--;
        }
        if (((userMonth - 1) == currentDate.getMonth()) && (currentDate.getDate() < userDay))
        {
            userAge--;
        }

        // this is for month
        if (currentDate.getMonth() >= userMonth)
            userAgeMonth = currentDate.getMonth() - userMonth;
        else {
            userAgeMonth = 12 + currentDate.getMonth() -userMonth;
        }


        alert("user birthdate is "+userYear+"/"+userMonth+"/"+userDay+ "and his/her age is  "+userAge + " years and "+ userAgeMonth + " month " + userAgeDay + " day " );
    });

})();
