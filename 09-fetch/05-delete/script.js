let elementsData ;

fetch("/api.json").then(response => {
    return response.json();
}).then(function (data) {
    elementsData = data.heroes;
}).catch(err => {
    console.log("Error");
})

document.getElementById("run").addEventListener("click", function () {
    let elementID = document.getElementById("hero-id").value;
    console.log(elementID +"this id");
    // function to delete the function
    deleteElement(elementID);

}); // delete events listener to get the input elements

function  deleteElement(elementID) {
    // before delete the element
    console.log(elementsData);
    let newElements = elementsData.filter(function (element) {
        // if id != the enter id so add this element yo the new array
        return element.id != parseInt(elementID);
    })
    // after delete the element
    console.log(newElements);
}