let value = {
  node: "node",
  next: {
    node: "node1",
    next: null,
  },
};

class Node {
  constructor(node) {
    this.node = node;
    this.next = null;
  }
}

class LinkList {
  constructor() {
    this.head = null;
  }

  createNode(node) {
    if (this.head == null) {
      this.head = new Node(node);
      return;
    }
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }

    currentNode.next = new Node(node);
  }


  print(){
    while(this.head){
      console.log(this.head.node);
      this.head = this.head.next;
    }
  }
}

let valueLink = new LinkList()

valueLink.createNode(30)
valueLink.createNode(31)
valueLink.createNode(32)
valueLink.createNode(33)

valueLink.print()

