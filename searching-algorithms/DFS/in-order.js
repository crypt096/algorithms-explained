const depthFirstSearch = (node, list) => {
  if (node.left) {
    depthFirstSearch(node.left, list);
  }

  list.push(node.value);

  if (node.right) {
    depthFirstSearch(node.right, list);
  }

  return list;
}