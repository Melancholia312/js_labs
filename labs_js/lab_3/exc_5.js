function exc_5() {
    array_1 = [1,2,3,4]
    array_2 = [5,6,7,8]
    let p_container = document.getElementById("lab3_exc5");
    p_container.innerHTML = array_1.concat(array_2);
}

function clear_p5() {
    let p_container = document.getElementById("lab3_exc5");
    p_container.innerHTML = "";
}