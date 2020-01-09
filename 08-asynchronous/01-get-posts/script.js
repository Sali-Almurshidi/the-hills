
document.getElementById("run").addEventListener("click", function () {
    window.lib.getPosts(function(error, randomNumber) {
        console.log(randomNumber);
    });

});


