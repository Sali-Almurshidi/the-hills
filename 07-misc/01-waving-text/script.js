/* becode/javascript
 *
 * /07-misc/01-waving-text/script.js - 7.1: effet vague
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
let timeOut ;



function InfinityLoop() {
    //arraySpan.length = 0 ;



}

(function() {
    //timeOut = setInterval(InfinityLoop, 3000);
    let text = document.getElementById('target').textContent;
    let targetID = document.getElementById('target');

    let textWithSpace = text.split("");
    let textArray = textWithSpace.filter(Boolean);;
    alert(textArray);
    let arraySpan = [];
    target.innerHTML=" ";

    for(i=0 ; i < textArray.length ; i+=5){

        for (j=0 ; j < 5 ; j++){

            if (i+j < textArray.length){
                let moreBig = j * 2 ;
                let getElement = textArray[i+j];
                arraySpan[i+j] = document.createElement("SPAN");
                arraySpan[i+j].setAttribute('style','font-size:2' +moreBig+'px');
                let newSpan = document.createTextNode(getElement);
                arraySpan[i+j].appendChild(newSpan);
                targetID.appendChild(arraySpan[i+j]);

            }

        }// at lest 5 font size

    } // for loop for every char


})();