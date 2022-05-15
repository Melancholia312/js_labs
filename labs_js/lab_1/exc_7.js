function exc_7() {
    let res = prompt("Ну вводи. Пока не введешь - не отпущу", "")
    if (res){
        if (Number(res) > 5){
            alert("МОЛОДЕЦ")
        } else {
            exc_7()
        }
    }
}
