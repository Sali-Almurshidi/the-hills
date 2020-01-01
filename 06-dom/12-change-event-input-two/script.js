(function() {

    // your code here
    document.getElementById("pass-one").addEventListener("input",function() {

        let textlength = document.getElementById('pass-one').value.length;
        let textValue = document.getElementById('pass-one').value;
        var regexNumbers = new RegExp(".*[0-9].*[0-9]");

        if( regexNumbers.test(textValue) && textlength >= 2){
            document.getElementById("validity").innerHTML="ok";
        }else {
            document.getElementById("validity").innerHTML="not ok";
        }

    });

})();