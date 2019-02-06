let arrays = [[1, 2, 3], [4, 5], [6]];
console.log(arrays.reduce((a, b) => a.concat(b)))
// ? [1, 2, 3, 4, 5, 6]



function loop(number, test, action1, action2){
    while(test(number)){
        action2(number);
        number = action1(number);
    }
}

loop(3, n => n > 0, n => n - 1, console.log);
// ? 3
// ? 2
// ? 1


function every(array, test) {
  for(let term of array){
      if(!test(term)){
          return false;
        }
    }
    return true;
}

console.log(every([1, 3, 5], n => n < 10));
// ? true
console.log(every([2, 4, 16], n => n < 10));
// ? false
console.log(every([], n => n < 10));
// ? true


function dominantDirection(text) {
  let scripts = countBy(text, char => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.direction : "none";
  }).filter(({name}) => name != "none");
  
  
  console.log(scripts);

   return scripts.reduce((a, b) => a.count > b.count ? a:b).name;
 
}

console.log(dominantDirection("Hello!"));
// ? ltr
console.log(dominantDirection("Hey, مساء الخير"));
// → rtl