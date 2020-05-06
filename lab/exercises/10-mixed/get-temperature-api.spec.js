const fn = require('./get-temperature-api');

describe('Get Temperature from flaky API', () => {
  it('should work', (done) => {
    const urls = [
      '//www.mocky.io/v2/5e9ee4862d00000d00cb7836', // 42.12
      '//www.mocky.io/v2/5e9ee4f52d00000d00cb783e', // 42.1
      '//www.mocky.io/v2/5e9ee4702d00005a00cb7833', // 42
    ];
    fn(urls).then((res) => {
      expect(res).toEqual(42.12);
      done();
    }).catch(done);
  });
});
