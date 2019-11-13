
// 1: Theory
// 2:setup
// 3: Var,Let,Const (done)
// 4: Template String And Multiline String[using backt] (done)
// 5: webpack Dev Server setup (done)
// 6: Arrow Function in Details (done)
// 7: Lexical This |Solved problem 'This' keyword with arrow function(done)
// 8: Enchance Object| New Object Syntax[properties,function declaration](done)
// 9: Destructuring Array And Object Details,also pass in function's parameter(without order)(done)
//10: Default Parameter,Rest and Spread Operator Details(Done)
//11: Module System in Details(done)
//12: Classes in Details(done)
//13: Classes And Inheritance in Details
//14: Promise All you Need to know


//Promise Must need to Learn
const url="http://storyspac.pythonanywhere.com/api/articles/"
fetch(url)
.then(response=>response.json())

.then((body)=>{
   let content=body.map((data)=>{
    let detail=data.detail_url
    let title=data.title 
    let author=data.user
    let publish=data.created
    let body=data.body

     let a=document.createElement('p')
     a.innerHTML=body
 
     let b=document.createElement('h2')
     b.innerHTML=title

     let dd=document.getElementById('content')
     dd.appendChild(b)
     dd.appendChild(a)

     return dd
    })
    // content.forEach((element)=>{
    //      document.getElementById('content').append(element)
    // })
    
})
.catch((err)=>{
    console.log(err);
    
})