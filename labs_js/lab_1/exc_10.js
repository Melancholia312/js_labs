function exc_10() {
    let user_input = prompt("Жду твоего инпута", "");
    if (user_input) {
        if (user_input.length !== 3) {
            alert("3 цифры. Я же написал. Или нет. Но теперь точно написал")
        } else if (Number(user_input)) {
            let user_num = user_input;
            let num1 = Number(user_num[0])
            let num2 = Number(user_num[1])
            let num3 = Number(user_num[2])
            if (num1 ** 3 + num2 ** 3 + num3 ** 3 === Number(user_num)) {
                alert("Ого, нашел")
            } else {
                alert("Мимо")
            }
        } else {
            alert("Я же хотел тебе помочь...")
        }
    }
}
