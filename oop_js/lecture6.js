// inheritance in javascript

// function Person(){
//     this.name='Rahi chowdory';
// }

// function Teacher(){
//     Person.call(this);
//     this.subject='JavaScript';
// }

// var p1=new Teacher();
// console.log(p1);


function Human(name){
    this.name=name
}
Human.prototype={
    printName:function(){
        console.log(this.name);  
    },
}

function Student(name,id){
    Human.call(this,name);
    this.id=id;
}

Student.prototype=Object.create(Human.prototype); //add human prototype's referance to Student
//Object.setPrototypeOf(Student.prototype,Human.prototype);  //another process to inherit prototype
Student.prototype.constructor=Student;          //set Student.prototype.constructor form Student
var s1=new Student('Imran Hasan',1234);

s1.printName();

 

