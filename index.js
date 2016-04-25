'use strict';

var randomNatural = require('random-natural');

module.exports = function () {
  return randomNatural({
    min: 1,
    max: parseInt(new Date().getTime() / 1000, 10),
    inspected: true
  });
};
