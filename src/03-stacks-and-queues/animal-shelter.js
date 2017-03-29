const Queue = require('./queue');

/**
 * Using two queues and order attribute
 */
class AnimalShelter {
  constructor() {
    this.dogs = new Queue();
    this.cats = new Queue();
    this.order = 0;
  }

  enqueue(data) {
    Object.assign(data, {_order: this.order++});

    if(data.animal === 'dog') {
      this.dogs.add(data);
    } else {
      this.cats.add(data);
    }
  }

  dequeueAny() {
    const dogLast = this.dogs.peek();
    const catlast = this.cats.peek();

    if(!dogLast || dogLast && catlast && dogLast._order > catlast._order) {
      return this.cats.remove();
    } else {
      return this.dogs.remove();
    }
  }

  dequeueDog() {
    return this.dogs.remove();
  }

  dequeueCat() {
    return this.cats.remove();
  }
}


/**
 * Using one queue with removeBy
 */
class AnimalShelter2 {
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