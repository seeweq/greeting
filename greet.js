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
var display =document.getElementById('count')
var resetbto=document.getElementById('resetbton');
var lang=' ';
var count=0;

var pplgreeted = {};
var pplgreeted = [];

radiobton.addEventListener("change" ,function(e){
lang = e.target.value;
});
button.addEventListener("click", function() {
var input = textBox.value;
if(lang==="english" && input.length > 0){
demo.innerHTML="Hello, " + input;
// console.log(textBox.length)
count++;
display.innerHTML = count
}
if(lang ==="isiXhosa" && input.length > 0){
demo.innerHTML="Molo, " + input;
count++;
display.innerHTML = count
}
if(lang === "afrikaans" && input.length > 0){4
demo.innerHTML="Halo, " + input;
count++;
display.innerHTML = count
}
localStorage.setItem('count', count);
//window.alert(localStorage.count);
document.getElementById('gveText').value ='';

});

var count=localStorage.getItem('count');
document.getElementById("count").innerHTML =  count;
resetbto.addEventListener("click", function(){
display.innerHTML= 0;
});
