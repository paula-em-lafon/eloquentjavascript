//this is wrong

async function locateScalpel(nest) {
  console.log(nest.neighbors);
  for(let neighbor in nest.neighbors){
      //console.log(storage(neighbor));
  	storage(neighbor, "scalpel").then(value => 
                                      console.log("Got", value));
  } 
}

function locateScalpel2(nest) {
  // Your code here.
}

locateScalpel(bigOak).then(console.log);
// → Butcher Shop