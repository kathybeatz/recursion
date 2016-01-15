// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

var getElementsByClassName = function(className, currentNode){
  // your code here

  //create an empty array to store the nodes with the matched classNames
  var results = [];

  //if a currentNode to start at is not passed in, then use the top of the HTML document
  var node = node || document.body;

  //some nodes have more than one class
  //need to break them up in order to compare the currentNode's className and the className you are looking for
  var splitClasses = node.className.split('');
  //check the current node's className against the passed className
  if(splitClasses.indexOf( className ) >= 0){ //will return the index if matched (positive number or 0)
    //if the className matches, store that node in the results container
    results.push(currentNode);
  }

};
