//this keyword and Bind method in Javascript

//their is no communication 'THis' with function
//where object their 'THis will work

var obj={
    name:'Team IceCream',
    print:function(){
        console.log(this); //here 'this' give full object
        
    }
}
//obj.print()

//using function
// function myFunc(){
//     function inner(){
//         console.log(this);
//     }
//     new inner();
// }
// myFunc()

//where is object if i use 'this' it will understand that object

var person={
    name:'Rahi chowdory',
    print:function(){
        console.log('Hello',this.name); 
    }
}


// var myPrint=person.name; 
// console.log(myPrint);

// var myPrint=person.print;
// myPrint(); //not work
// var rahi=person.print.bind(person);
// rahi(); ///it work

//myPrint(); // not working when it store in another object
// if i direct call the properties function it will work, but if store then call it will not work

//person.print(); //direct call


// var rahi=function(){
//     console.log(this);
//     console.log('hellow'+this.name);
// }
// rahi();

// function add(num){
//     console.log(this);
    
//     return this.value+num;
// };

// var obj={
//     value:10,
// }

// var obj2={
//     value:11,
// }

// var binded=add.bind(obj); //we bind obj for the function add 
// console.log(binded(10));

var person={
    name:'Team IceCream',
    print:function(){
        // console.log(this.name);
        
        setTimeout(function(){

            console.log(this);
            console.log('Name: ',this.name);
            
            
        }.bind(this),2000) // this allways refer whole window when it in a function,  
    }                       //for these we need to add bind method to recognize the object
}
//this => when it use in function it will refer window or as global, but if in method or objects'properties then 
//it will refer that object from where we are calling
//this only work in object