
(function() {

    // your code here
    document.getElementById("pass-one").addEventListener("input",function() {

    let textlength = document.getElementById('pass-one').value.length;
    document.getElementById("counter").innerHTML = textlength;
    if (textlength == 10){
        document.getElementById("pass-one").disabled=true;
    }

    });
})();



