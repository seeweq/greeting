/*var textBox = document.getElementById("gveText");
var messageArea = document.getElementById("demo");

document.getElementById("bton").addEventListener("click", myfunction);

function myfunction(){

  var text= textBox.value;
  messageArea.innerHTML='Hello, '+ text;

}*/
var button = document.getElementById('bton');
var radiobton = document.getElementById('radiobton');
var textBox = document.getElementById('gveText');
var demo = document.getElementById('demo');
var display =document.getElementById('countBy')

var lang=' ';
var count=0;

var namesGreeted = {}
for (var i = 0; i < namesGreeted.length; i++) {

}

radiobton.addEventListener("change" ,function(e){
lang = e.target.value;
});
button.addEventListener("click", function(){
var input = textBox.value;

if (lang ==="english" && input.length > 0 && namesGreeted[input] === undefined){
demo.innerHTML="Hello, " + input;
namesGreeted[input] = 0;
count++;
display.innerHTML = count
}
else if(lang ==="isiXhosa" && input.length > 0 && namesGreeted[input] === undefined){
demo.innerHTML="Molo, " + input;
namesGreeted[input] = 0;
count++;
display.innerHTML = count
}
else if(lang === "afrikaans" && input.length > 0 && namesGreeted[input] === undefined){
demo.innerHTML="Halo, " + input;
namesGreeted[input] = 0;
count++;
display.innerHTML = count
}
else if (lang ==="english" && input.length > 0 && namesGreeted[input] !== undefined){
demo.innerHTML="Hello, " + input;
namesGreeted[input] = 0;
count++;
display.innerHTML = count
}
else if(lang ==="isiXhosa" && input.length > 0 && namesGreeted[input] !== undefined){
demo.innerHTML="Molo, " + input;
namesGreeted[input] = 0;
count++;
display.innerHTML = count
}
else if(lang === "afrikaans" && input.length > 0 && namesGreeted[input] !== undefined){
demo.innerHTML="Halo, " + input;
namesGreeted[input] = 0;
count++;
display.innerHTML = count
}
localStorage.setItem('count', count);
//window.alert(localStorage.count);
document.getElementById('gveText').value =''

});

//var count=localStorage.getItem('countBy');
document.getElementById("countBy").innerHTML = count;

function resetBtn() {
    'use strict';
    var rst = document.getElementById('count');
    if (rst >= 0) {
        document.getElementById('countBy').innerHTML = count = 0;
    }
    localStorage.clear();
}
