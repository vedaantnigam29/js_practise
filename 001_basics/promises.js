const promiseone = new  Promise(function(resolve,reject){
    //do an async task
    setTimeout(function(){
        console.log('async task is comlete');
        resolve()// this connects rssolve to .then()
    },1000)
}) // promise created
// .then exceutes one promise ocnsumed. 
// resolve() also retunr objects funct arrays etc to functions in .then()
//.catch() linked to reject
promiseone.then(function(){
    console.log("promise consumed");
    
})//.then() has direct connection to resolve

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("async task 2");
        resolve()
    },1000)
}).then(()=>{
    console.log("async 2 resolved");
    
})

const promisethree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: "chai",email:"chai@chaiaurcode.com"}) //passing data thru  resolve to function in then
    },1000)
})

promisethree.then(function(user){
console.log(user);

})

const promisefour  = new Promise(function(resoslve,reject){
    setTimeout(function(){
        let error =  true
        if(!error){
            resolve({username:"vedaant",password:"123"})
        }
        else {'error: something went qwrong'}
    },1000)
})
promisefour.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
console.log(username);

}).catch(function(error){console.log(error);
}).finally(()=> console.log("error resolved")
)// func in finally always executes



const promisefive = new Promise(function(Resolve,reject){
    setTimeout(function(){
        let error =  true
        if(!error){
            Resolve({username:"js",password:"123"})
        }
        else {reject('error: js went qwrong')}
    },1000)
})
// async await exactly like async await, it waits for work to finish or givess error therefore we wrapin try and catch
async function consumepromisefive(){
    try{const response = await promisefive
    console.log(response);} catch(error){
        console.log(error);
        
    }
    
}
consumepromisefive()

async function getallusers(){
   try {
    const response= await fetch('https://jsonplaceholder.typicode.com/users')
    const data  =await response.json() // this conversion to json takes time therefore needs await 
    console.log(data);
   } catch (error) {
    console.log(error);
    
   }
    
}
getallusers()

