const expect = require('chai').expect;
const AnimalShelter = require('./animal-shelter');

describe('Stacks: QueueViaStack', function () {
  let shelter;
  const cat = { animal: 'cat', name: 'Minino'};
  const dog = { animal: 'dog', name: 'Lassie'};

  beforeEach(function () {
    shelter = new AnimalShelter();
  });

  describe.skip('.enqueue', function () {
    it('should enqueue a cat', function () {
      shelter.enqueue(cat);
      expect(shelter.queue.list.head.data).to.equal(cat);
    });
  });

  describe('dequeueAny', function () {
    it('should remove in FIFO order', function () {
      shelter.enqueue(dog);
      shelter.enqueue(cat);
      expect(shelter.dequeueAny()).to.equal(dog);
      expect(shelter.dequeueAny()).to.equal(cat);
    });
  });

  describe('dequeueDog', function () {
    it('should return first dog', function () {
      shelter.enqueue(dog);
      expect(shelter.dequeueDog()).to.equal(dog);
    });

    it('should not return cat', function () {
      shelter.enqueue(cat);
      expect(shelter.dequeueDog()).to.equal(undefined);
    });

    it('should remove a dog even if is a cat is first', function () {
      shelter.enqueue(cat);
      shelter.enqueue(dog);
      expect(shelter.dequeueDog()).to.equal(dog);
    });
  });

  describe('dequeueCat', function () {
    it('should return first cat', function () {
      shelter.enqueue(cat);
      expect(shelter.dequeueCat()).to.equal(cat);
    });

    it('should not return dog', function () {
      shelter.enqueue(dog);
      expect(shelter.dequeueCat()).to.equal(undefined);
    });

    it('should remove a dog even if is a cat is first', function () {
      shelter.enqueue(dog);
      shelter.enqueue(cat);
      expect(shelter.dequeueCat()).to.equal(cat);
    });
  });
});