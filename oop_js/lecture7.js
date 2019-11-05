// new keyword in javascirpt

function Animal(name){
    this.name=name;
}
Animal.prototype.printName=function(){
    console.log(this.name);
}
var cat=new Animal('Cat');
var dog=new Animal('Dog');
cat.printName();
dog.printName();

/// costomize creating new keyword isn't important to learn.

/// create new keywork as our self...