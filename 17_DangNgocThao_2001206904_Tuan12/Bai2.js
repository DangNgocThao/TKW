var count = 0;

var btn1 = document.querySelector(".tang");
btn1.addEventListener("click", myClick1);

var btn2 = document.querySelector(".reset");
btn2.addEventListener("click", myClick2);

var btn3 = document.querySelector(".giam");
btn3.addEventListener("click", myClick3);

function myClick1() {
    count++;
    hienthi(count);
}
function myClick2() {
    count = 0;
    hienthi(count);
}
function myClick3() {
    count--;
    hienthi(count);
}

function hienthi(x) {
    var value = document.getElementById("value");
    value.innerText = x;

    if (x > 0) {
        value.style.color = "red";
    }
    else if (x == 0) {
        value.style.color = "green";
    }
    else {
        value.style.color = "blue";
    }
}