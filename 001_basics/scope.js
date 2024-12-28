var c=300
let a =300
if(true){
    let a=10
const b=20
var c=30
console.log("inner: ",a);

}

console.log(a);
//console.log(b);
console.log(c);
// var prints 30 and applies globally but not let and const

function one(){
    const username = "vedaant"
    function two(){
        const website = "youtube"
        console.log(username);
        
    }
   // console.log(website);
    two()
}

one()

if(true){
    const username = "vedaant"
    if(username==="vedaant"){
        const website = " youtube"
        console.log(username + website);
        
    }
   // console.log(website);
    
}
// console.log(username);

// ++++++++++++++++++++ interesting +++++++++++++++//

console.log(addone(5));

function addone(num){
    return num+1
}
addone(5)

console.log(addtwo(5)); // function accessed before initialisation or declaration in a variable

const addtwo = function(num){
    return num+2
}
addtwo(5)