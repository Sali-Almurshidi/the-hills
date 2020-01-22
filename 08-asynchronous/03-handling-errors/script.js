
document.getElementById("run").addEventListener("click" , function () {
    window.lib.getPersons(function (error, data) {
        // dataArray = data;
       if(data == undefined){
           console.log("there is no data ");
       }else {
           console.log(data);
       }
    });
});