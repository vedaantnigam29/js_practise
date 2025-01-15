const user = {
    username: "vedaant",
    logincount: 8,
    signedin:true,

    getuserdetails: function(){
        console.log(`got user details from ${this.username}`);
        console.log(this); // this knows everything about the current context. 
        
    }
}
console.log(user.username);
console.log(user.getuserdetails());

// construction function
const date = new Date() //here new is construction fucntion. new creates new context 

function user1(username,logincount,isloggedin){
    // username = username // we might get confused as to whcih username is which one
    this.username = username
    this.logincount = logincount
    this.isloggedin = isloggedin

    return this
}

const userone = new user1("vedaant",12,true)
const usertwo = new user1("vedaanta",13,false)
console.log(userone);
// new gives new instance otherwise it overwites valiues to same insstance
// this keyword creates empty object called instance
// now, using new keyword calls constrcutor function, it packs all arguments in thsat new object and gives to you
 