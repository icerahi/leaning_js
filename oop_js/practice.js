//object manupulation

var data={
    name:'Rahi chowdory',
    age:20,
    print:function(){
        console.log(name,age);
        
    }
}
console.log(data.name);
console.log(data['name']);

data.department='CST';
data['institute']='FENI computer institute';

for(var value in data){
    console.log(value," : ",data[value]);
}
//object implementation
