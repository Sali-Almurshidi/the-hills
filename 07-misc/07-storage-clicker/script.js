/* becode/javascript
 *
 * /07-misc/07-storage-clicker/script.js - 7.7: jeu : clicker persistant
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    let count = 0 ;
    // your code here
    document.getElementById("increment").addEventListener('click' , function () {
        // put result is the key name
        // and the count is the value with ++
        localStorage.setItem("result",count++);
        // result is the key call it to get the value
        document.getElementById("target").innerHTML = localStorage.getItem("result");
    });

})();
