(function() {

    // your code here

    let newImg = document.getElementById('source').getAttribute('data-image');
    let createImg = document.createElement("img");
    createImg.setAttribute('src', 'newImg');
    document.getElementById("target").appendChild(createImg);
    document.getElementById("source").remove();


})();