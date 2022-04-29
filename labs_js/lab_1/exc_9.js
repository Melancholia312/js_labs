function exc_9() {
    let p_container = document.getElementById("lab1_exc9");
    let p_result = 0;
    for (let i = 0; i <= 1000; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            p_result += i;
        }
    }
    p_result += " Впечатляет, да?"
    p_container.innerHTML = p_result;
}

function clear_p9() {
    let p_container = document.getElementById("lab1_exc9");
    p_container.innerHTML = "";
}
