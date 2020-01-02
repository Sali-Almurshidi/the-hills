/* becode/javascript
 *
 * /07-misc/03-worst-ui-one/script.js - 7.3: la pire interface (1) : phone slider
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    //var slider = document.getElementById("myRange");
    //var output = document.getElementById("slider").value;
    //var maxValue = document.getElementById("slider").max;
    //var minValue = document.getElementById("slider").min;
    //output.innerHTML = slider.value;

    document.getElementById("slider").addEventListener("click" , function () {

        var valueSlider = document.getElementById("slider").value;
        document.getElementById("target").innerHTML = valueSlider;

    });

})();
