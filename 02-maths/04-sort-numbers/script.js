(function() {

    // to get the value of an input: document.getElementById("element-id").value
    let numbers = document.getElementById("numbers").value;

    document.getElementById("run").addEventListener("click", function() {

        // your code here
        let arrayNumber = numbers.split(', ');

        let arraySortNumber = arrayNumber.sort(function(a, b){return a - b});

        alert("The numbers before "+ numbers+" /The result of sort : " + arraySortNumber);

    });

})();