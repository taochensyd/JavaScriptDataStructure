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
}
