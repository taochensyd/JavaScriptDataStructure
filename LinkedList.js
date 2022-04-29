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
    if (!this.tail) {
      this.tail = newNode;
    }
  }

  //inseart a new node after the node with the value
  inseartAfter(value, newValue) {
    const exisitingNode = this.find(newValue);
    if (exisitingNode) {
      const newNode = { value: value, next: exisitingNode.next }; //update the next node of the new node
      exisitingNode.next = newNode; //pointing current node to the new node
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

  find(value) {
    //check if head is empty
    if (!this.head) {
      return null;
    }
    let currentNode = this.head;
    while (currentNode) {
      //Found the node
      if (currentNode.value === value) {
        return currentNode;
      }
      currentNode = currentNode.next; //pointing to next node
    }
    return null;
  }

  //delete a node
  //find node first

  delete(value) {
    //check if its head
    if (!this.head) {
      return null;
    }

    //check if its head
    while (this.head && this.head.value === value) {
      this.head = this.head.next; //update head with next node(second node)
    }
    let currentNode = this.head;
    //changing previous node to point to next node, the current node will have no reference and JS GC will take care of it
    while (currentNode.next) {
      //check current has value wants delete
      if (currentNode.next.value === value) {
        currentNode.next = currentNode.next.next; //point to next node after the node which deteled
      } else {
        currentNode = currentNode.next;
      }
    }

    //update tail node
    if (this.tail.value === value) {
      this.tail = currentNode; //update tail node, current node is the last node before the tail node
    }
  }
}

const list = new LinkedList();
list.append(1);
list.append(2.09);
list.append(3);
list.append("Hello");
list.append(5);
list.prepend("Prepended Node");
list.delete(5);
list.delete(1);
list.delete(3);
list.append(6);
list.prepend(7);

console.log(list.toArray());

console.log(list.find(1));
console.log(list.find(7));

list.inseartAfter("Insert_Value1", 7);
list.inseartAfter("Insert_Value2", "Insert_Value1");
console.log(list.toArray());
