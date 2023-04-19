// Define a class for the nodes of the binary search tree
class Node {
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
    }
  }
  
  // Define a class for the binary search tree
  class BinarySearchTree {
    constructor() {
      this.root = null;
    }
  
    // Method to insert a new node into the tree
    insert(data) {
      const newNode = new Node(data);
      if (!this.root) {
        this.root = newNode;
      } else {
        let current = this.root;
        while (true) {
          if (data < current.data) {
            if (!current.left) {
              current.left = newNode;
              break;
            }
            current = current.left;
          } else {
            if (!current.right) {
              current.right = newNode;
              break;
            }
            current = current.right;
          }
        }
      }
    }
  
    // Method to find a node with a given value
    find(data) {
      let current = this.root;
      while (current) {
        if (data === current.data) {
          return current;
        }
        if (data < current.data) {
          current = current.left;
        } else {
          current = current.right;
        }
      }
      return null;
    }
  
    // Method to update the value of a node
    update(oldData, newData) {
      this.delete(oldData);
      this.insert(newData);
    }
  
    // Method to delete a node with a given value
    delete(data) {
      const deleteNode = (node, data) => {
        if (!node) {
          return null;
        }
        if (data === node.data) {
          if (!node.left && !node.right) {
            return null;
          }
          if (!node.left) {
            return node.right;
          }
          if (!node.right) {
            return node.left;
          }
          let temp = node.right;
          while (temp.left) {
            temp = temp.left;
          }
          node.data = temp.data;
          node.right = deleteNode(node.right, temp.data);
          return node;
        } else if (data < node.data) {
          node.left = deleteNode(node.left, data);
          return node;
        } else {
          node.right = deleteNode(node.right, data);
          return node;
        }
      };
      this.root = deleteNode(this.root, data);
    }
  }