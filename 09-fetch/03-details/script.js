/* becode/javascript
 *
 * /09-fetch/03-details/script.js - 11.3: details
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
let jsonData;
let enterIdData;
let temp = document.getElementById('tpl-hero');
// get all the element in the json
fetch('api.json').then(response => {
    return response.json();
})
    .then(function (data) {
        jsonData = data.heroes;
    }).catch(err => {
    console.log("error");
})
// event listener for the input value
document.getElementById('run').addEventListener("click", function () {
    // get value from the user
    let enterID = document.getElementById('hero-id').value;
    // get the result from the getValue function
    enterIdData = getValue(enterID);
    if(enterIdData != null){
        printIdData(enterIdData);
    }else{
        alert("not found");
    }

 //   console.log(enterIdData);
});
// function to get the value from the json array
function getValue(enterID) {
    let result = null;
    jsonData.forEach(function (element, index) {
        console.log( element.id + " id");
        console.log( enterID + " enter");
        // the enterID is string and the element.id is num
        let num = parseInt(enterID);
        if (num == element.id) {
            result = index;
        }
    })
    console.log(result + "result");
    return result;
}
// print the result
function printIdData(elementID) {
    let ID = parseInt(elementID);
    let cloneTemplate = temp.content.cloneNode(true);
    cloneTemplate.querySelector(".name").innerHTML = jsonData[ID].name;
    cloneTemplate.querySelector(".alter-ego").innerHTML = jsonData[ID].alterEgo;
    cloneTemplate.querySelector(".powers").innerHTML = jsonData[ID].abilities;
    document.getElementById("target").appendChild(cloneTemplate);

}