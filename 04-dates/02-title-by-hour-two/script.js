(function () {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here
    var d = new Date();
    let hour = d.getHours();
    let MINUTES = d.getMinutes();
    // alert(hour)
    if( hour > 17 && MINUTES >= 30){
        document.getElementById('target').innerHTML = "Good evening";
    }else if (hour > 18){
        document.getElementById('target').innerHTML = "Good evening";
    }else {
        document.getElementById('target').innerHTML = "Hello there !!";
    }


})();