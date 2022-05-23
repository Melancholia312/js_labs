var blocks = document.getElementsByClassName("block");
var button = document.getElementById("toggleThemeBtn");

for (let i=0; i<blocks.length; i++){
    blocks[i].classList.add("animate");
}
button.classList.add("animate");