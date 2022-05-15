array_to_delete = [1,2,3,4,5,6,7,8,9]

function exc_6_7_delete_head() {
    let p_container = document.getElementById("lab3_exc_6_7");
    p_container.innerHTML = array_to_delete.shift();

}

function exc_6_7_delete_tail() {
    let p_container = document.getElementById("lab3_exc_6_7");
    p_container.innerHTML = array_to_delete.pop();
}

function clear_p6_7() {
    let p_container = document.getElementById("lab3_exc_6_7");
    p_container.innerHTML = "";
}