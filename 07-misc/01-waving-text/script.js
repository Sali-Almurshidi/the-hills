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

    let textArray = text.split("");
   // let textArray = textWithSpace.filter(Boolean);;
    //alert(textArray);
    let arraySpan = [];

    target.innerHTML=" ";



    for(i=1 ; i < textArray.length ; i++){

        let charArray = textArray[i].split("");

        for(j=0 ; j< charArray.length ; j++){

            let test = charArray[j];
            let test1 = charArray[j+1] ;
            arraySpan[j] = document.createElement("SPAN");
            arraySpan[j].setAttribute('style','font-size:20px');
            let t = document.createTextNode(test);
            arraySpan[j].appendChild(t);
            targetID.appendChild(arraySpan[j]);

            if (j+1 != charArray.length) {
                arraySpan[j+1] = document.createElement("SPAN");
                arraySpan[j+1].setAttribute('style','font-size:30px');
                let t1 = document.createTextNode(test1);
                arraySpan[j+1].appendChild(t1);
                targetID.appendChild(arraySpan[j+1]);
            }// to stay in string length

        } // for loop for every char in the string


    } // for loop for every string


})();