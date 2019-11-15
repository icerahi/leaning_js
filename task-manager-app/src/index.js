import './index.css'

window.onload=function(){
    const taskField=document.querySelector('#taskField') //get taskField value
    const addTask=document.querySelector('#addbtn')       //get button 
    const allTaskParent=document.querySelector('#allTask') // get task row div

    //add functionality on taskField
    taskField.addEventListener('keypress',function(event){
        //if press enter
        if (event.keyCode ===13){
            //check if value not null
            if( event.target.value != ''){
                //if not null then perform these function
            createDiv(allTaskParent,event.target.value)
            // then make taskField blank
                this.value=''
        }
        }
    })
}
//to make easy element creation
function create(name){
    return document.createElement(name)
}
// get parrent and task value
function createDiv(parent,task){
    //create a div col and add class
    let col=create('div')
    col.className='col-sm-3'
    
    let singleTask=create('div') //reate another div
    singleTask.className='single-task'

    let singleTaskP=create('p')  //create a paragram element
    singleTaskP.innerHTML=task   //set paragram innerhtml as task value
   
    let span=create('span')    //create a span for close icon
    span.innerHTML=`<i class='fas fa-times-circle'></i>`
    span.style.float='right'

    //span close button functionality
    span.addEventListener('click',function(event){
        parent.removeChild(col)
    })

    //create task controlar in the single task div

    let taskcontroler=createtaskcontroler(singleTask)   //will call this function which parameter will 'singleTask'
    taskcontroler.style.visibility='hidden'      //make defult taskcontroler visibility as 'hidden'
    singleTask.appendChild(taskcontroler)        //add these task controller with single 'singleTask'

    singleTask.onmouseenter=function(){
        taskcontroler.style.visibility='visible'  // onmouseenter taskcontroller will visible
       
        
    }
    singleTask.onmouseleave=function(){
        taskcontroler.style.visibility='hidden'   //onmouseleave taskcontroller will hidden
    }
 
    singleTask.appendChild(span)               //add span as child of single Task

    singleTask.appendChild(singleTaskP)          //add paragraph as child of single Task
    col.appendChild(singleTask)                    //add singleTask as child of col (div)
    parent.appendChild(col)                         // add col as child of main Alltasklist

}
 
//creating taskcontroller it will get it's singletask as parameter
function createtaskcontroler(parent){
   let controlPanel=create('div')       //create a div under controner
   controlPanel.className='task-control-panel d-flex align-items-center'   //add class
   let colorpalet=CreateColorPalet(parent)          //call a function for create Colorpaler ,gives parent as parameter
   controlPanel.appendChild(colorpalet)        //add color palet as control panel child

   let editpanel=createEditBtn(parent)     // edit panel creation,calling a function that will get parameter parent
 
   controlPanel.appendChild(editpanel)     //add control panel with edit panel

   return controlPanel   //it will return control panel

}

//edit option functionality
function createEditBtn(parent){
    let span=create('span');             //create span for edit icon
    span.innerHTML=`<i class='fas fa-edit'></i>`
    span.className='ml-auto mr-2'
    span.style.color='#fff'
    span.style.cursor='pointer'
    parent.appendChild(span)    //add edit icon with it's parent singleTask

    span.addEventListener('click',function(){   //editing functionality
        let p=parent.querySelector('p')         //get p from it's parent's p (singletask paragram(task))
        let textArea=create('textarea')
        textArea.className='inner-textarea'
        textArea.style.width=parent.offsetWidth+'px'    //set height width same as parent
        textArea.style.height=parent.offsetHeight+'px'
        textArea.innerHTML=p.innerHTML                     //textarea 'value' will get's from p


        textArea.addEventListener('keypress',(event)=>{ 
            if (event.keyCode === 13){       // at the edition mode when press enter
                let value=event.target.value     //get text area value

                event.stopPropagation()        //for avoid event complexity
                if (value){                   //if value not null
                    p.innerHTML=value         // p's value with text area value
                    parent.removeChild(textArea)  //when editing done remove textarea

                }else{
                    alert("You can't save empty")  //if value null show alert
                }
              
            }
        })
        parent.appendChild(textArea) // add text area with his parent element (singleTask)
    })

    return span      //return edit button

}


//creating color palet ,get parent parameter from (singleTask)
function CreateColorPalet(parent){
    let colors=['yellow','red','green','blue','gray']    //color lsit 

    let colorDiv=create('div')     //create a color div
    colorDiv.className='d-flex'

    colors.forEach((color)=>{
        let div=create('div')    //create color circle div
        div.className='color-circle ml-1 text-align-center'
        div.style.background=color
        div.addEventListener('click',function(){  // if color circle div click then parent(singleTask) background color will change
            parent.style.background=color 
        })
        colorDiv.appendChild(div)   //finally add the color circle div to Color main div
    })
    return colorDiv  // then return the whole colorDiv after creation

}
