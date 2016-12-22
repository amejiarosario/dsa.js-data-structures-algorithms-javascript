const Queue = require('./queue');

class AnimalShelter {
  constructor() {
    this.queue = new Queue();
  }

  enqueue(data) {
    this.queue.add(data);
  }

  dequeueAny() {
    return this.queue.remove();
  }

  dequeueDog() {
    return this.queue.removeBy({animal: 'dog'});
  }

  dequeueCat() {
    return this.queue.removeBy({animal: 'cat'});
  }
}

module.exports = AnimalShelter;