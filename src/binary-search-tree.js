const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.treetop = null;
  }

  root() {
    return this.treetop;
  }

  add(data) {
    const addNode = new Node(data);

    if (!this.treetop) {
      this.treetop = addNode;
      return;
    }
    let nodeTree = this.treetop;

    while (nodeTree) {
      if (nodeTree.data > data) {
        if (!nodeTree.left) {
          nodeTree.left = addNode;
          break;
        }
        nodeTree = nodeTree.left;
      }
      if (nodeTree.data < data) {
        if (!nodeTree.right) {
          nodeTree.right = addNode;
          break;
        }
        nodeTree = nodeTree.right;
      }
    }
  }

  has(data) {

    if (!this.treetop) {
      return false;
    }

    let nodeTree = this.treetop;


    while (nodeTree) {
      if (nodeTree.data === data) {
        return true;
      }

      if (nodeTree.data > data) {
        nodeTree = nodeTree.left;
      } else if (nodeTree.data < data) {
        nodeTree = nodeTree.right;
      } else {
        return true
      }


    }

    return false;
  }

  find(data) {
    if (!this.treetop) {
      return null;
    }

    let nodeTree = this.treetop;


    while (nodeTree) {
      if (nodeTree.data === data) {
        return nodeTree;
      }

      if (nodeTree.data > data) {
        nodeTree = nodeTree.left;
      } else if (nodeTree.data < data) {
        nodeTree = nodeTree.right;
      }


    }

    return null;
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};