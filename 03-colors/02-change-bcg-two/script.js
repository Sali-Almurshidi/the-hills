(function(){

    document.getElementById('run').addEventListener('click',function () {
        let colorInput = document.getElementById('color').value;
        alert(colorInput + " in side listener");
        document.body.style.backgroundColor = colorInput;
        alert("done");
    });

})();