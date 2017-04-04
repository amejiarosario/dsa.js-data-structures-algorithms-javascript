const expect = require('chai').expect;
const conversion = require('./06-conversion');

describe('Bit Manipulation: conversion', function() {
  it('power of two', function() {
    expect(conversion(0b0)).to.equal(true);
  });

  it('no power of two', function() {
    expect(conversion(0b111)).to.equal(false);
  });
});