function deepEqual(obj1, obj2){
  	//check both are objects
	if((typeof obj1 == "object" && obj1 != null) &&
       (typeof obj2 == "object" && obj2 != null)){
      	//obtain  keys
      	obj1Keys = Object.keys(obj1);
      	obj2Keys = Object.keys(obj1);
      	// check objects have same ammount of keys
      	if(obj1Keys.length !== obj2Keys.length) return false;
      	// loop through keys
      	for(let i = 0; i < obj1Keys.length; i += 1){
        	// check both keys are the same
          	if(obj1Keys[i] !== obj2Keys[i]) return false;
          	// check value is object
          	
          	if(typeof obj1[obj1Keys[i]] == "object" 
               && typeof obj2[obj2Keys[i]] == "object"){
              	// recursive call to object inside returning
            	if(deepEqual(obj1[obj1Keys[i]], obj2[obj2Keys[i]])
                  !== true){
               return false;
                }
            }
            //check values
            else{
              if(obj1[obj1Keys[i]] != obj2[obj2Keys[i]])return false;
            }
        }
      	return true;
    }
}

//

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// ? true
console.log(deepEqual(obj, {here: 1, object: 2}));
// ? false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// ? true