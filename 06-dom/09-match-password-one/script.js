(function() {

    // your code here
    document.getElementById('run').addEventListener('click',function () {

        let firstInput = document.getElementById('pass-one').value;
        let secondInput = document.getElementById('pass-two').value;

        if (firstInput === secondInput){
            alert("The same");
        }else {
            document.getElementById("pass-one").style.borderColor = "red";
            document.getElementById("pass-two").style.borderColor = "red";
            alert("Try again");
        }
    });

})();