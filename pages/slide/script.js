const $ = (sel) => document.querySelector(sel);

const images = [
    "https://picsum.photos/id/1018/1200/800",
    "https://picsum.photos/id/1015/1200/800",
    "https://picsum.photos/id/1024/1200/800",
    "https://picsum.photos/id/1036/1200/800"

];

let index = 0;
let timer, timeout;

const activeEl = $("#activeImage");
const indicatorEl = $(".indicators");
const thumbnailsEl = $(".thumbnails");

images.forEach((img, i) => {
    indicatorEl.innerHTML += `<span class="indicator ${i === 0 ? "active" : ""}" data-index="${i}"></span>`;
    thumbnailsEl.innerHTML += `
    <div class="thumbnail ${i === 0 ? "active" : ""}" data-index="${i}">
      <img src="${img}" alt="Thumbnail ${i + 1}">
    </div>`;
});

const indicators = document.querySelectorAll(".indicator");
const thumbnails = document.querySelectorAll(".thumbnail");

function updateSlide(newIndex) {
    indicators[index].classList.remove("active");
    thumbnails[index].classList.remove("active");

    index = (newIndex + images.length) % images.length;

    indicators[index].classList.add("active");
    thumbnails[index].classList.add("active");
    activeEl.src = images[index];
}

function nextFunc() {
    clearInterval(timer);
    clearTimeout(timeout);
    updateSlide(index + 1);
    timeout = setTimeout(() => timerFunction(), 3000);
}

function prevFunc() {
    clearInterval(timer);
    clearTimeout(timeout);
    updateSlide(index - 1);
    timeout = setTimeout(() => timerFunction(), 3000);
}

$(".next").onclick = nextFunc;
$(".prev").onclick = prevFunc;

indicatorEl.onclick = (e) => {
    if (!e.target.dataset.index) return;
    clearInterval(timer);
    clearTimeout(timeout);
    updateSlide(+e.target.dataset.index);
    timeout = setTimeout(() => timerFunction(), 3000);
};

thumbnailsEl.onclick = (e) => {
    const thumb = e.target.closest(".thumbnail");
    if (!thumb) return;
    clearInterval(timer);
    clearTimeout(timeout);
    updateSlide(+thumb.dataset.index);
    timeout = setTimeout(() => timerFunction(), 3000);
};

function timerFunction() {
    timer = setInterval(() => nextFunc(), 2000);
}

activeEl.src = images[index];
timerFunction();
