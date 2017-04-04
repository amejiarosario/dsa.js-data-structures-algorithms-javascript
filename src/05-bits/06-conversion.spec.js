const expect = require('chai').expect;
const conversion = require('./06-conversion');

describe('Bit Manipulation: conversion', function() {
  it('29 and 15', function() {
    expect(conversion(0b111101, 0b101111)).to.equal(2);
  });

  it('one and zero', function() {
    expect(conversion(0b01, 0b00)).to.equal(1);
  });
});