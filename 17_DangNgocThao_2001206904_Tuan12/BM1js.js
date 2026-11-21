var hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
var btn = document.getElementById("btn");
btn.addEventListener("click", myClick);

function myClick() {
    var hexColor = "#";
    for (var i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber()];
    }

    var khung = document.getElementById("khung");
    khung.style.backgroundColor = hexColor;

    var color = document.querySelector(".color");
    color.textContent = hexColor;
}

function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}