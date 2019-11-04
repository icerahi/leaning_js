 
// bind,call,apply

function Person(roll){
    console.log(this.name,roll);
    
}
var obj={
    name:'Rahi CHowdory',
}

var binded=Person.bind(obj,123)(); //bind will add the object with the function and retern the function

var called=Person.call(obj,123);  //call will add the object with the function and direct call/parameter=(coma,)

var applyed=Person.apply(obj,[123])  //apply with ad the object with the function and direct call,parameter=[as a array]


 