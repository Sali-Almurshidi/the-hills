function getMonth() {

    // your code here
    let year = document.getElementById('run').value;

    let day;

    for(m=0 ; m < 12 ; m++){
        day = new Date(year , m , 13);
        if (day == (6 - new Date().getDay() - 1) - 7){
            alert(m);
        }
    }


}

