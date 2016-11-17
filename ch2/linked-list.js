class Node {
  constructor(data) {
    this.data = data;
  }

  add(data){
    let end = new Node(data);

    // iterate
    let n = this;
    while(n.next) {
      n = n.next;
    }

    n.next = end;
  }


}

// usage:

let node  = new Node('1');
node.add('2');
node.add('3');

console.log(node);