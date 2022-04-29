class LinkedList {
  constructor() {
    this.head = null; //first node of the list
    this.tail = null; //last node of the list
  }

  append(value) {
    const newNode = { value: value, next: null };
    //if tail is null, then the list is empty
    if (this.tail) {
      this.tail.next = newNode;
    }
    this.tail = newNode;
    //Only update head when head is null / when list is empty
    if (!this.head) {
      this.head = newNode;
    }
  }
  //add to begining of the list, override head with new node
  prepend(value) {
    //new node will be the head and the previous head will be the next/second node
    const newNode = { value: value, next: this.head };
    this.head = newNode;
    //if tail is null, then the list is empty
    if ((!this, tail)) {
      this.tail = newNode;
    }
  }

  toArray() {
    const elements = [];
    let currentNode = this.head;
    while (currentNode) {
      elements.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return elements;
  }
}

const list = new LinkedList();
list.append(1);
list.append(2.09);
list.append(3);
list.append("Hello");
list.append(5);

console.log(list.toArray());
