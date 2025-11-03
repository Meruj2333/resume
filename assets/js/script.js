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
    },
    {
        id: 2,
        label: "Counter",
        to:"resume/pages/Counter/index.html",
        image:'assets/images/counter.jpg',
    },
    {
        id: 3,
        label: "Counter",
        to:"resume/pages/Counter/index.html",
        image:'assets/images/counter.jpg',
    },
    {
        id: 4,
        label: "Counter",
        to:"resume/pages/Counter/index.html",
        image:'assets/images/counter.jpg',
    },
    {
        id: 5,
        label: "Counter",
        to:"resume/pages/Counter/index.html",
        image:'assets/images/counter.jpg',
    },
    {
        id: 6,
        label: "Counter",
        to:"resume/pages/Counter/index.html",
        image:'assets/images/counter.jpg',
    },
]
const $=s=>document.querySelector(s)
projects.forEach((res)=>{
    $('#projects').innerHTML+=` <div class="project-card">
 \n<img src="${res.image}" alt="Portfolio Project" class="project-img">
 \n<h3>${res.label}</h3>
 \n<a href="/${res.to}"target="_blank">Դիտել կայքը</a>
 \n</div>\n`
})

