//Prototype in Javascript

//if we use this type of print the it will repeat
// function Person(name,age){
//     this.name=name;
//     this.age=age;
//     this.print=function(){
//         console.log(this.name,this.age);
        
//     }
// }

// but if we use 'print' as prototype then it will always share when a object create
function Person(name,age){
    this.name=name;
    this.age=age;
    this.print=function(){
        console.log(this.name,this.age);
        
    }
}
//we can add proto with (dot notation)
// Person.prototype.print=function(){
//     console.log(this.name,this.age);
    
// }
// Person.prototype.email='zanjarwhite@gmail.com';

//also  prototype is a object ,so we can pass prototype as object props.
Person.prototype={
    print:function(){
        console.log(this.name,this.age,this.email);
    },

    email:'rahi@gmail.com',
}


var p1=new Person('Rahi Chowdory',19);
var p2=new Person('IMran Hasan',20);
console.log(p1);
console.log(p2);

console.log(p1.__proto__);  //calling proto
p1.print();   //calling prototype props function
console.log(p1.email);  // proto props calling
p1.__proto__.email='zanjarwhite@gmail.com'; // updating proto properties
 console.log(p1.email);
 console.log(p2.email); //will change for both if one proto change
 
 
  
 
 




