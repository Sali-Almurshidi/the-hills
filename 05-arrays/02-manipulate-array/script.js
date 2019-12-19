(function () {

    var fruits = [
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "durian",
        "pêche",
        "raisin",
        "cerise",
    ];
    document.getElementById('run').addEventListener('click' , function () {
        alert("in button");
        let i = 0;
        // to print all the elements
        for(i ; i < fruits.length ; i++){
            alert("in for");
            // add an element "banana" at the start of the array
            if(i == 0){
                fruits[i] = "banana";
                alert("in for banana");
            }
            // add an element "kiwi" at the end
            if(i == fruits.length - 1){
                fruits[i] = "kiwi";
            }
            console.log(fruits[i]);
        }
    });

})();