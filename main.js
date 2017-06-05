var firstNameTextbox = document.getElementById('getText');
var demo = document.getElementById('demo');
var language = document.getElementsByName('language');
var button = document.getElementById('bton');
var counterElem = document.getElementById('countBy');
var clearBton = document.getElementById('resetbton');

//Setup a counter Factory Function instance from values in localStorage.
function setupCounterFromLocalStorage(){
  return MyCounter(JSON.parse(localStorage['allNames']));
}

function storeNamesToLocalStorage(names){
  localStorage['allNames'] = JSON.stringify(names);
}

function showCounter(counterValue){
  counterElem.innerHTML = counterValue;
}

var myCounter = setupCounterFromLocalStorage();

button.addEventListener("click", function() {
   var storageVal = localStorage['count'];
   var firstName = firstNameTextbox.value
   var radioButton = radio();

  if (firstNameTextbox.value.trim() < 1) {
    alert('PLEASE FILL IN EMPTY SPACES!');
    return;
  }
  if (radioButton !== 'none') {
    demo.innerHTML = greetAnyName(firstName, radioButton);
    var countingNamesGreeted = myCounter.manageName(firstName);
  }


   showCounter(myCounter.howManyGreeted());
   storeNamesToLocalStorage(myCounter.allNames());



    firstNameTextbox.value = ''

 });



clearBton.addEventListener("click", function(){

  myCounter.clear();
  firstNameTextbox.value = '';
  showCounter(myCounter.howManyGreeted());
  storeNamesToLocalStorage(myCounter.allNames());
});

showCounter(myCounter.howManyGreeted());
