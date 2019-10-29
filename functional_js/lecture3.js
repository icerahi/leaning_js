// inter function or nested function

// function outer(){
//     var a =10;

//     function inner(){
//         a;
//         console.log('I am Inner funciton',a);
//     }
//     inner();
//     console.log('I am Outer function');
// }
 
// outer();

// outer function's parameter and variable can access inner function
function add(a,b){
    function sum(){
        return a+b;
    }
    function sub(){
        return a-b ;
    }
    function multiply(){
        return a*b;
    }
    function division(){
        return a/b;
    }
    return sum()+sub()+multiply()+division();
}
console.log(add(10,5));