class user{
    constructor(username,email,password){
        this.username = username
        this.email=email
        this.password=password
    }
    encryptpassword(){
        return `${this.password}abc`
    }
    changeusername(){
        return `${this.username.toUpperCase()}`
    }
}

const chai = new user("chai","chai@gmail.com","123")
console.log(chai.encryptpassword());
console.log(chai.changeusername());

// cosntuctor activated when new keyword used

class user1 {
    constructor(username){
        this.username = username
    }
    logme(){
        console.log(`username is ${this.username}`);
        
    }
}

class teacher extends user1{
    constructor(username,email,password){
        super(username)// it refrs to user1 lass goes to that constructor sets username and gives access too.

        this.email=email
        this.password=password
    }

    addcourse(){
        console.log(`a neww course was added by ${this.username}`);
        
    }
}

const coffee = new teacher("chai","chai@teacher.com","123")
coffee.addcourse()
const masalachai = new user1("masalachai")
masalachai.logme()
coffee.logme()

class user2{
    constructor(username){
        this.username=username
    }
   static createid(){
        return`123`
    } // static keyword prevents givign access of createid to others
}
const vedaant = new user2("vedaant")
console.log(vedaant.createid());

