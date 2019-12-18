(function () {

    document.getElementById('run').addEventListener('click',function () {
        //let randowmColor = random_rgba();
        let randowmColor = random_bg_color();
        //document.body.style.backgroundColor = randowmColor;
        //alert(randowmColor);
    });
})();

function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}

function random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    alert(bgColor);

    document.body.style.background = bgColor;
}