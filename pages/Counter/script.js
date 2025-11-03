const plus2 = document.querySelector(".plus2");
let count = 0;
if(localStorage['count']){
    count = +localStorage['count'];
}
if(localStorage['color']){
    updateColor(localStorage['color']);
}
function countupdate(){
    document.querySelector("#counter").innerText = count;

}
document.querySelector("#increment").onclick = function(){
    count++;
    updateColor("blue")

    countupdate()
}
document.querySelector("#decrement").onclick = function(){
    count--;
    updateColor("red")

    countupdate()
}
document.querySelector("#plus2").onclick = function(){
    count+=2;
    updateColor("green")
    countupdate()
}
document.querySelector("#plus10").onclick = function(){
    count+=10;
    updateColor("lightblue")

    countupdate()
}
document.querySelector("#save-btn").onclick = function(){
    localStorage['count']= count
}
countupdate()
function updateColor(val){
    document.body.className=""
    document.body.classList.add(val)
    localStorage['color'] = val;
}