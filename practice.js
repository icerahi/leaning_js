// callback function


function Info(data,func){
    func(data);
}

Info('rahi',function(data){
    console.log(data.length);
})
Info('rahi',function(data){
    console.log(data);
})

source={
    name:'Imran Hasan Rahi',
    age:19,
    email:'story.rahi@gmail.com'
}

function Rahi(data,func){
    console.log(data.name+'('+data.age+')')
    if (data.age>=18){
        func(data.email);
    }else{
        console.log('Sorry,YOu are too little...')
    }
}

Rahi(source,function(data){
    console.log('email has been send to :',data);
})
// multiple callback function as parameter

function Wow(data,func1,func2){
    console.log(data);
    func1(data);
    func2(data);
}

Wow(source.email,function(data){
    console.log(data.toUpperCase());
},function(data){
    console.log(data.toLowerCase());
    console.log(data.length);
})

