var textBox = document.getElementById('getText');
var demo = document.getElementById('demo');
var language = document.getElementsByName('language');
var button = document.getElementById('bton');
var display =document.getElementById('countBy');

var myCounter = new MyCounter();

button.addEventListener("click", function(){
  var storageVal= localStorage['count'];
  var firstName = textBox.value
  var radioButton = radio();
  demo.innerHTML = greetAnyName(firstName, radioButton);
  var countingNamesGreeted = myCounter.manageName(firstName);
  var total = myCounter.howManyGreeted();
  var storageCounter =  parseInt(storageVal) + 1;

  if(textBox.value.trim() < 1){
    alert ('PLEASE FILL IN EMPTY SPACES!');
    return;
  }

  document.getElementById('getText').value =''

  localStorage.setItem('count', storageCounter);
  display.innerHTML = storageCounter;
});
var total = localStorage.getItem('countBy');
