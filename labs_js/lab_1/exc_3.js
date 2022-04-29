function exc_3_func_1() {
    let p_container = document.getElementById("lab1_exc3");
    let p_result_values = "for: ";
    for (let i=1; i<=40; i++){
        p_result_values += i + " ";
    }
    p_container.innerHTML = p_result_values;
}

function exc_3_func_2() {
    let p_container = document.getElementById("lab1_exc3");
    let p_result_values = "while: ";
    let i = 1;
    while (i <= 40){
        p_result_values += i + " ";
        i++;
    }
    p_container.innerHTML = p_result_values;
}

function recursive(value, res) {
    if (value === 41){
        return res
    }
    res += value + " "
    value++;
    return recursive(value, res)
}

function exc_3_func_3() {
    let p_container = document.getElementById("lab1_exc3");
    let p_result_values = "Рекурсия - ";
    let i = 1;
    p_container.innerHTML = recursive(i, p_result_values);
}

function clear_p3() {
    let p_container = document.getElementById("lab1_exc3");
    p_container.innerHTML = "";
}
