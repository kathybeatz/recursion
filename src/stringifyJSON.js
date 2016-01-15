// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:


//function should take in an object(number, boolean, string .. essentially everything is an object)
var stringifyJSON = function(obj) {
  // your code goes here

  //Spec: 9
  //check whether the object is a number
  if(typeof obj === 'number'){
  	//if it is, stringify the number and return it
  	return obj.toString();
  }

  //Spec: null
  //check if the object is null
  if(obj === null){
  	//if it is, stringify null and return it
  	return 'null';
  }

  //Spec: true / false
  //check if the object is a boolean
  if(typeof obj === 'boolean'){
  	//if it is false
  	if(!obj){
  		//stringify false and return it
  		return 'false';
  	//if it is true
  	}else{
  		//stringify true and return it
  		return 'true';

  	}
  }

  //Spec: string
  //check if the object is a string
  if(typeof obj === 'string'){
  	//if it is, stringify the object and return it
  	return '"' + obj + '"';
  }

  //Spec: array, array with element inside, nested arrays
  //check if the object is an array 
    if(Array.isArray(obj)){
      //create an empty array as storage for the newly stringified elements from the original array
      var results = [];
      //loop through the array
      for(var i = 0; i < obj.length; i++){
      	//stringify each of the elements inside the array and push them into the results container
        results.push( stringifyJSON(obj[i]) );
      }
     //return the newly stringified array, including newly stringified elements contained inside
     return '['+results.join(',')+']';
  }

  //Spec: object
  //check if the object is an object (add && obj bc typeof null ==== 'object')
    if( typeof obj === 'object' && obj){
      //create an empty array as storage for the newly stringified properties and their keys 
      var results = [];
      //loop through the object
      for(var key in obj){
      	//cannot stringify undefined values and functions, so if the object is undefined or a function
        if(obj[key] === undefined || typeof (obj[key]) === 'function'){
          //do not run the remaining code in the loop and skip to the next element in the object
          continue;
        }
        //stringify the objects key and property and store them in the results container
        results.push( stringifyJSON(key)+':'+stringifyJSON(obj[key]) ); 
      }
      //return the newly stringified object (with elements, nested objects, etc)
      return '{'+results.join(',')+'}';
    }


};
