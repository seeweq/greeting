var textBox = document.getElementById('getText').value;
var demo = document.getElementById('demo');
var language = document.getElementsByName('language');



function radio() {
  if (document.getElementById('english').checked === true) {
    return 'english'
  } else if (document.getElementById('isiXhosa').checked === true) {
    return 'isiXhosa'
  } else if (document.getElementById('afrikaans').checked === true) {
    return 'afrikaans'
  }
  else {
    return 'none';
  }
}
