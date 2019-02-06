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

let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false