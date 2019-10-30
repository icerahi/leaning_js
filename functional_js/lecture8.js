//closure the most important topic of javascript


//nijesso scrope er baire hote data asle takei bola hoy basically closer
var name='Rahi chowdory'

function Wow(){
    console.log('Hallow  ' + name);// ekhane name variable ta function er scope er bahire theke asche,so eta closer
}
//console.dir(Wow); (to find out the closure)
Wow();


function greet(msg){
    return function(name){
        console.log(msg+' '+name);   //msg(data) ta function scope er bahire theke asche so eta #closer
    }
}

var a=greet('Good Morning')
a('Rahi Chowdory');