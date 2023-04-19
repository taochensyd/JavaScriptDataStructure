// Define a class for the segment tree
class SegmentTree {
    constructor(arr) {
      this.arr = arr;
      this.tree = new Array(4 * arr.length);
      this.buildTree(0, 0, arr.length - 1);
    }
  
    // Method to build the segment tree
    buildTree(index, left, right) {
      if (left === right) {
        this.tree[index] = this.arr[left];
        return;
      }
      const mid = Math.floor((left + right) / 2);
      this.buildTree(2 * index + 1, left, mid);
      this.buildTree(2 * index + 2, mid + 1, right);
      this.tree[index] = Math.min(this.tree[2 * index + 1], this.tree[2 * index + 2]);
    }
  
    // Method to query the minimum value in a given range
    query(left, right) {
      return this.queryTree(0, 0, this.arr.length - 1, left, right);
    }
  
    // Helper method to query the segment tree
    queryTree(index, left, right, queryLeft, queryRight) {
      if (queryLeft <= left && queryRight >= right) {
        return this.tree[index];
      }
      if (queryLeft > right || queryRight < left) {
        return Infinity;
      }
      const mid = Math.floor((left + right) / 2);
      return Math.min(
        this.queryTree(2 * index + 1, left, mid, queryLeft, queryRight),
        this.queryTree(2 * index + 2, mid + 1, right, queryLeft, queryRight)
      );
    }
  
    // Method to update the value of an element in the array
    update(indexToUpdate, newValue) {
      this.arr[indexToUpdate] = newValue;
      this.updateTree(0, 0, this.arr.length - 1, indexToUpdate);
    }
  
    // Helper method to update the segment tree
    updateTree(index, left, right, indexToUpdate) {
      if (left === right) {
        this.tree[index] = this.arr[left];
        return;
      }
      const mid = Math.floor((left + right) / 2);
      if (indexToUpdate <= mid) {
        this.updateTree(2 * index + 1, left, mid, indexToUpdate);
      } else {
        this.updateTree(2 * index + 2, mid + 1, right,indexToUpdate);
      }
      this.tree[index] = Math.min(this.tree[2 * index + 1],this.tree[2 * index + 2]);
     }
  }