const depthFirstSearch = (node, list) => {
  if (node.left) {
    depthFirstSearch(node.left, data);
  }
  
  list.push(node.value);

  if (node.right) {
    depthFirstSearch(node.right, data);
  }

  return list;
}