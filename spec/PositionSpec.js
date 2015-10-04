/**
 * Created by Sy on 10/3/2015.
 */

/* globals position */
describe('position', function() {
  var testList= [1,3,5,6];

  it('when passed 5 with testList should return 2', function() {
    expect(position(testList, 5)).toBe(2);
  });
  it('when passed 2 with testList should return 1', function() {
    expect(position(testList, 2)).toBe(1);
  });
  it('when passed 7 with testList should return 4', function() {
    expect(position(testList, 7)).toBe(4);
  });
  it('when passed 0 with testList should return 0', function() {
    expect(position(testList, 0)).toBe(0);
  });

});