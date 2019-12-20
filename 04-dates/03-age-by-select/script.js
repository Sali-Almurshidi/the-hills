(function() {

    // your code here
    document.getElementById('run').addEventListener('click',function () {

        let userDay = document.getElementById('dob-day').value;
        let userMonth = document.getElementById('dob-month').value;
        let userYear = document.getElementById('dob-year').value;

        let currentDate = new Date();
        let userAge = currentDate.getFullYear() - userYear ;
        let userAgeMonth ;
        let userAgeDay;


        // this is for year
        if ( currentDate.getMonth() < (userMonth - 1))
        {
            userAge--;
        }
        if (((userMonth - 1) == currentDate.getMonth()) && (currentDate.getDate() < userDay))
        {
            userAge--;
        }
        alert("user birthdate is "+userYear+ " year" );
    });

})();
