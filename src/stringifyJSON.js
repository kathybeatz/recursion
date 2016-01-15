// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:


//function should take in an object(number, boolean, string .. essentially everything is an object)
var stringifyJSON = function(obj) {
  // your code goes here

  //Spec: 9
  //check whether the object is a number
  if(typeof obj === 'number'){
  	//if it is, stringify it
  	return obj.toString();
  }

  //Spec: null
  //check if the object is null
  if(obj === null){
  	//if it is, stringify it
  	return 'null';
  }

  //Spec: true / false
  //check if the object is a boolean
  if(typeof obj === 'boolean'){
  	//if it is false
  	if(!obj){
  		//stringify false
  		return 'false';
  	//if it is true
  	}else{
  		//stringify true
  		return 'true';

  	}
  }


};
