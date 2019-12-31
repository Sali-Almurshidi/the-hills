/* becode/javascript
 *
 * /07-misc/01-waving-text/script.js - 7.1: effet vague
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
// infinity loop
let timeOut = setInterval(myTimer, 500);

function myTimer() {
    // get the text content
    let text = document.getElementById('target').textContent;
    // get targetID
    let targetID = document.getElementById('target');
    // make array form the text
    let textWithSpace = text.split("");
    // i have no idea why, but i love it <3
    let textArray = textWithSpace.filter(Boolean);
    // colors array
    let colorOutput = ["red", "green" , "yellow" , "black" , "blue"];
    // just to add all span inside this array
    let arraySpan = [];
    target.innerHTML=" ";

    for(i=0 ; i < textArray.length ; i+=5){

        for (j=0 ; j < 5 ; j++){

            if (i+j < textArray.length){

                let moreBig = j * 2 ;
                let getElement = textArray[i+j];
                arraySpan[i+j] = document.createElement("SPAN");
                arraySpan[i+j].setAttribute('style','font-size:2' +moreBig+'px' + ';'+ 'color:'+colorOutput[j]);
                let newSpan = document.createTextNode(getElement);
                arraySpan[i+j].appendChild(newSpan);
                targetID.appendChild(arraySpan[i+j]);

            }// watch the textArray length

        }// at lest 5 font size

    } // for loop for every char


}