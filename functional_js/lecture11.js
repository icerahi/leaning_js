// another forEach method ,called filter

var arr=[5,6,3,7,2,9,8,4]

//taditional way to filter like another language
//newArr=[]
// for (var i=0;i<arr.length;i++){
//     if(arr[i]%2==0){
//         newArr.push(arr[i]);
//     }
// }
// console.log(newArr);

//but easily we can use filter to do these

var newArr=arr.filter(function(value){
    return value%2==1;
})
console.log(newArr);

//we are creating these filter function in our way
function myFilter(arr,callback){
    var myfilter=[]
    for(var i=0;i<arr.length;i++){
        if (callback(arr[i])){
            myfilter.push(arr[i]);
        }
    }
    return myfilter;
}
var rahi=myFilter(arr,function(element){
    return element%2==1;
})
console.log(rahi);

