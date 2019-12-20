(function() {

    var fruits = [
        "cerise",
        "durian",
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "fraise",
        "durian",
        "pêche",
        "cerise",
        "raisin",
        "cerise",
    ];

    // your code here

    let newFruits = [];
    fruits.forEach(function (element) {
        if (newFruits[element])
            console.log(element);
        else
            newFruits[element] = true;
    })

})();