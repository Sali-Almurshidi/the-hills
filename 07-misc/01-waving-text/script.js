/* becode/javascript
 *
 * /07-misc/01-waving-text/script.js - 7.1: effet vague
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here

    let text = document.getElementById('target').textContent;
    let targetID = document.getElementById('target');
    target.innerHTML=" ";
    let textArray = text.split(" ");
    let resultOdd = [];
    let resultEven = [];
    var arraySpan = [];
    //target.innerHTML=textArray + textArray.length;
    // for loop for textArray
    for(i=2 ; i < textArray.length ; i++){
       // alert(textArray[i]);
        // if for even
       // if((i%2) == 0){
            let test = textArray[i] ;
        let test1 = textArray[i+1] ;
            arraySpan[i] = document.createElement("SPAN");
           arraySpan[i].setAttribute('style','font-size:20px');
            var t = document.createTextNode(test);
            arraySpan[i].appendChild(t);
            targetID.appendChild(arraySpan[i]);


        arraySpan[i+1] = document.createElement("SPAN");
        arraySpan[i+1].setAttribute('style','font-size:30px');
        var t1 = document.createTextNode(test1);
        arraySpan[i+1].appendChild(t1);
        targetID.appendChild(arraySpan[i+1]);
            //document.body.appendChild(x);
            //textArray[i].style.fontFamily= "Impact,Charcoal,sans-serif" ;
            //test.fontsize(7);
            //test.italics();
            //textArray[i].fontcolor(green);
            //target.innerHTML+=test + " " ;
            //test.style.color = '#888';
            //resultEven.push(test);
           // alert(test);
       // }
        // if for even
        //if((i%2) != 0){
            //let test = textArray[i] ;
            //arraySpan[i] = document.createElement("SPAN");
           // arraySpan[i].setAttribute('style','fontSize:20px')
            //var t = document.createTextNode(test);
           // arraySpan[i].appendChild(t);
            //targetID.appendChild(arraySpan[i]);
            //textArray[i].style.fontFamily= "Impact,Charcoal,sans-serif" ;
            //textArray[i].style.fontSize= "x-small" ;
            //test.fontsize(2);
           // test.style.color = '#ff2a28';
            //target.innerHTML+=test ;
            //resultOdd.push(test);

       // }
    }
    //let resultLength = resultOdd.length;
    //if (resultEven.length >= resultOdd.length ){
      //  resultLength = resultEven.length;
    //}
    //for(i=0 ; i < resultLength ; i++){
       // target.innerHTML+= resultEven[i] + " " + resultOdd[i];
  //  }
     function setFont(font) {
        var size = this.offsetWidth,
            font_size = size * font;
        this.style.fontSize = font_size + '%';
        return this
    };


})();

