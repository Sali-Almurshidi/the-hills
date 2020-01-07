let elementData;
fetch("/api.json").then(response => {
    return response.json();
}).then(function (data) {
    elementData = data.heroes;
}).catch(err => {
    console.log("Error");
})

document.getElementById("run").addEventListener("click", function () {
    let name = document.getElementById("hero-name").value;
    let alterEgo = document.getElementById("hero-alter-ego").value;
    let powers = document.getElementById("hero-powers").value;
    console.log(name + alterEgo + powers + "in event listener");
    // function to add all the
    addNewElement(name, alterEgo, powers);

}); // add events listener to get the input elements

function addNewElement(heroName, heroAlert, heroPowers) {

    let laseID = elementData.length;
    console.log(laseID + " elements length");

    elementData.push({
        id: laseID+1,
        name: heroName,
        alterEgo: heroAlert,
        abilities: heroPowers
    });
    console.log(elementData);

}// push the new element to the array
