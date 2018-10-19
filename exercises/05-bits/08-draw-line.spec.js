const expect = require('chai').expect;
const drawLine = require('./08-draw-line');

describe('Bit Manipulation: drawLine', function() {

  it('0', function() {
    const screen = [0x0];
    const width = 8;
    const x1 = 0;
    const x2 = 0;
    const y = 0;

    expect(drawLine(screen, width, x1, x2, y)).to.eql([
      0b00000000
    ]);
  });

  it('1', function() {
    const screen = [0x0];
    const width = 8;
    const x1 = 0;
    const x2 = 1;
    const y = 0;

    expect(drawLine(screen, width, x1, x2, y)).to.eql([
      0b10000000
    ]);
  });

  it('3', function() {
    const screen = [0x0];
    const width = 8;
    const x1 = 0;
    const x2 = 3;
    const y = 0;

    expect(drawLine(screen, width, x1, x2, y)).to.eql([
      0b11100000
    ]);
  });

  it('7', function() {
    const screen = [0x0];
    const width = 8;
    const x1 = 0;
    const x2 = 7;
    const y = 0;

    expect(drawLine(screen, width, x1, x2, y)).to.eql([
      0b11111110
    ]);
  });

  it('8 - all', function() {
    const screen = [0x0];
    const width = 8;
    const x1 = 0;
    const x2 = 8;
    const y = 0;

    expect(drawLine(screen, width, x1, x2, y)).to.eql([
      0b11111111
    ]);
  });

  it('7-8', function() {
    const screen = [0x0];
    const width = 8;
    const x1 = 7;
    const x2 = 8;
    const y = 0;

    expect(drawLine(screen, width, x1, x2, y)).to.eql([
      0b00000001
    ]);
  });

  it('center', function() {
    const screen = [0x0];
    const width = 8;
    const x1 = 3;
    const x2 = 5;
    const y = 0;

    expect(drawLine(screen, width, x1, x2, y)[0].toString(2)).to.equal('11000');
  });

  it('6', function() {
    const screen = [0x0];
    const width = 8;
    const x1 = 6;
    const x2 = 8;
    const y = 0;

    expect(drawLine(screen, width, x1, x2, y)).to.eql([
      0b00000011
    ]);
  });

  it('12 (5)', function() {
    const screen = [0x0];
    const width = 8;
    const x1 = 0;
    const x2 = 4;
    const y = 0;

    expect(drawLine(screen, width, x1, x2, y)).to.eql([
      0b11110000
    ]);
  });

  it('2 bytes screen', function() {
    const screen = [0x0, 0x0];
    const width = 16;
    const x1 = 6;
    const x2 = 12;
    const y = 0;

    expect(drawLine(screen, width, x1, x2, y)).to.eql([
      0b00000011, 0b11110000
    ]);
  });

  it('2x2 screen', function() {
    const screen = [0x0, 0x0,
                    0x0, 0x0];
    const width = 16;
    const x1 = 6;
    const x2 = 12;
    const y = 1;

    expect(drawLine(screen, width, x1, x2, y)).to.eql([
      0b00000000, 0b0000000,
      0b00000011, 0b11110000
    ]);
  });

  it('3x3 screen interbits', function() {
    const screen = [0x0, 0x0, 0x0,
                    0x0, 0x0, 0x0,
                    0x0, 0x0, 0x0];
    const width = 24;
    const x1 = 7;
    const x2 = 17;
    const y = 1;

    expect(drawLine(screen, width, x1, x2, y)).to.eql([
      0b00000000, 0b00000000, 0b00000000,
      0b00000001, 0b11111111, 0b10000000,
      0b00000000, 0b00000000, 0b00000000
    ]);
  });

  xit('3x3 screen last byte high', function() {
    const screen = [0x0, 0x0, 0x0,
                    0x0, 0x0, 0x0,
                    0x0, 0x0, 0x0];
    const width = 24;
    const x1 = 16;
    const x2 = 17;
    const y = 2;

    expect(drawLine(screen, width, x1, x2, y)).to.eql([
      0b00000000, 0b00000000, 0b00000000,
      0b00000000, 0b00000000, 0b00000000,
      0b00000000, 0b00000000, 0b10000000
    ]);
  });

  xit('3x3 screen last byte low', function() {
    const screen = [0x0, 0x0, 0x0,
      0x0, 0x0, 0x0,
      0x0, 0x0, 0x0];
    const width = 24;
    const x1 = 24;
    const x2 = 25;
    const y = 2;

    expect(drawLine(screen, width, x1, x2, y)).to.eql([
      0b00000000, 0b00000000, 0b00000000,
      0b00000000, 0b00000000, 0b00000000,
      0b00000000, 0b00000000, 0b00000001
    ]);
  });
});