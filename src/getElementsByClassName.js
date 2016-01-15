// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:


var getElementsByClassName = function(className, node){
  //create an empty array to store the nodes with the matched classNames
  var results = [];

  //if a currentNode to start at is not passed in, then use the top of the HTML document
  node = node || document.body;

  //some nodes have more than one class
  //need to break them up in order to compare the currentNode's className and the className you are looking for
  var nodes = node.className.split(' ');
	
  //check the current node's className against the passed className
  if(nodes.indexOf(className) >= 0) { //will return the index if matched (positive 	number or 0)
    //if the className matches, store that node in the results container
	results.push(node);
  }
	

  //loop through the child nodes
  for (var i = 0; i < node.children.length; i++) {
	//for each child element, invoke getElementsByClassName(will be invoked with a new node(child node) - recursion)
	var childNodeResults = getElementsByClassName(className, node.children[i]);
	//combine the results from parent and child nodes
	results = results.concat(childNodeResults); 
  }

  //return the list of nodes with matching classNames
  return results;
};