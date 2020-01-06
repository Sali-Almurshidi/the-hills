/* becode/javascript
 *
 * /09-fetch/01-list-to-console/script.js - 11.1: liste vers console
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.getElementById("run").addEventListener("click", function () {
        // use fetch and this is the URL
        fetch('http://localhost:8083/api.json')
            .then(response => {
                return response.json()
            })
            .then(function (data) {
                // Work with JSON data here
                // heroes name the array in api.json
                let names = data.heroes;
                // for each loop to print the names
                names.forEach(function (element){
                    console.log(element.name);
                })
            })
            .catch(err => {
                // Do something for an error here
                console.log("error")
            })
    });


})();





