var expect = require('chai').expect;

describe('random-timestamp: ', function () {

  var randomTimestamp = require('../../');

  it('common', function () {

    var count = 100;
    var max   = parseInt(new Date().getTime() / 1000, 10);

    while (count--) {

      expect(randomTimestamp()).to.be.within(1, max);
    }
  });

});
