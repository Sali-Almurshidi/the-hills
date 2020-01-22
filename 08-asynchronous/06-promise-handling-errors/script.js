document.getElementById("run").addEventListener("click", function () {
    window.lib.getPersons()
        .then(
            function (resolve, reject) {
                // dataArray = data;
                if (resolve == undefined) {
                    console.log("there is no data ");
                    console.error();
                } else {
                    console.log(resolve);
                }
            }
        ) // end then

});