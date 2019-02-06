function arrayToList(arr){
	place = null
  	for(let i = (arr.length-1); i >= 0 ; i -= 1){
	  	place = {value: arr[i], rest: place};
    }
  	return place;
}

function listToArray(list){
	arr = [];
  	do{
      arr.push(list.value);
      list = list.rest;
    }
  	while(list != null)
	return arr;
}

function prepend(value, rest){
	return {value: value, rest: rest};
}

function nth(list, depth){
	if(depth === 0){
		return list.value;
    }
  	else if(list.rest === null){
		return "not that deep";
    }
  	return nth(list.rest, (depth -1))
}

console.log(arrayToList([10, 20]));
// ? {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// ? [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// ? {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// ? 20