// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

var getElementsByClassName = function(className, currentNode){
  // your code here

  //if a currentNode to start at is not passed in, then use the top of the HTML document
  var node = node || document.body;
  
  //check the current node's className against the passed className


};
