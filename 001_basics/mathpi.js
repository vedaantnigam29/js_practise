const descriptor = Object.getOwnPropertyDescriptor(Math,'PI')
console.log(descriptor);
const chai = {
    name: 'ginger chai',
    price: 250,
    isavailable:true
}
console.log(chai);
console.log(Object.getOwnPropertyDescriptor(chai))// undef becoz chai is object not property
console.log(Object.getOwnPropertyDescriptor(chai,'name'))// undef becoz chai is object not property

Object.defineProperty(chai,'name',{
    writable:false
})
console.log(Object.getOwnPropertyDescriptor(chai,'name'))