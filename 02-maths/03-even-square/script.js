(function test() {

    document.getElementById("run").addEventListener("click", function() {

        // your code here
        let square = new Array();
        let num = 0 ;
        let square_number =0 ;
        for(num = 1 ; num <= 21 ; num++){
            square_number =num * num ;
            alert (square_number);
           // square.add(square_number);
        }
    });

})();