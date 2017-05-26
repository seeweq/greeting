describe('The counter function', function(){

  it('should be able to count when Sivu is greeted the first time', function(){
    var myCounter = MyCounter();

    myCounter.manageName('Sivu')
    myCounter.manageName('Sivu')

    assert.equal(myCounter.howManyGreeted(), 1);
  })

  it('should be able to count when Sivu and Andre is greeted the first time', function(){
    var myCounter = MyCounter();

    myCounter.manageName('Sivu');
    myCounter.manageName('Andre');
    myCounter.manageName('Andrew');

    assert.equal(myCounter.howManyGreeted(), 3);
  })

})
