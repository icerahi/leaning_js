function sayName(name){
    console.log('hello, '+name);
    return  
}

// 1. a fanction can be store in a variable (passed)

var rahi=sayName;
var ice=rahi;
// var cream=ice('ice er vitree cream rakhci');
// var icecream=ice('final () diye call korar somoy parameter diye dite hoy');
 
//2. a function can be stored in a array (passed)

var arr=[ice,rahi];
// for(var i=0;i<=arr.length-1;i++){
//    arr[i]('rahi chowdory')
// }

//3. a function can be stored as an object field or property(passed)

var person={
    pagol:ice,
    sagol:rahi,
    print:function(){
        console.log('object er vitre function');
        return
    }
}
//console.log(person);

//4. we can create function as needed anywhere ( passed )

var add=10+( function(){return 50}() );
// console.log(add)

//5 .we can pass function as an arguemnt(** passed)

function wow(name,ice,rahi){
    ice(name);
    rahi(name);
    return;
}
// wow('rahi chowdory',ice=sayName,rahi=rahi)

//6. we can return function from another function (** passed)
function base(b){
    return function (n){
        var result=1;
        for(var i=0;i<b;i++){
            result*=n;
        }
        return result;
    }
}
// var power=base(3);
// var result=power(100);
var result=base;
console.log(result(3)(10));