class PGroup {
    constructor(arr = []){
    this.array = arr;
  }
  add(number) {
    gan = new PGroup(this.array);
    gan.array = gan.array.push(number);
  }
  delete(number){
    gan = new PGroup(this.array);
    gan.array = gan.array.filter(n => n != number);
  }
  has(number){
    return this.array.includes(number);
  }
  static empty.add(array){
  	return new this(array);
  }
}

let a = PGroup.empty.add("a");
let ab = a.add("b");
let b = ab.delete("a");

console.log(b.has("b"));
// → true
console.log(a.has("b"));
// → false
console.log(b.has("a"));
// → false