function is_digit(value) {
    if (value){
        return true
    }
    return false
}

function exc_9() {
    let p_container = document.getElementById("lab3_exc9");
    let array = document.getElementById("lab3_exc9_arr").value;
    if (array) {
        let true_array = array.split(" ").map(Number).filter(is_digit);
        if (true_array.length < 1) {
            p_container.innerHTML = "Хотя бы одно число введи...";
            return
        }
        p_container.innerHTML = true_array.map(Math.sqrt);

    } else {
        p_container.innerHTML = "Введи числа";
    }
}

function clear_p9() {
    let p_container = document.getElementById("lab3_exc9");
    p_container.innerHTML = "";
}