const user = {
    username: "vedaant",
    price:999,

    welcomemessage:function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
        
    }
}

user.welcomemessage()
user.username = "sam"
user.welcomemessage()

console.log(this);
// in browser global context is window but in nodejs it is empty parenthesis

function chai(){
    console.log(this);
    
}
chai()
// arrow function
const chai1 = ()=> {
    let username = "vedaant"
    console.log(this.username);
    
}

chai1()

const addtwo = (num1,num2)=>{
    return num1+num2
}
console.log(addtwo(3,4));

// implicit return format
const addtwo1 = (num1,num2)=> (num1+num2)
console.log(addtwo1(3,4))
// return keyword neccesssary with curly braces but not in parenthesis

