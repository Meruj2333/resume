const $ = s => document.querySelector(s);


let users = JSON.parse(localStorage.getItem("users")) || [
    { id: 1, name: "Karen", email: "kaen.com", password: "123456" },
    { id: 2, name: "Jora", email: "jorja@gmail.com", password: "1234" },
    { id: 3, name: "Seto", email: "seto@gmail.com", password: "456" }
];

const userList = $('.list-group');
const error = $('#error');

function renderUsers() {
    userList.innerHTML = '';
    users.forEach(u => {
        userList.innerHTML += `<li class="list-group-item">${u.name} - ${u.id}</li>`;
    });
}

renderUsers();

let userName = $('#name');
let userEmail = $('#email');
let userPassword = $('#password');
let cpassword = $('#cpassword');
let homesection = $('#homeSection');
homesection.style.display = 'none';
$('.reg-btn').onclick = function(e) {
    e.preventDefault();

    console.log("clicked");

    if (!userName.value || !userEmail.value || !userPassword.value || !cpassword.value) {
        error.textContent = "Խնդրում ենք լրացնել բոլոր դաշտերը։";
        error.style.display = 'block';
        error.style.color = 'red';
        return;
    }

    if (cpassword.value !== userPassword.value) {
        error.textContent = "Գաղտնաբառերը չեն համընկնում։";
        error.style.display = 'block';
        error.style.color = 'red';
        return;
    }

    const emailExists = users.some(u => u.email === userEmail.value.trim());
    if (emailExists) {
        error.textContent = "Այս email-ով օգտատեր արդեն կա։";
        error.style.display = 'block';
        error.style.color = 'red';
        return;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(userEmail.value)) {
        error.textContent = "Անվավեր email";
        error.style.display = 'block';
        return;
    }


    const newUser = {
        id: users.length + 1,
        name: userName.value.trim(),
        email: userEmail.value.trim(),
        password: userPassword.value
    };

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    renderUsers();

    userName.value = '';
    userEmail.value = '';
    userPassword.value = '';
    cpassword.value = '';

    error.textContent = "Գրանցումը հաջողվեց ✅";
    error.style.display = 'block';
    error.style.color = 'green'
}
let errorlog=$('#errorlog')
errorlog.style.display = 'none';
function showHome() {
    const loginEmail = document.getElementById('loginEmail').value.trim();
    const loginPassword = document.getElementById('loginPassword').value;

    const user = users.find(u => u.email === loginEmail && u.password === loginPassword);
    if (!user) {
errorlog.style.display = 'block';
        return;
    }else {
        console.log("a")
        homesection.style.display = 'block';
cardLog.style.display = 'none';
        errorlog.textContent = "Հաջողվեց";
        errorlog.style.color = 'green';
        errorlog.style.display = 'block';
        btnLog.style.display = 'none';
        btnReg.style.display = 'none';
    }
    loginEmail.value = '';
    loginPassword.value = '';
}
cardReg=$('.cardReg')
cardReg.style.display='none';
btnReg=$('.btnReg')
btnReg.onclick=function(){
    cardReg.style.display='block';
    cardLog.style.display='none';

}
cardLog=$('.cardLog')
cardLog.style.display='none';
btnLog=$('.btnLog')
btnLog.onclick=function(){
    cardLog.style.display='block';
    cardReg.style.display='none';

}
function logout(){
    homesection.style.display='none';
    btnLog.style.display='block';
    btnReg.style.display='block';
}
