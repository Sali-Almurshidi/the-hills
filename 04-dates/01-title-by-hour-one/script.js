(function() {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here
    var d = new Date();
    let hour = d.getHours();
    // alert(hour)
     if( hour < 18){
         document.getElementById('target').innerHTML = "Hello";
     }else {
         document.getElementById('target').innerHTML = "Good evening";
     }

})();