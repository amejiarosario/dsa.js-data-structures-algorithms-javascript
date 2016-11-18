let LinkedList = require('./linkedlist');

LinkedList.prototype.dedub = function () {
  let map = new Map();
  let n = this.head;
  map.set(n.data, 1);

  while(n && n.next) {
    let data = n.next.data;
    map.set(data, 1);

    if(map.get(data)){
      n.next = n.next.next;
    }

    n = n.next;
  }
};

LinkedList.prototype.dedub2 = function () {
  for(let c = this.head; c; c = c.next) {
    for(let n = c; n && n.next; n = n.next) {
      let data = n.next.data;

      if(c.data === data){
        n.next = n.next.next;
      }
    }
  }
};

function test() {
  let list = new LinkedList();
  list.add(1);
  list.add(1);
  list.add(2);
  list.add(2);
  console.log(list.toString());

  list.dedub();

  console.log(list.toString());

  list = new LinkedList();
  list.add(1);
  list.add(1);
  list.add(2);
  list.add(2);
  console.log(list.toString());

  list.dedub2();

  console.log(list.toString());
}

test();