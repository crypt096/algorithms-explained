const depthFirstSearch = (node, list) => {
  list.push(node.value);
  
  if (node.left) {
    depthFirstSearch(node.left, list);
  }

  if (node.right) {
    depthFirstSearch(node.right, list);
  }

  return list;
}