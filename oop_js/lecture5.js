// bind,call and apply method in Javascipt


function printMe(){
    console.log('HEllow',this.name);
}
var obj={
    name:'Rahi chowdory',
    age:22,
}
var obj2={
    name:'Imran Hasan',
    email:'rahi@gmail.com',
}
//bind
// printMe.bind(obj)();
// var rahi=printMe.bind(obj2);
// rahi();
 
printMe.call(obj); //with call method we can direct call

function Add(a,b){
    return (a+b)*this.c;
}
var o={
    c:10,
}
var o1={
    c:11,
}
var r=Add.apply(o,[10,10]); //when 'apply' then we have to give parameter as array
console.log(r);
var r1=Add.call(o,10,10);  // call will directly call the function with the object
console.log(r1);
var r2=Add.bind(o);      //bind with return the function ,we have to call that function
console.log(r2(10,10));





 