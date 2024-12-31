const coding  = ["js","ruby","python","java"]
const values = coding.forEach((item)=>{
    console.log(item);
    
})

console.log(values); // shows undefined becoz foreach doesnt return anything

const mynum = [1,2,3,4,5,6,7,8,9,10]

const newnum = mynum.filter( (num)=>{
    return num>4
} )
console.log(newnum);
// in arrow functions curly braces need retunr keyword but not in ()

// how to do this in foreach
const nums = []
mynum.forEach( (num)=>{
    if(num>4){
        nums.push(num)
    }
} )
console.log(nums);

/******************new concept*****************/

const mynums = [1,2,3,4,5,6,7,8,9,10]

const newnums = mynums.map((num)=> num +10)
console.log(newnums);

const newnums1 = mynums.map((num)=>num*10).map((num)=>num+1)
console.log(newnums1);
// here first map makes an array of 10,20,30 and so on and second map gets that rarray and it addss 1 to it to make it mynums1. this is called chaining
// u can also use map and filter in chaing toghethger

/*************************reduce*************************/

const a = [1,2,3]
const b = a.reduce( function (acc,currval) {
    console.log(`acc: ${acc} and currval: ${currval}`);
    
    return acc +currval
},0)

console.log(b);

const shoppingcart = [
    {
        name:"js course",
        price:299
    },
    {
        name:"python course",
        price:299
    },
    {
        name:"java course",
        price:299
    },
    {
        name:"cpp course",
        price:299
    }
]
const sum = shoppingcart.reduce((price,item)=>price+item.price,0)
console.log(sum);
