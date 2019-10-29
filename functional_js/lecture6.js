// higher order function
// two type, function return and call back function

// function print(text){
//     return console.log(text);
// }

// function hello(name){
//     print(name);
// }

// hello('hallow');

//pass a function as a parameter (callback function)

function hello(name,print){
    print(name);
}

// hello('rahi chowdory',function(name){
//     console.log(name);
// })
 
// hello('ice cream',function(name){
//     console.log(name+'yah huuuuuuu');
// })

// hello (' icecream',function(name){
//     console.log('Length of :'+name + ' is = ',name.length);
// })

// call back function

var me={
    name:'Imran hasan',
    age:16,
    email:'zanjarwhite@gmail.com'
}
function printMySelf(data,callback){
    console.log(data.name+'('+data.age+')');

    if (data.age>=18){
        callback(data.email)
    }else{
        console.log('you are too little....')
    }
}

printMySelf(me,function(data){
    console.log('Email sent to : ',data);
})



//multiple call back function in a funtion's parameter
function Wow(data,callback1,callback2){
    console.log(data);
    callback1(data);
    callback2(data);
}

Wow('Ice is only for Cream',function(data){
    console.log(data.toUpperCase());
},
function(data){
    console.log(data.toLowerCase());
    console.log(data.length);
})