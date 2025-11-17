const $=s=>document.querySelector(s)
const $$ = selector => document.querySelectorAll(selector);

const btn = document.querySelector('#dark-toggle');
const body = document.body;
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark');
    btn.textContent = '☀️';
} else {
    btn.textContent = '🌙';
}
btn.onclick = () => {
    body.classList.toggle('dark');

    if (body.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
        btn.textContent = '☀️';
    } else {
        localStorage.setItem('theme', 'light');
        btn.textContent = '🌙';
    }
    btn.classList.toggle('btn-dark');
};
const projects = [
    {
        id: 1,
        label: "Counter",
        to:"resume/pages/Counter/index.html",
        image:'assets/images/counter.jpg',
        type: "js",
    },
    {
        id: 2,
        label: "Slide",
        to:"resume/pages/slide/index.html",
        image:'assets/images/slide.png',
        type: "js",
    },
    {
        id: 3,
        label: "Traffic-light",
        to:"resume/pages/trafficlight/index.html",
        image:'assets/images/trafficlight.png',
        type: "js",
    },
    {
        id: 4,
        label: "ToDo List",
        to:"resume/pages/todo/index.html",
        image:'assets/images/todo.png',
        type: "js",
    },
    {
        id: 5,
        label: "Registration",
        to:"resume/pages/registration/index.html",
        image:'assets/images/registration.png',
        type: "js",
    },
    {
        id: 6,
        label: "box-shadow",
        to:"resume/pages/box-shadow/index.html",
        image:'assets/images/boxshadow.png',
        type: "js",
    },
    {
    id: 7,
    label: "tasks",
    to:"resume/pages/tasks/index.html",
    image:'assets/images/tasks.png',
        type: "js",
},
    {
        id: 8,
        label: "epixelab",
        to:"resume/htmlpages/epixelab/index.html",
        image:'htmlpages/epixelab/img/screan.png',
        type: "htmlcss",
    },
    {
        id: 9,
        label: "delivery",
        to:"resume/htmlpages/delivery/index.html",
        image:'htmlpages/delivery-page/img/delivery.png',
        type: "htmlcss",
    },
]
projects.forEach((res)=>{
    $('#projects').innerHTML+=` 
    <div class="project-card" data-type="${res.type}">
        <img src="${res.image}" alt="Portfolio Project" class="project-img">
        <h3>${res.label}</h3>
        <a href="/${res.to}" target="_blank">Դիտել կայքը</a>
    </div>
    `
})


const langSelect = $('#lang-select');

langSelect.addEventListener('change', function change(event) {
    const value = event.target.value;
    if (value === "hy") {
        $('header h1').textContent = "Meruzh Harutyunyan";
        $('header p').textContent = "HTML / CSS / JavaScript ուսանող | ապագա ծրագրավորող";
        $('.about h2').textContent="Իմ մասին"
        $('.about p ').textContent="Բարև, ես Մերուժն եմ՝ տեխնոլոգիաների սիրահար և ծրագրավորման ուսանող։ Նպատակ ունեմ դառնալ front-end ծրագրավորող և ստեղծել հետաքրքիր կայքեր։"


    } else if (value === "en") {
        $('header h1').textContent = "Meruzh Harutyunyan";
        $('header p').textContent = "HTML / CSS / JavaScript student | future developer";
        $('.about h2').textContent="About Me"
        $('.about p ').textContent="Hello, I am Meruzh, a technology enthusiast and programming student. My goal is to become a front-end developer and create interesting websites."

    } else if (value === "ru") {
       $('header h1').textContent = "Meruzh Harutyunyan";
        $('header p').textContent = "HTML / CSS / JavaScript студент | будущий разработчик";
        $('.about h2').textContent="Обо мне"
        $('.about p ').textContent="Привет, я Меруж, увлечён технологиями и изучаю программирование. Моя цель — стать front-end разработчиком и создавать интересные сайты."

    }
});
function applyLanguage(lang) {
    if (lang === "hy") {
        $('header h1').textContent = "Meruzh Harutyunyan";
        $('header p').textContent = "HTML / CSS / JavaScript ուսանող | ապագա ծրագրավորող";
        $('.about h2').textContent = "Իմ մասին";
        $('.about p').textContent = "Բարև, ես Մերուժն եմ՝ տեխնոլոգիաների սիրահար և ծրագրավորման ուսանող։ Նպատակ ունեմ դառնալ front-end ծրագրավորող և ստեղծել հետաքրքիր կայքեր։";
        $('.skills h2').textContent = "հմռություններ";
        $('.projects h2').textContent = "Իմ կայքերը";
        document.querySelectorAll('.project-card a').forEach(a => {
            a.textContent = "Դիտել կայքը";
        });



    } else if (lang === "en") {
        $('header h1').textContent = "Meruzh Harutyunyan";
        $('header p').textContent = "HTML / CSS / JavaScript student | future developer";
        $('.about h2').textContent = "About Me";
        $('.about p').textContent = "Hello, I am Meruzh, a technology enthusiast and programming student. My goal is to become a front-end developer and create interesting websites.";
        $('.skills h2').textContent = "skills";
        $('.projects h2').textContent = "My pages";
        document.querySelectorAll('.project-card a').forEach(a => {
            a.textContent = "View my pages";
        });


    } else if (lang === "ru") {
        $('header h1').textContent = "Meruzh Harutyunyan";
        $('header p').textContent = "HTML / CSS / JavaScript студент | будущий разработчик";
        $('.about h2').textContent = "Обо мне";
        $('.about p').textContent = "Привет, я Меруж, увлечён технологиями и изучаю программирование. Моя цель — стать front-end разработчиком и создавать интересные сайты.";
        $('.skills h2').textContent = "Навыки";
        $('.projects h2').textContent = "мои проекты";
        document.querySelectorAll('.project-card a').forEach(a => {
            a.textContent = "Посмотреть сайт";
        });

    }
}

langSelect.addEventListener('change', function(event) {
    const value = event.target.value;
    localStorage.setItem('language', value);
    applyLanguage(value);
});

document.addEventListener('DOMContentLoaded', function() {
    const savedLang = localStorage.getItem('language') || 'hy';
    langSelect.value = savedLang;
    applyLanguage(savedLang);
});
const filterButtons = document.querySelectorAll(".project-filters button");

filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {

        // Highlight active button
        filterButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        const filter = btn.getAttribute("data-filter");
        const cards = document.querySelectorAll(".project-card");

        cards.forEach(card => {
            const type = card.getAttribute("data-type");

            if (filter === "all" || filter === type) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
});
