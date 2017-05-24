var textBox = document.getElementById('gveText').value;
var radio = document.querySelectorAll('.lang').value;
var demo = document.getElementById('demo');

var greetMe =  function withMessage(textBox,radio){
  if(lang  === 'english'){
    demo.innerHTML="Hello, " + textBox;
  }
  else if(lang === 'afrikaans'){
    demo.innerHTML="Hallo, " + textBox;
  }
  else if (lang === 'ixiXhosa') {
    demo.innerHTML="Molo, " + textBox;
  }
}
greetMe(textBox)
