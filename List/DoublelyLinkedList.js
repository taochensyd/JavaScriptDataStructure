// Define a class for the nodes of the linked list
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

// Define a class for the linked list
class DoublelyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // Method to add a new node to the end of the list
  add(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  // Method to add a new node to the beginning of the list
  addFirst(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
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
    const nodeToDelete = this.find(data);
    if (nodeToDelete) {
      if (nodeToDelete.prev) {
        nodeToDelete.prev.next = nodeToDelete.next;
      } else {
        this.head = nodeToDelete.next;
      }
      if (nodeToDelete.next) {
        nodeToDelete.next.prev = nodeToDelete.prev;
      } else {
        this.tail = nodeToDelete.prev;
      }
    }
  }
}

// Create a new linked list
const myList = new DoublelyLinkedList();

// Add some nodes to the list
myList.add("first");
myList.add("second");
myList.add("third");

// The linked list now looks like this:
// head -> 'first' <-> 'second' <-> 'third' <- tail
