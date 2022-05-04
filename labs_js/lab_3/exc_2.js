let array = [1,2,3,4,5,6,7,8,9]

function exc_2_show_5() {
    let p_container = document.getElementById("lab3_exc2");
    p_container.innerHTML = String(array[4]);
}

function exc_2_change_5() {
    array[4] += 10;
}

function clear_p2() {
    let p_container = document.getElementById("lab3_exc2");
    p_container.innerHTML = "";
}
