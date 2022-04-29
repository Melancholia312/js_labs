function exc_3() {
    const need_numbers = 2;
    let user_input = prompt("Ну вводи. Не забывай, только 2 числа", "");
    if (user_input) {
        let arr_input = user_input.split(" ");
        let true_length = 0;
        for (let i = 0; i < arr_input.length; i++) {
            if (Number(arr_input[i])) {
                true_length++;
            }
        }
        if (need_numbers === true_length) {
            let result = arr_input.map(Number);

            alert(Math.min.apply(null, result) + ". Как и договаривались");
        } else {
            alert("Давай без этого а...");
        }
    }
}
