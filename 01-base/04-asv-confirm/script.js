(function () {
    var ask= false;
    do{
        var user_name = prompt("Please enter your age");
        var user_age = prompt("Please enter your Gender ");
        var user_town = prompt("Please enter your Town");

        if(confirm("confirm your information")){
            alert("Thank you , your age "+ user_name + "your Gender " + user_age + "your Town " + user_town)
            ask=true;
        }
    }while (ask == false)

})();