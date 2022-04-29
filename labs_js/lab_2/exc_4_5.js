function exc_4_5() {
    let a = document.getElementById("lab2_exc4_5_a").value;
    let b = document.getElementById("lab2_exc4_5_b").value;
    let c = document.getElementById("lab2_exc4_5_c").value;
    if (a && b && c) {
        if (a == 0) {
            alert("Без а то куда");
            return;
        }
        let res = {};
        let D = b * b - 4 * a * c;
        if (D < 0){
            alert("Дискриминант вышел меньше 0 :(");
            return;
        }
        res['discriminant'] = D;
        if (D === 0) {
            res["quadratic roots"] = (-b + Math.sqrt(D)) / (2 * a);
        }
        else if (D > 0) {
            let tmp = [];
            tmp.push((-b + Math.sqrt(D)) / (2 * a));
            tmp.push((-b - Math.sqrt(D)) / (2 * a));
            res["quadratic roots"] = tmp;
            alert("Держи свои корни. Сам уже научись решать... " + tmp)
        }
    } else {
        alert("Цифры то введи...")
    }
}
