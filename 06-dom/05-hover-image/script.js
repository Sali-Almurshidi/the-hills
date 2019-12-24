(function(){

    document.getElementById("image").addEventListener("mouseover", mouseOver);
    document.getElementById("image").addEventListener("mouseout", mouseOut);

    var imageTag = document.getElementById("image");
    var newImg = imageTag.getAttribute("data-hover");
    var oldImg = imageTag.getAttribute("src");

    function mouseOver() {
        imageTag.setAttribute("src", newImg);
    }

    function mouseOut(){
        imageTag.setAttribute("src", oldImg);
    }

})();



