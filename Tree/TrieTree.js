// Define a class for the nodes of the trie
class TrieNode {
    constructor() {
      this.children = {};
      this.isEndOfWord = false;
    }
  }
  
  // Define a class for the trie
  class Trie {
    constructor() {
      this.root = new TrieNode();
    }
  
    // Method to insert a new string into the trie
    insert(word) {
      let current = this.root;
      for (let i = 0; i < word.length; i++) {
        const ch = word.charAt(i);
        let node = current.children[ch];
        if (!node) {
          node = new TrieNode();
          current.children[ch] = node;
        }
        current = node;
      }
      current.isEndOfWord = true;
    }
  
    // Method to search for a string in the trie
    search(word) {
      let current = this.root;
      for (let i = 0; i < word.length; i++) {
        const ch = word.charAt(i);
        const node = current.children[ch];
        if (!node) {
          return false;
        }
        current = node;
      }
      return current.isEndOfWord;
    }
  
    // Method to delete a string from the trie
    delete(word) {
      const deleteWord = (current, word, index) => {
        if (index === word.length) {
          if (!current.isEndOfWord) {
            return false;
          }
          current.isEndOfWord = false;
          return Object.keys(current.children).length === 0;
        }
        const ch = word.charAt(index);
        const node = current.children[ch];
        if (!node) {
          return false;
        }
        const shouldDeleteCurrentNode = deleteWord(node, word, index + 1);
        if (shouldDeleteCurrentNode) {
          delete current.children[ch];
          return Object.keys(current.children).length === 0;
        }
        return false;
      };
      deleteWord(this.root, word, 0);
    }
  }