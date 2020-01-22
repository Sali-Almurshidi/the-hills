

//let dataArray;
document.getElementById("run").addEventListener("click", function () {
    window.lib.getPosts()
        .then(json => forEachElements(json)); // call function to print getComments

});

function forEachElements(data) {
    data.forEach(function (element) {
        window.lib.getComments()
            .then
            (function (addComment) {
                let comments = addComment[element.id];
                if (comments !== undefined) {
                    element.comment = comments;
                }
                console.log(element);
            })
    });
}





