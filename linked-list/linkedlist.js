class Node {
  constructor(data) {
    this.data = data;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  // O(1)
  add(data) {
    if(this.head) {
      let newHead = new Node(data);
      newHead.next = this.head;
      this.head = newHead;
    } else {
      this.head = new Node(data);
    }
  }

  // O(n)
  delete(data) {
    let n = this.head;

    if(n.data === data) {
      this.head = this.head.next;
      return;
    }

    // iterate
    while(n.next){
      if(n.next.data === data) {
        n.next = n.next.next;
        return;
      }
      n = n.next;
    }
  }

  // O(n)
  toString() {
    let data = [];
    let n = this.head;
    while(n) {
      data.push(n.data);
      n = n.next;
    }
    return data.join(' -> ');
  }
}

function test() {
  let list = new LinkedList();
  list.add(1);
  list.add(2);
  list.add(3);
  list.add(4);

  console.log(list);

  list.delete(4);
  console.log(list);

  list.delete(2);
  console.log(list);

  list.delete(1);
  console.log(list);
};

// test();

module.exports = LinkedList;