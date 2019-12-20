(function() {

    // your code here
    document.getElementById('run').addEventListener('click',function () {

        let arrayNumbers = new Array();
        let table = document.getElementById("numbersTable");
        let rowCount = table.rows.length;
        let row = table.insertRow(rowCount);
        let sumResult = 0;

        for (i = 0 ; i < 10 ; i++){
            //random  10 numbers generator  from 1 to 100
            arrayNumbers[i] = Math.floor(Math.random() * 100) + 1;
            // to print the random in the table
            row.insertCell(0).innerHTML= arrayNumbers[i] + " ,";
            sumResult =sumResult + arrayNumbers[i];
        }

        // to get the sum
        document.getElementById('sum').innerHTML = sumResult;
        // to get the average
        document.getElementById('average').innerHTML = sumResult / arrayNumbers.length;
        // to found the max number
        document.getElementById('max').innerHTML = Math.max.apply(null, arrayNumbers);
        // to found the max number
        document.getElementById('min').innerHTML = Math.min.apply(null, arrayNumbers);

    });

})();