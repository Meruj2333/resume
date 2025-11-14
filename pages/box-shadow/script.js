$=s=>document.querySelector(s)
const boxEl=$('#box')
$('#coverColor').oninput=function(e){
    $('.cover-bg').style.background=e.target.value;
}
$('#boxW').oninput=function(e){
    boxEl.style.width=e.target.value+"px"
    $('#boxWNum').value=e.target.value;

}
$('#boxWNum').oninput=function(e){
    boxEl.style.width=e.target.value+"px"
    $('#boxW').value=e.target.value;

}
$('#boxH').oninput=function(e){
    boxEl.style.height=e.target.value+"px"
    $('#boxHNum').value=e.target.value;

}
$('#boxHNum').oninput=function(e){
    boxEl.style.width=e.target.value+"px"
    $('#boxW').value=e.target.value;

}
$('#borderW').oninput=function(e){
    boxEl.style.borderWidth=e.target.value+"px"
    $('#borderWNum').value=e.target.value;

}
$('#borderWNum').oninput=function(e){
    boxEl.style.width=e.target.value+"px"
    $('#borderW').value=e.target.value;

}
$('#borderC').oninput=function(e){
    $('#box').style.borderColor=e.target.value;
}
$('#borderR').oninput=function(e){
    boxEl.style.borderRadius=e.target.value+"px"
    $('#borderRNum').value=e.target.value;

}
$('#borderRNum').oninput=function(e){
    boxEl.style.width=e.target.value+"px"
    $('#borderR').value=e.target.value;

}
const shadow = {
    x: 0,
    y: 0,
    blur: 20,
    spread: 0,
    color: '#000000'
};

function updateShadow() {
    const { x, y, blur, spread, color } = shadow;
    boxEl.style.boxShadow = `${x}px ${y}px ${blur}px ${spread}px ${color}`;
}

function bindInput(idSlider, idNumber, key) {
    $(idSlider).oninput = function (e) {
        shadow[key] = e.target.value;
            $(idNumber).value = shadow[key];
        updateShadow();
    };

    $(idNumber).oninput = function (e) {
        shadow[key] = e.target.value;
        $(idSlider).value = shadow[key];
        updateShadow();
    };
}

bindInput('#shX', '#shXNum', 'x');
bindInput('#shY', '#shYNum', 'y');
bindInput('#shBlur', '#shBlurNum', 'blur');
bindInput('#shSpread', '#shSpreadNum', 'spread');
bindInput('#shColor', '#shColor', 'color');
