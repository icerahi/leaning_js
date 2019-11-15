//getElement by Id/class/tagname
//querySelector/querySelectorAll
// make querySelector function to work more shortly
// give style
// working with Events
// creating and deleting DOM Element

 let nameField=document.querySelector('#nameField')
 let count = document.querySelector('#count')
 let ul =document.querySelector('#nameList')
 
 nameField.addEventListener('keypress',(event)=>{
    count.innerHTML=nameField.value.length

    if (event.keyCode===13){
        let name=event.target.value
        if (name!=''){
            createli(ul,name) // function call createli
            event.target.value=''
        }
    }
     
 })

 function createli(ul,name){
     let li=document.createElement('li')
     li.className='list-group-item'
     li.innerHTML=name 

     let span=document.createElement('span')
     span.innerHTML='X'
     span.style.cssFloat="right"
     span.style.color='red'
     span.style.cursor='pointer'
     
     span.addEventListener('click',(event)=>{
         ul.removeChild(li)
     })

     li.appendChild(span)
     ul.appendChild(li)

 }




