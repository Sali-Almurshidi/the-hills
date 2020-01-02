/*

// this is static out put put work and it is not mine
(function ()
{
    // to get the id for the text
    let container = document.getElementById("target");
    // to get the index for the text
    let wave = document.getElementById("target").innerText;
    // test
    console.log(container);
    console.log(wave);
     // make an array for every word inside the text
    let split = wave.split(' ');
    console.log(split.length);

    // make the target empty to add the child
    container.innerText="";
    console.log(container);

    let fontsize = 10;
    let counterup = 0;
    let counterdown =0;

    split.forEach( function (word) {
        var wrap = document.createElement("span");
        wrap.innerText= word;
        wrap.style.fontSize = fontsize + "px";
        if (counterup < split.length /2){
            fontsize += 5;
            counterup++;
            counterdown = counterup;
        } else {
            fontsize -= 5;
            counterdown--
        }
        container.appendChild(wrap);
    });
}());

*/
/*
// this is good but static too man and it is not mine
(function() {
    var tar = document.getElementById("target")
    var pos=0;
    var wave='Woo-hoo! I'm making waves! Wéééé! Oh ... I think I'm having seasickness ...';
    target.innerHTML='';
    for(var i=0;i<wave.length;i++){

        var char = wave.charAt(i);

        pos++
        if (pos===1){
            char="<span class='1'>"+char+"<span/>"
        }
        if (pos===2||pos===8){
            char="<span class='2'>"+char+"</span>"

        }
        if (pos===3||pos===7){
            char="<span class='3'>"+char+"</span>"
        }
        if (pos===4||pos===6){
            char="<span class='4'>"+char+"</span>"
        }
        if (pos===5){
            char="<span class='5'>"+char+"</span>"
        }
        if(pos===8){
            pos=0;
        }

        target.innerHTML+=char;
    }
    var first = document.getElementsByClassName('1');

    for (var n = 0; n< first.length; n++) {
        first[n].style.fontSize = "0.5em";
    }
    var second = document.getElementsByClassName('2');

    for (var n = 0; n< first.length; n++) {

        second[n].style.fontSize = "1em";
    }
    var third = document.getElementsByClassName('3');

    for (var n = 0; n< third.length; n++) {

        third[n].style.fontSize = "1.5em";
    }
    var fourth = document.getElementsByClassName('4');

    for (var n = 0; n< first.length; n++) {

        fourth[n].style.fontSize = "2em";
    }
    var fifth = document.getElementsByClassName('5');

    for (var n = 0; n< first.length; n++) {

        fifth[n].style.fontSize = "2.5em";
    }


    // your code here

})();

 */

let beginTime= 0;
let loopTime= 2;
let interval = null;

(function begin()
{
    this.beginTime = (new Date).getTime();

    let self = this;
    this.interval = setInterval(function() { self.update(); }, 100);
}());

function update()
{
    // The number of milliseconds the animation has been running
    let timeDiff = (new Date).getTime() - this.beginTime;
    // The proportion of the way through the animation (%1 to account for looping)
    let p = (timeDiff / (this.loopTime * 1000)) % 1;


    // function myTimer() {

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



    // } // close myTimer function

}




