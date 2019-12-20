(function() {

    var fruits = [
        "apple",
        "perry",
        "strawberry",
        "tomato",
        "kiwi",
        "banana",
        "orange",
        "mandarin",
        "durian",
        "peach",
        "grapes",
        "cherry",
    ];

    // your code here

    document.getElementById('run').addEventListener('click', function () {

        fruits.forEach(function (element) {
            if(element == "apple"){
                console.log("there is an apple here man");
            }else {
                console.log("this is not an apple  man");
            }
        })
    });
})();