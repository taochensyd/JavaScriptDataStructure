// Define a class for the nodes of the linked list
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// Define a class for the linked list
class SinglylyLinkedList {
  constructor() {
    this.head = null;
  }

  // Method to add a new node to the end of the list
  add(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  // Method to add a new node to the beginning of the list
  addFirst(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  // Method to find a node with a given value
  find(data) {
    let current = this.head;
    while (current) {
      if (current.data === data) {
        return current;
      }
      current = current.next;
    }
    return null;
  }

  // Method to update the value of a node
  update(oldData, newData) {
    const nodeToUpdate = this.find(oldData);
    if (nodeToUpdate) {
      nodeToUpdate.data = newData;
    }
  }

  // Method to delete a node with a given value
  delete(data) {
    if (!this.head) {
      return;
    }
    if (this.head.data === data) {
      this.head = this.head.next;
      return;
    }
    let current = this.head;
    while (current.next) {
      if (current.next.data === data) {
        current.next = current.next.next;
        return;
      }
      current = current.next;
    }
  }
}

// Create a new linked list
const myList = new SinglylyLinkedList();

// Add some nodes to the list
myList.add("first");
myList.add("second");
myList.add("third");

// The linked list now looks like this:
// head -> 'first' -> 'second' -> 'third' -> null
