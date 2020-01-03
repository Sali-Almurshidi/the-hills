

(function() {

    let result = document.getElementById("target").innerText;
    // your code here
    // to start count
    let partOneCount = 460;
    let partTwoCount = 0;
    let partThreeCount = 0;
    let partFourCount = 0;

    // default value
    let resultPart1 = "460" ;
    let resultPart2 = "00" ;
    let resultPart3 = "00";
    let resultPart4 = "00";

    // call functions
    document.getElementById("part-two").innerHTML= "";
    animateValue("part-two");




   // document.getElementById("part-one").innerText =

    // data-min="460" data-max="499"
    document.getElementById("fix-part-one").addEventListener("click" , function () {
        partOneCount++;
        resultPart1 = partOneCount ;
        if(resultPart1 > 499){
            resultPart1 = "460" ;
        }
        document.getElementById("target").innerHTML = "+" + resultPart1 + resultPart2 + resultPart3 + resultPart4 ;
    });

    //data-min="00" data-max="99"
    document.getElementById("fix-part-two").addEventListener("click" , function () {

        document.getElementById("target").innerHTML = "+" + resultPart1 + resultPart2 + resultPart3 + resultPart4 ;
    });

    //data-min="00" data-max="99"
    document.getElementById("fix-part-three").addEventListener("click" , function () {
        partThreeCount++;
        resultPart3 = partThreeCount ;
        if (partThreeCount <= 9 ){
            resultPart3 = "0" + partThreeCount ;
        }else if(partFourCount > 99){
            resultPart3 = "00";
        }else {
            resultPart3 =  partThreeCount ;
        }
        document.getElementById("target").innerHTML = "+" + resultPart1 + resultPart2 + resultPart3 + resultPart4 ;
    });

    //data-min="00" data-max="99"
    document.getElementById("fix-part-four").addEventListener("click" , function () {
        partFourCount++;
        resultPart4 = partFourCount ;
        if (partFourCount <= 9 ){
            resultPart4 = "0" + partFourCount ;
        }else if(partFourCount > 99){
            resultPart4 = "00";
        }
        else {
            resultPart4 = partFourCount ;
        }
        document.getElementById("target").innerHTML = "+" + resultPart1 + resultPart2 + resultPart3 + resultPart4 ;
    });

})();

function animateValue() {
    let range = 99;
    let current = 0;
    let increment = 100 > 0? 1 : -1;
    let stepTime = Math.abs(Math.floor(5000 / range));
    //var obj = document.getElementById(id);
    let timer = setInterval(function() {
        current += increment;
        document.getElementById("part-two").innerHTML= current;
        if (current == 99) {
            clearInterval(timer);
        }
    }, stepTime);
}


