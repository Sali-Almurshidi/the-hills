/* becode/javascript
 *
 * /07-misc/06-guess-number/script.js - 7.6: jeu : trouver un nombre
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    let randomNumber = Math.floor(Math.random()* 100 +1);
    console.log(randomNumber);
    // your code here
    document.getElementById("idButton").addEventListener("click",function () {
        let gussNumber = document.getElementById("idGuessNumber").value;
        console.log(gussNumber);
        if(gussNumber == randomNumber){
            document.getElementById("idResult").innerHTML = "you get it";
        }else if(gussNumber < randomNumber){
            document.getElementById("idResult").innerHTML = "hiiiiiiigher";
        }else if(gussNumber > randomNumber){
            document.getElementById("idResult").innerHTML = "loooooower";
        }
    });

})();
