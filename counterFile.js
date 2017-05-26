
function MyCounter() {

  var namesGreeted = [];
  var count = 0;

  function manageName(firstName) {
    var inList = false;

    for (var i = 0; i < namesGreeted.length; i++){
      if (namesGreeted[i] === firstName) {
        inList = true;
        break;
      }
    }

    if (!inList) {
      namesGreeted.push(firstName);
    }

  }


  function howManyGreeted(){
    return namesGreeted.length;
  }

  //manageName(firstName);
  //return namesGreeted.length ;
  return {
    manageName,
    howManyGreeted
  }
}
