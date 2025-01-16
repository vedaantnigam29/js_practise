function setusername(username){
    this.username = username
}
function createuser(username,email,password){
    setusername.call(this,username) // call is used to call whithin function a function outside. hold reference.but when it assigns ussername it vanishes once its done because the reference is different.therefore we type thiss inside call to get reference of thisss ussername
   
    this.email = email
    this.password = password
}
const chai = new createuser("chai","chai@fb.com","123")
console.log(chai);
