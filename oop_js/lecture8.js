// __proto__ and prototype in javascript
//multiple inheritance


//prototype is a object that can share with another function
//__proto__ is only get from object that created
function chain1(a,b){
    this.a=a;
    this.b=b;
}

function chain2(a,b,c){
    chain1.call(this,a,b);
    this.c=c;
}
chain2.prototype=Object.create(chain1.prototype);

function chain3(){
    chain2.call(this,10,20,30);
};
chain3.prototype=Object.create(chain2.prototype);
chain3.prototype.constructor=chain3;

var obj1=new chain2(2,3,4);
var obj2=new chain3();