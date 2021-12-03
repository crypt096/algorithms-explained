// Breadth first search algorithm

const breadthFirstSearch = (queue, list) => {
  // Queue is [tree.root] / list is empty array
  if(!queue.length) {
    return list;
  }

  let currentNode = queue.shift();
  list.push(currentNode.value);

  if(currentNode.left) {
    queue.push(currentNode.left);
  }

  if(currentNode.right) {
    queue.push(currentNode.right);
  }

  return this.breadthFirstSearch(queue, list);
}