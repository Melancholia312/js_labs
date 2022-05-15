function exc_8() {
    let p_container = document.getElementById("lab1_exc8");
    let p_result_values = "";
    for (let i = 0; i <= 20; i+=2) {
        p_result_values += i + " ";
    }
    p_container.innerHTML = p_result_values;
}

function clear_p8() {
    let p_container = document.getElementById("lab1_exc8");
    p_container.innerHTML = "";
}
