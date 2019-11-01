// object
// var obj={}; //these is object

// var obj1=new Object;
// console.log(obj);
// console.log(obj1);

//obj
var book={
    name:'Function Javascript',
    author:"Rahi Chowdory",
    publisher:"Demik",
    page:250,
    print:function(){
        console.log(this.name,this.author);
        
    }
}
//object's properties access
book.print()
console.log(book.name); //(.notation)
console.log(book['author']);//(braket notation)



//properties add from outsite
book.publishyear=2010; //add properties from outside with (. notation)
 
book['price']=200;  //add properties from outside with ([] notation)


//for traversing properties with loop
for(var props in book){
    //console.log(props); // key 
    console.log(book[props]);  //value
}

 


