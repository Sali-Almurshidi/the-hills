(function() {

    // your code here
    let createTable = document.createElement('table');
    createTable.setAttribute('id', 'id_table');
    document.body.appendChild(createTable);


    let tableRows = [];
    let tableCols = [];
    let result ;

    for (i=0 ; i<10 ; i++){

        tableRows = document.createElement('tr');
        tableRows.setAttribute('id', 'id_row'+i);
        document.getElementById("id_table").appendChild(tableRows);

        for (j=0 ; j<10 ; j++ ){
            tableCols = document.createElement('td');
            tableCols.setAttribute('id', 'id_col'+j);
            document.getElementById('id_row'+i).appendChild(tableCols);
            result = (i+1) * (j+1) ;
            tableCols.innerHTML= "( "+ (i+1) +"*" +(j+1) + ") = " + result ;
        }
    }
    document.getElementById('target').appendChild(createTable);

})();