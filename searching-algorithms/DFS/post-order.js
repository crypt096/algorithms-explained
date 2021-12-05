const depthFirstSearch = (node, list) => {
  if (node.left) {
    depthFirstSearch(node.left, list);
  }

  if (node.right) {
    depthFirstSearch(node.right, list);
  }

  list.push(node.value);
  return list;
}