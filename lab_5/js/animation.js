var blocks = document.getElementsByClassName("block");
var button = document.getElementById("toggleThemeBtn");
var buttonAnimate = document.getElementById("hideBall");
var circle = document.getElementsByClassName("circle")[0];

for (let i=0; i<blocks.length; i++){
    blocks[i].classList.add("animate");
}
button.classList.add("animate");
buttonAnimate.classList.add("animate");
circle.classList.add("animate");

function hide() {
    var ball = document.getElementsByClassName("ball")[0];
    if (ball.style.visibility == "hidden") {
        ball.style.visibility = "visible";
        buttonAnimate.innerText = "Убрать шарик";
    } else {
        ball.style.visibility = "hidden";
        buttonAnimate.innerText = "Показать шарик";
    }

}