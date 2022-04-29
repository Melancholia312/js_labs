function exc_6() {
    let p_container = document.getElementById("lab1_exc6");
    let p_result_values = "";
    for (let i=0; i<=15; i++){
        p_result_values += i;
        if (i % 2 === 0){
            p_result_values += " - четное <br>"
        } else {
            p_result_values += " - нечетное <br>"
        }
    }
    p_container.innerHTML = p_result_values;
}

function clear_p6() {
    let p_container = document.getElementById("lab1_exc6");
    p_container.innerHTML = "";
}
