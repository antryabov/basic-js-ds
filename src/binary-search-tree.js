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

  remove(data) {
    this.treetop = removeNodes(this.treetop, data);

    function removeNodes(node, data) {
      if (!node) {
        return;
      }

      if (node.data > data) {
        node.left = removeNodes(node.left, data);
        return node;
      } else if (node.data < data) {
        node.right = removeNodes(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }

        if (!node.right) {
          node = node.left
          return node;
        }

        if (!node.left) {
          node = node.right
          return node;
        }

        let maxLeft = node.left;
        while (maxLeft.right) {
          maxLeft = maxLeft.right
        }
        node.data = maxLeft.data;
        node.left = removeNodes(node.left, maxLeft.data);
        return node;
      }

    }

  }

  min() {
    if (!this.treetop) {
      return null;
    }
    let nodeTree = this.treetop;

    while (nodeTree.left) {

      nodeTree = nodeTree.left;
    }

    return nodeTree.data;
  }

  min() {
    if (!this.treetop) {
      return null;
    }
    let nodeTree = this.treetop;

    while (nodeTree.left) {

      nodeTree = nodeTree.left;
    }

    return nodeTree.data;
  }

  max() {
    if (!this.treetop) {
      return null;
    }
    let nodeTree = this.treetop;

    while (nodeTree.right) {

      nodeTree = nodeTree.right;
    }

    return nodeTree.data;
  }
}

module.exports = {
  BinarySearchTree
};