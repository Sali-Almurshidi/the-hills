(function() {
    // to get the value of an input: document.getElementById("element-id").value




    document.getElementById("addition").addEventListener("click", function() {
        // perform an addition
        let op_one = document.getElementById('op-one').value;
        let op_two = document.getElementById('op-two').value;
        let result = parseInt(op_one) + parseInt(op_two);
        alert(" result " + result);
    });

    document.getElementById("substraction").addEventListener("click", function() {
        // perform an substraction
        let op_one = document.getElementById('op-one').value;
        let op_two = document.getElementById('op-two').value;
        let result = op_two - op_one ;
        alert(" result " +result);
    });

    document.getElementById("multiplication").addEventListener("click", function() {
        // perform an multiplication
        let op_one = document.getElementById('op-one').value;
        let op_two = document.getElementById('op-two').value;
        result = op_two * op_one ;
        alert(" result " +result);
    });

    document.getElementById("division").addEventListener("click", function() {
        // perform an division
        let op_one = document.getElementById('op-one').value;
        let op_two = document.getElementById('op-two').value;
        let result = op_two / op_one ;
        alert(" result " +result);
    });
})();

function test() {

    let op_one = document.getElementById('op-one').value;
    let op_two = document.getElementById('op-two').value;
    let addition = document.getElementById('addition').click();
    let result ;

    switch (this) {


        case "addition":
            result = parseInt(op_one) + parseInt(op_two);
            break;
        case "substraction":
            result = parseInt(op_one) - parseInt(op_two);
            break;
        case "multiplication":
            result = parseInt(op_one) * parseInt(op_two);
            break;
        case "division":
            result = parseInt(op_one) / parseInt(op_two);
            break;
    }
    alert(" result " + result);
    return true;
}

(function() {
    return true;
})();