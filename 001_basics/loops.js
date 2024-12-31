// for
for (let i=0;i<11;i++){
    console.log(i);
    
}
// rest break continue same
let i=0
// while
while(i<10){
console.log(i);
i++;

}
let j=0
// do-while
do{
    console.log(j);
   j++ 
}while(j<10)

/***************other loops********/

// for of
const arr = [1,2,3,4,5]
for(const i of arr){
console.log(i);
}

const greetings = 'hello world'
for(const j of greetings){
    console.log(j);
}

// maps
const map = new Map()
map.set('IN',"India")
map.set('US',"USA")
console.log(map);
for(const key of map){
    console.log(key);
    
}
for(const [key, value] of map){
    console.log(key,value);
    
}
// interation over object using for-in loop
const myobject = {
    js: 'javascript',
    cpp:'c++',
    rp: "ruby"
}
for(const key in myobject){
    console.log(`${key} for ${myobject[key]}`);
    
}
const prog = ["js","ruby","Python","java","cpp"]
for(const key in prog){
    console.log(prog[key]);
    
}
for(const key in map){
    console.log(key);
    
}// map not iterable
