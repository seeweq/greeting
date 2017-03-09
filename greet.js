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

if (lang ==="english" && input.length > 0 && namesGreeted[i] === undefined){
demo.innerHTML="Hello, " + input;
namesGreeted[i] = 1;
count++;
display.innerHTML = count
}
if(lang ==="isiXhosa" && input.length > 0 && namesGreeted[i] === undefined){
demo.innerHTML="Molo, " + input;
namesGreeted[i] = 1;
count++;
display.innerHTML = count
}
if(lang === "afrikaans" && input.length > 0 && namesGreeted[i] === undefined){
demo.innerHTML="Halo, " + input;
namesGreeted[i] = 1;
count++;
display.innerHTML = count
}
localStorage.setItem('count', count);
//window.alert(localStorage.count);
document.getElementById('gveText').value =''

});

var count=localStorage.getItem('count');
document.getElementById("count").innerHTML = count;

function resetBtn(){
  var resetbto=document.getElementById('count');
  if(resetbto >= 0){
    document.getElementById('count').innerHTML = count = 0;
  }
  localStorage.clear();
}
