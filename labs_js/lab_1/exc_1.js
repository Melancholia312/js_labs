function exc_1() {
    let some_value = 5;
    let answer = "Тип числа - " + typeof some_value;
    if (some_value > 4){
        answer += ". Число больше 4";
    } else {
        answer += ". Число меньше 4";
    }
    alert(answer);
}
