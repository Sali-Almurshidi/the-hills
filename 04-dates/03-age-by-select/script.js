(function() {

    // your code here
    document.getElementById('run').addEventListener('click',function () {
        let userDay = document.getElementById('dob-day').value;
        let userMonth = document.getElementById('dob-month').value;
        let userYear = document.getElementById('dob-year').value;
        let userAge = 2019 - userYear ;
        let userAgeMonth = 12 - userMonth ;

        alert("user birthdate is "+userYear+"/"+userMonth+"/"+userDay+ "and his/her age is  "+userAge + " years and "+ userAgeMonth + " month");
    });

})();