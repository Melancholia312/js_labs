const need_numbers = 3;

function median(data) {
    data.sort((a, b) => a - b);
    return data;
}

function exc_5() {
    let user_input = prompt("Пиши 3 числа через пробел", "");
    let arr_input = user_input.split(" ");
    let true_length = 0;
    for (let i = 0; i < arr_input.length; i++){
        if (Number(arr_input[i])){
            true_length++;
        }
    }
    if (need_numbers === true_length){
        let result = arr_input.map(Number);
        alert(median(result));
    } else {
        alert("Давай без этого а...");
    }
}
