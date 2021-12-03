// Breadth first search algorithms

const breadthFirstSearch = (rootNode) => {
  // If this is method of binary tree, you can use currentNode as root node -> currentNode = this.root
  let currentNode = rootNode;
  let list = [];
  let queue = [];

  queue.push(currentNode);

  while(queue.length > 0) {
    currentNode = queue.shift();
    list.push(currentNode.value);
    if(currentNode.left) {
      queue.push(currentNode.left);
    }

    if(currentNode.right) {
      queue.push(currentNode.right);
    }
  }
}