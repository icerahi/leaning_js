// return statement of function (genaral return output)

// function name(firstName,lastName,gender){
//     var output;
//     if (gender==='male'){
//         output='Mr. '+firstName+lastName

//     }
//     else if (gender==='female'){
//         output='Ms. '+firstName+lastName
//     }

//     return output
// }
// var fullname=name('imran','hasan','male');
// console.log(fullname);


// we can return a large block of anything, like object or function

function example(){
    return {
        name:'Imran Hasan',
        skill:['Python','JavaScript'],

        print:function(){
            console.log('name: '+this.name+'\nskills: '+this.skill);
        }
    }
}
var obj=example();
obj.print();