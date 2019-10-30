// higher order function 
// Return a funtion from another function

// function host(){
//     console.log('I am host function');
//     return function(){
//         console.log('I am child');
//     }
// }

// var a =host();
// a();

function greeting(message){
    // function ret(name){
    //     console.log(message+" "+name);
    // }
    // return ret;
    return function(name){
        console.log(message+"  "+name);
    };
};
var good=greeting('Good Morning');
var hello=greeting('Hellow!');

good('Rahi Chowdory');
hello('IceCream');