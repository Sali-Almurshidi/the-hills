let dataArray;
document.getElementById("run").addEventListener("click", function () {
    window.lib.getPosts(function (error, data) {

        dataArray = data;
        forEachElements();
    });

});

function forEachElements() {
   // console.log(dataArray);

    dataArray.forEach(function (element, index) {

        window.lib.getComments(null ,function (error, data) {
           // console.log(data);
            if (data[element.id] != undefined) {
                console.log(data[element.id]);
            }
        });
    });
}