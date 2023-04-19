// AVL tree (named after inventors Adelson-Velsky and Landis) is a self-balancing binary search tree

// Define a class for the nodes of the AVL tree
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
    this.height = 1;
  }
}

// Define a class for the AVL tree
class AVLTree {
  constructor() {
    this.root = null;
  }

  // Method to get the height of a node
  getHeight(node) {
    if (!node) {
      return 0;
    }
    return node.height;
  }

  // Method to update the height of a node
  updateHeight(node) {
    node.height =
      Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1;
  }

  // Method to get the balance factor of a node
  getBalanceFactor(node) {
    return this.getHeight(node.left) - this.getHeight(node.right);
  }

  // Method to perform a right rotation
  rotateRight(node) {
    const leftNode = node.left;
    node.left = leftNode.right;
    leftNode.right = node;
    this.updateHeight(node);
    this.updateHeight(leftNode);
    return leftNode;
  }

  // Method to perform a left rotation
  rotateLeft(node) {
    const rightNode = node.right;
    node.right = rightNode.left;
    rightNode.left = node;
    this.updateHeight(node);
    this.updateHeight(rightNode);
    return rightNode;
  }

  // Method to balance a node
  balance(node) {
    this.updateHeight(node);
    const balanceFactor = this.getBalanceFactor(node);
    if (balanceFactor > 1) {
      if (this.getBalanceFactor(node.left) < 0) {
        node.left = this.rotateLeft(node.left);
      }
      node = this.rotateRight(node);
    } else if (balanceFactor < -1) {
      if (this.getBalanceFactor(node.right) > 0) {
        node.right = this.rotateRight(node.right);
      }
      node = this.rotateLeft(node);
    }
    return node;
  }

  // Method to insert a new node into the tree
  insert(data) {
    const insertNode = (node, data) => {
      if (!node) {
        return new Node(data);
      }
      if (data < node.data) {
        node.left = insertNode(node.left, data);
      } else if (data > node.data) {
        node.right = insertNode(node.right, data);
      } else {
        return node;
      }
      return this.balance(node);
    };
    this.root = insertNode(this.root, data);
  }

  // Method to find the minimum value in a subtree
  findMinValue(node) {
    let current = node;
    while (current.left) {
      current = current.left;
    }
    return current.data;
  }

  // Method to delete a node with a given value from the tree
  delete(data) {
    const deleteNode = (node, data) => {
      if (!node) {
        return null;
      }
      if (data < node.data) {
        node.left = deleteNode(node.left, data);
      } else if (data > node.data) {
        node.right = deleteNode(node.right, data);
      } else {
        if (!node.left && !node.right) {
          return null;
        } else if (!node.left) {
          return node.right;
        } else if (!node.right) {
          return node.left;
        } else {
          const minValue = this.findMinValue(node.right);
          node.data = minValue;
          node.right = deleteNode(node.right, minValue);
        }
      }
      return this.balance(node);
    };
    this.root = deleteNode(this.root, data);
  }
}
