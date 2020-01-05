

(function() {

   // let result = document.getElementById("target").innerText;

    // default value
    let resultPart1 = "460" ;
    let resultPart2 = "00" ;
    let resultPart3 = "00";
    let resultPart4 = "00";

    // value for count
    let countOne ;
    let countTwo ;
    let countThree ;
    let countFour ;

    // set interval to every 100 MS to call the functions to add new random in the value
    let setIntervalOne = setInterval(countPartOne, 100);
    let setIntervalTwo = setInterval(countPartTwo, 100);
    let setIntervalThree = setInterval(countPartThree, 100);
    let setIntervalFour = setInterval(countPartFour, 100);

    // Functions to get random value and put it in the set attribute Value
    function countPartOne() {
        //Math.floor(Math.random() * (max - min)) + min // but max 499+1 because we need 499
        countOne = Math.floor(Math.random() * (500 - 460)) + 460;
        console.log(countOne);
        document.getElementById("part-one").setAttribute("value", countOne);
    }

    function countPartTwo() {
        countTwo = Math.floor(Math.random() * 100);
        document.getElementById("part-two").setAttribute("value" , countTwo) ;
    }

    function countPartThree() {
        countThree = Math.floor(Math.random() * 100);
        document.getElementById("part-three").setAttribute("value" , countThree) ;
    }

    function countPartFour() {
        countFour = Math.floor(Math.random() * 100);
        document.getElementById("part-four").setAttribute("value" , countFour) ;
    }

    // data-min="460" data-max="499"
    document.getElementById("fix-part-one").addEventListener("click" , function () {
        clearInterval(setIntervalOne);
        countOne = document.getElementById("part-one").getAttribute("value") ;
        resultPart1 = countOne ;
        document.getElementById("target").innerHTML = "+" + resultPart1 + resultPart2 + resultPart3 + resultPart4 ;
    });

    //data-min="00" data-max="99"
    document.getElementById("fix-part-two").addEventListener("click" , function () {
        clearInterval(setIntervalTwo);
        countTwo = document.getElementById("part-two").getAttribute("value") ;
        resultPart2 = countTwo ;
        if(countTwo < 10){
            resultPart2 = "0"+countTwo;
        }
        document.getElementById("target").innerHTML = "+" + resultPart1 + resultPart2 + resultPart3 + resultPart4 ;
    });

    //data-min="00" data-max="99" part 3
    document.getElementById("fix-part-three").addEventListener("click" , function () {
        clearInterval(setIntervalThree);
        countThree = document.getElementById("part-three").getAttribute("value") ;
        resultPart3 = countThree ;
        if(resultPart3 < 10){
            resultPart3 = "0"+countThree;
        }
        document.getElementById("target").innerHTML = "+" + resultPart1 + resultPart2 + resultPart3 + resultPart4 ;
    });

    //data-min="00" data-max="99" part 4
    document.getElementById("fix-part-four").addEventListener("click" , function () {
        // to stop the Interval after click the button
        clearInterval(setIntervalFour);
        // to get the last value before click on button
        countFour = document.getElementById("part-four").getAttribute("value") ;
        // to get 0 before the number if this number under is under 10
        resultPart4 = countFour ;
        if(resultPart4 < 10){
            resultPart4 = "0"+countFour;
        }
        document.getElementById("target").innerHTML = "+" + resultPart1 + resultPart2 + resultPart3 + resultPart4 ;
    });

})();




