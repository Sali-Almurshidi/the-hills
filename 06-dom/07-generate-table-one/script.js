(function() {

    // your code her

    // creat table

    var createTable = document.createElement('table');
    createTable.setAttribute("id", "myTable");
    document.body.appendChild(createTable);

    var cell = [];
    for (i= 0 ; i < 10 ; i ++){
        cell = document.createElement("TR");
        cell.setAttribute("id", "myTr");
        document.getElementById("myTable").appendChild(cell);
        cell.innerHTML= "here we go";
    }
    document.getElementById('target').appendChild(createTable);

})();