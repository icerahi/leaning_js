/// object oriented programming in OOp (basic class)
// javascript e class nei amader baniye nite hobe


//construction partern 

function Person(name,email){
    this.name=name;
    this.email=email;
    this.print=function(){
        console.log('Name:'+this.email,'Email: '+ this.email);
    }
}

var p1=new Person('rahi chowdory','rahi@gmail.com');
var p2=new Person('kawcher','nm@gmail.com');
var p3=new Person('JOy','joy@gmail.com');
var p4=new Person('kabir','kabir@gmail.com')

 var people=[p1,p2,p3,p4];

// people.forEach(function(value){
//     value.print();
    
// })
// for(var props in p1){
//     console.log(props);
    
// }


function Book(name,author,price){
    this.name=name;
    this.author=author;
    this.price=price;
}
var book= new Book('Functional Jasascript','rahi',200);
console.log(book.contructor); // book.contructor help me to see the objects function 
// it only show me in browser






