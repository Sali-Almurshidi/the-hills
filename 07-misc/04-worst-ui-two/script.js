/* becode/javascript
 *
 * /07-misc/04-worst-ui-two/script.js - 7.4: la pire interface (2) : phone clicker
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

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

    // data-min="460" data-max="499"
    document.getElementById("part-one").addEventListener("click" , function () {
        partOneCount++;
        resultPart1 = partOneCount ;
        if(resultPart1 > 499){
            resultPart1 = "460" ;
        }
        document.getElementById("target").innerHTML = "+" + resultPart1 + resultPart2 + resultPart3 + resultPart4 ;
    });

    //data-min="00" data-max="99"
    document.getElementById("part-two").addEventListener("click" , function () {
        partTwoCount++;
        resultPart2 = partTwoCount ;
        if (partTwoCount <= 9 ){
            resultPart2 = "0" + partTwoCount ;
        }else if(partFourCount > 99){
            resultPart2 = "00";
        }else {
            resultPart2 =  partTwoCount ;
        }
        document.getElementById("target").innerHTML = "+" + resultPart1 + resultPart2 + resultPart3 + resultPart4 ;
    });

    //data-min="00" data-max="99"
    document.getElementById("part-three").addEventListener("click" , function () {
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
    document.getElementById("part-four").addEventListener("click" , function () {
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
