/* becode/javascript
 *
 * /09-fetch/02-list-to-template/script.js - 11.2: liste vers template
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

// an object of the data in the json
let dataNames = [];
// the template id
let temp = document.getElementsByTagName("template")[0];

// your code here
fetch('/api.json').then(response => {
    return response.json();
})
    .then(function (data) {
        dataNames = data.heroes;
        getArray(dataNames);
    })
    .catch(err => {
        console.log("error");
    })
function getArray(dataNames){
    console.log(dataNames);
    console.log(dataNames[1].name);
}
//console.log(dataNames[1].name);
// add event listener to the button
document.getElementById("run").addEventListener("click", function () {
    // test the array we can get it
    console.log(dataNames[0].name);
    // for each to get al elements in array
    dataNames.forEach(function (element, index) {
        // here make clone to the content in template to let it appearance
        let clonData = temp.content.cloneNode(true);
        // querySelector to get element in the clonData by class name and but value inside it
        clonData.querySelector(".name").innerHTML = element.name;
        clonData.querySelector(".alter-ego").innerHTML = element.alterEgo;
        // add clonData in the target id to appearance there
        document.getElementById("target").appendChild(clonData);
    });

});






