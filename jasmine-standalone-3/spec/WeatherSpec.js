'use strict';

describe('Weather',function(){
  var weather;
  beforeEach(function(){
    weather = new Weather();
  });
  it('it is sometimes stormy', function(){
    spyOn(Math,'random').and.returnValue(1);
    expect(weather.isStormy()).toBeTruthy();
  });
  it('it is not stormy other times', function(){
    spyOn(Math,'random').and.returnValue(0);
    expect(weather.isStormy()).toBeFalsy();
  });
});
