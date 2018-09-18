const HashMap = require('../src/data-structures/hash-maps/hash-map');
const fs = require('fs');
const readline = require('readline');
const stream = require('stream');

describe('HashMap Performance Test', () => {
  describe('#set', () => {
    it('set lots of values', (done) => {
      hashMap = new HashMap();

      const instream = fs.createReadStream('./words.txt');
      const outstream = new stream;
      const rl = readline.createInterface(instream, outstream);

      rl.on('line', function(line) {
        console.log(line);
      });

      rl.on('close', function() {
        expect(hashMap.collisions).toBeLessThan(1);
        done();
      });

    });
  });
});
