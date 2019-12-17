
function test (clicked_id) {

    let result ;
    let op_one = document.getElementById('op-one').value;
    let op_two = document.getElementById('op-two').value;

    switch (clicked_id) {

        case  "addition":
            result = parseInt(op_one) + parseInt(op_two);
            alert(" result " + result);
            break;
        case "substraction":
            result = parseInt(op_one) - parseInt(op_two);
            alert(" result " + result);
            break;
        case "multiplication":
            result = parseInt(op_one) * parseInt(op_two);
            alert(" result " + result);
            break;
        case "division":
            result = parseInt(op_one) / parseInt(op_two);
            alert(" result " + result);
            break;
    }

}


