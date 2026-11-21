var reviews = [
    {
        id: 1,
        name: "Trong Nghia",
        job: "Web Developer",
        img: "hinh/img_SP1.jpg",
        text: "Tuyệt vời, đánh giá 5*.",
    },
    {
        id: 2,
        name: "Ái Thư",
        job: "HLV Dinh Dưỡng",
        img: "hinh/img_SP2.jpg",
        text: "Sản phẩm dinh dưỡng này rất tuyệt vời.",
    },
    {
        id: 3,
        name: "Thanh Dung",
        job: "Marketer",
        img: "hinh/img_SP3.jpg",
        text: "Tôi thích sản phẩm này, thường sử dụng cho cả gia đình.",
    },
    {
        id: 4,
        name: "Trần Huỳnh",
        job: "Giám Đốc",
        img: "hinh/img_SP4.jpg",
        text: "Cực kỳ yêu thích !!!",
    },
];

var r = document.getElementById("ngaunhien");
r.addEventListener("click", myClick);

function myClick() {
    var i = getRandomNumber();
    showPerson(i);
}
var count = 0;
var b1 = document.querySelector(".prev");
b1.addEventListener("click", myClick1);

var b2 = document.querySelector(".next");
b2.addEventListener("click", myClick2);

function myClick1() {
    count--;
    if (count < 0)
        count = reviews.length - 1;
    showPerson(count);
}
function myClick2() {
    count++;
    if (count >= reviews.length)
        count = 0;
    showPerson(count);
}

function showPerson(person) {
    var item = reviews[person];
    var img = document.getElementById("img");
    img.src = item.img;
    var author = document.getElementById("name");
    author.textContent = item.name;
    var job = document.getElementById("job");
    job.textContent = item.job;
    var info = document.getElementById("text");
    info.textContent = item.text;
}

function getRandomNumber() {
    return Math.floor(Math.random() * reviews.length);
}