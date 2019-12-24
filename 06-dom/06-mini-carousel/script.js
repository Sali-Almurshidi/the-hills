(function() {


     var i= 0 ;
    document.getElementById('next').addEventListener('click' , function () {

        var gallery= [
            "img/bell.svg",
            "img/clock.svg",
            "img/compass.svg",
            "img/lemon.svg",
            "img/map.svg",
        ];

        var thisImage = document.getElementsByTagName("img");

        if(i == gallery.length){
            i= 0;
        }
        thisImage[0].setAttribute("src", gallery[i]);
        i++;

    });

})();