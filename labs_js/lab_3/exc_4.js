let array_1 = [1,2,3,4,5,6,7,8,9]

function exc_4_show_1() {
    let p_container = document.getElementById("lab3_exc4");
    let p_result = "";
    for (let i = 0; i < array_1.length; i++) {
        p_result += array_1[i] + " ";
    }
    p_container.innerHTML = p_result;
}

function exc_4_show_2() {
    let p_container = document.getElementById("lab3_exc4");
    let p_result = "";
    for (let key in array_1) {
        p_result += array_1[key] + " ";
    }
    p_container.innerHTML = p_result;
}

function clear_p4() {
    let p_container = document.getElementById("lab3_exc4");
    p_container.innerHTML = "";
}
