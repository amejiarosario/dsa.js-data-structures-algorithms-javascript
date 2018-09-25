const mapImplementations = [
  Map,
  require('./hash-maps/hashmap'),
];

mapImplementations.forEach((MapImplementation) => {
  describe(`Map (common interface) with ${MapImplementation.constructor.name}`, () => {
    let map;

    beforeEach(() => {
      map = new MapImplementation();
    });

    describe('#set', () => {
      it('should save an object', () => {
        map.set(1, 'test');
        expect(map.size).toBe(1);
      });
    });
  });
});
