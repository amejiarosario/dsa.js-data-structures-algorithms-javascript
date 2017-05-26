/*
 8.6 Towers of Hanoi: In the classic problem of the Towers of Hanoi, you have 3 towers and N disks ofdifferent sizes which can slide onto any tower.The puzzle starts with disks sorted in ascending order of size from top to bottom (Le., each disk sits on top of an even larger one). You have the following constraints:

 (1) Only one disk can be moved at a time.
 (2) A disk is slid off the top of one tower onto another tower.
 (3) A disk cannot be placed on top of a smaller disk.
 Write a program to move the disks from the first tower to the last using Stacks.
 */

const Stack = require('../03-stacks-and-queues/stack');

class HanoiTowers {
  constructor(numberOfDisks) {
    this.n = numberOfDisks;
    this.movements = 0;

    this.t1 = new Stack();
    this.t2 = new Stack();
    this.t3 = new Stack();

    for(let i = numberOfDisks; i > 0; i--) {
      this.t1.push(i);
    }
  }

  getMovements() {
    if(!this.t1.isEmpty()) {
      this.move(this.t1, this.t2);
      this.move(this.t2, this.t3);
    }
    return this.movements;
  }

  move(t1, t2) {
    if(t2.peek() < t1.peek()) {
      throw new Error('A disk cannot be placed on top of a smaller disk');
    }
    const disk = t1.pop();
    t2.push(disk);
    this.movements++;
  }
}

/**
 *
 * @param numberOfDisks number of disks
 */
function wrapper(numberOfDisks) {
  const hanoiTower = new HanoiTowers(numberOfDisks);
  return hanoiTower.getMovements();
}

module.exports = wrapper;