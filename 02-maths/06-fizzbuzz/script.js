(function() {

    // your code here
    let multiple3;
    let multiple5;
    let num =1 ;
    for(num  ; num <= 100 ; num++){

        multiple3 =num % 3;
        multiple5 =num % 5;

        if((multiple3 == 0 ) && (multiple5 == 0)){
            console.log(num + "fizzbuzz");

        }else if(multiple5 == 0){
            console.log(num + "buzz");

        }else if(multiple3 == 0 ){
            console.log(num + "fizz");

        }else{
            console.log(num + "simply");
        }

    }

})();