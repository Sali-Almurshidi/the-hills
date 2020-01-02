/* becode/javascript
 *
 * /07-misc/02-typewriter-effect/script.js - 7.2: effet machine à écrire
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here

    let i = 0;
    // to get the txt from the p
    let txt = document.getElementById("target").innerText; /* The text */
    // make the p empty to add a new text inside it
    target.innerHTML= "";
    // to call the typeWriter function

    typeWriter();
    function typeWriter() {
        if (i < txt.length) {
            document.getElementById("target").innerHTML += txt.charAt(i);
            i++;
            // make time out between 1 and 1000
            setTimeout(typeWriter, Math.floor(Math.random() * 1000) + 1);
        }
    }
})();

