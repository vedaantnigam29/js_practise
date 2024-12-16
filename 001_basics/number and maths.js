const score = 400
const bal = new Number(400.1236)
console.log(bal);
console.log(score);
console.log(bal.toString());
console.log(bal.toFixed(3));
const othernum = 123.8966
console.log(othernum.toPrecision(4));
const hund = 1000000
console.log(hund.toLocaleString('en-IN'));
console.log(Number.MAX_VALUE)
//**********************maths****************** */

console.log(Math.abs(-4));
console.log(Math.round(4.7));
console.log(Math.min(4,3,5,6));
console.log(Math.random());
let num= new Number(Math.random()*10)
console.log(num.toFixed(2));

const min=10
const max=20
console.log(Math.floor(Math.random()*(max - min +1))+min);
