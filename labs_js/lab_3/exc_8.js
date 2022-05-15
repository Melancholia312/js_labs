array_8_1 = [1,2,3,4]
array_8_2 = [5,6,7,8]
new_array = array_8_1.concat(array_8_2)

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function exc_8() {
    let p_container = document.getElementById("lab3_exc8");
    new_array.unshift(getRandomInt(20));
    p_container.innerHTML = new_array;
}



function clear_p8() {
    new_array = array_8_1.concat(array_8_2)
    let p_container = document.getElementById("lab3_exc8");
    p_container.innerHTML = "";
}