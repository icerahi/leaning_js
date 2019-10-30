//forEach function

var arr=[2,3,1,4,5,3,5,6,34]

//forEach function can get three parameter,it will return(element,indexnumber and original array)

// arr.forEach(function(element,index,arr){
//     console.log('Value is: '+element,"Index is : "+index,"array is : "+arr)
// })


//costom making forEach function 
function loop(arr,callback){
    for (var i =0; i<arr.length;i++){
        callback(arr[i],i);
    }
}
loop(arr,function(element,i){
    console.log('Element is :'+element,'Index is : '+ i);
});