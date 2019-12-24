(function() {

    // your code here
    document.getElementById('run').addEventListener('click',function () {

        let firstInput = document.getElementById('pass-one').value;
        let secondInput = document.getElementById('pass-two').value;

        if (firstInput === secondInput){
            alert("The same");
        }else {
            document.getElementById("pass-one").classList.add("error");
            document.getElementById("pass-two").classList.add("error");
            alert("add class error");
        }
    });

})();