

class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.2) {
    return a * b;
  } else {
    throw new MultiplicatorUnitFailure("Klunk");
  }
}

function reliableMultiply(a, b) {
  for (;;){
    try{
   		d = primitiveMultiply(a, b)
    }
  	catch(e){}
    if(typeof d == 'number') break;
  }
  return d
}
console.log(reliableMultiply(8, 8));
// → 64
