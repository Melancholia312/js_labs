function exc_2() {
    switch (prompt("Загадай число. 1, 2 или 3?", "")) {
        case "1":
            alert("Ты загадал(а) число 1!");
            break;
        case "2":
            alert("Ты загадал(а) число 2!");
            break;
        case "3":
            alert("Ты загадал(а) число 3!");
            break;
        default:
            alert("Фальшивишь...");
            break;
    }
}
