function exc_11() {
    let p_container = document.getElementById("lab1_exc11");
    let p_result = "";
    console.log("*" * 5)
    for (let i = 0; i <= 5; i++) {
        for (let j = 0; j < i; j++){
            p_result += "*";
        }
        p_result += "<br>";
    }
    p_result += " Впечатляет, да?"
    p_container.innerHTML = p_result;
}

function clear_p11() {
    let p_container = document.getElementById("lab1_exc11");
    p_container.innerHTML = "";
}
