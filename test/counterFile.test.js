describe('The counter function', function(){

  it('should be able to count when Sivu is greeted the first time', function(){
    var myCounter = MyCounter();

    myCounter.manageName('Sivu')
    myCounter.manageName('Sivu')
    myCounter.manageName('Aphiwe')
    myCounter.manageName('Aphiwe')

    assert.equal(myCounter.howManyGreeted(), 2);
  })

  it('should be able to count when Sivu and Andre is greeted the first time', function(){
    var myCounter = MyCounter();

    myCounter.manageName('Sivu');
    myCounter.manageName('Andre');
    myCounter.manageName('Andrew');

    assert.equal(myCounter.howManyGreeted(), 3);
  });

  it('should be able to initialize from a list of name objects', function(){
    var myCounter = MyCounter(["Andre", "Sivu", "Andrew"]);
    assert.equal(myCounter.howManyGreeted(), 3);
  });

  it('should be able to initialize with no parameter', function(){
    var myCounter = MyCounter();
    assert.equal(myCounter.howManyGreeted(), 0);
  });

  it('should be able to give me its content', function(){
    var myCounter = MyCounter(["Andre", "Sivu", "Andrew"]);
    assert.deepEqual(myCounter.allNames(), ["Andre", "Sivu", "Andrew"]);
  });

  it('should be able to clear itself', function(){
    var myCounter = MyCounter(["Andre", "Sivu", "Andrew"]);
    assert.deepEqual(myCounter.allNames(), ["Andre", "Sivu", "Andrew"]);

    myCounter.clear();
    assert.deepEqual(myCounter.allNames(), []);
    assert.deepEqual(myCounter.howManyGreeted(), 0);
    
  });

})
