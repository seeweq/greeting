describe('The greetAnyName function', function(){

  it('should be able to greet Andre in Afrikaans', function(){
     var afrikaansGreeting = greetAnyName('Andre', 'afrikaans');
     assert.equal('Hallo, Andre', afrikaansGreeting);
  });

  it('should be able to greet Sivu in Afrikaans', function(){
     var afrikaansGreeting = greetAnyName('Sivu', 'afrikaans');
     assert.equal('Hallo, Sivu', afrikaansGreeting);
  });

 it('should be able to greet Sivu in English', function(){
     var englishGreeting = greetAnyName('Sivu', 'english');
     assert.equal('Hello, Sivu', englishGreeting);
  });

 it('should be able to greet Anathi in IsiXhosa', function(){
   var isiXhosaGreeting = greetAnyName('Anathi','isiXhosa')
   assert.equal('Molo, Anathi', isiXhosaGreeting );
 });
});
