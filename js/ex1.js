//Complete the following functions
//Displays all body nodes

// Function to display all nodes in the body
const displayBodyNodes = (node) => {
  console.log(node);
  node.childNodes.forEach(child => displayBodyNodes(child));
}

// Start with the body element
displayBodyNodes(document.body);



bodyNodes();