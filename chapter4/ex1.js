function reverseArray(arr){
	arrlength = arr.length;
	result = [];
  	for(let i = 0; i < arrlength; i += 1){
    	result.unshift(arr[i]);
    }
  	return result;
}

function reverseArrayInPlace(arr){
	arrlength = arr.length - 1;
  	place = 0;
  	for(let i = 0; arrlength- i > i; i += 1){
    	place = arr[arrlength - i];
      	arr[arrlength - i] = arr[i];
      	arr[i] = place;
    }
  	return arr;
}

console.log(reverseArray(["A", "B", "C"]));
// ? ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// ? [5, 4, 3, 2, 1]