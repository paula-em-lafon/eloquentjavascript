class Group {
  constructor(arr = []){
    this.array = arr;
  }
  add(number) {
    this.array.push(number);
  }
  delete(number){
    this.array = this.array.filter(n => n != number);
  }
  has(number){
    return this.array.includes(number);
  }  
  static from(array){
  	return new this(array);
  }
}

class GroupIterator{
	constructor(group){
    	this.x = 0;
      	this.group = group;
    }
  next() {
    if (this.x == this.group.array.length) return {done: true};
    var value = this.group.array[this.x];
    this.x++;
    return {value, done: false};
	}
}

Group.prototype[Symbol.iterator] = function() {
  return new GroupIterator(this);
};
  
for(let value of Group.from(["a", "b", "c"])) {
  console.log(value);
}
// → a
// → b
// → c