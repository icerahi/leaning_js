// Higher order function

// if a function get another function as a parameter or return another function

var arr=[1,3,4,5,6,'rahi','ice','cream'];
function rahi(r){
    console.log(r);
}
arr.forEach(rahi);


// callback function return function form another function

function caller(){
    return function(name){
        console.log('Caller calling you '+ name);
    }
}
var rahi=caller();
rahi('icecream');
rahi('rahi chowdory');
caller()('Rahi Cagol');