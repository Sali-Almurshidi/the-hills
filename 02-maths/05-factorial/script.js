(function() {

    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", function() {

        // your code here
        let randomValue = document.getElementById("number").value;
        let factorial = 1 ;
        let num ;

        for(num = randomValue ; num >= 1; num--){
            factorial *= num ;
        }

        alert("The result of number : " + randomValue + " is " + factorial);


    });

})();