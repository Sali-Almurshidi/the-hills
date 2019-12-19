(function() {

    var fruits = [
        "apple",
        "pear",
        "raspberry",
        "tomatos",
        "kiwi",
        "banana",
        "orange",
        "mandarin",
        "durian",
        "peache",
        "grap",
        "cherry",
    ];
    // for loop
    document.getElementById('run').addEventListener('click',function () {
        for(i=0 ; i < fruits.length ; i++){
            console.log(fruits[i]);
        }
    });

})();