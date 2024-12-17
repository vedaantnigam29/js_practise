let arr = [0,1,2,3,4]
console.log(arr[1]);
// array copy operations create shallow copies.i.e they have same reference  point. leads to change in original array to.
const arr1 = ["ironman","captain america"]
const arr3 = new Array(1,2,3,4)

// array methods

arr.push(6)
arr.pop()
console.log(arr); 

arr.unshift(0)//adds this element to the start
arr.shift()// removes first eleementt
console.log(arr.includes(9));
console.log(arr.indexOf(9));

const newArr = arr.join()
console.log(arr);
console.log(newArr);

console.log("a",arr);
const arr4 = arr.slice(1,3)

console.log(arr4);
console.log("b ",arr);
const arr5 = arr.splice(1,3)
console.log(arr5);
console.log("c ",arr);

let hero1 = ["ironman","hulk","black panther"]
let hero2 = ["superman","batman","flash"]
//hero1.push(hero2)
//console.log(hero1[3][1]);
let hero3 = hero1.concat(hero2)
console.log(hero3);

const hero4 = [...hero1,...hero2]
console.log(hero4);
console.log(Array.isArray("vedaant"));
console.log(Array.from("vedaant")); 

let s1=1
let s2 = 2
let s3=3
console.log(Array.of(s1,s2,s3));









