describe('the reset function', function(){

  it('Should be able to reset the counter to 0', function(){
     var reset = resetCounter(1)
     assert.equal(0, reset);
 });
});
