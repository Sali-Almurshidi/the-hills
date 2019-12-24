(function() {

    // your code here
    document.getElementById("pass-one").addEventListener("input",function() {

        let textlength = document.getElementById('pass-one').value.length;
        if (textlength <= 10 && textlength >= 2){
            document.getElementById("validity").innerHTML="ok";
        }else {
            document.getElementById("validity").innerHTML="not ok";
        }

    });

})();