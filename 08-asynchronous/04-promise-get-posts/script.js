
document.getElementById("run").addEventListener("click" , function () {
    window.lib.getPosts() // getPosts with out parameter
        .then(json => console.log(json)); // there is promises so we need then
});

