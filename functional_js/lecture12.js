// most important mojar function Map function

var arr=[1,2,3,4,5,6,7,8,9,10]

//genaral procidure process
var New=[]
for(var i=0;i<arr.length;i++){
    New.push(arr[i]*2);
}
console.log(New);

//using map function to change value of array
var rahi=arr.map(function(value){
    return value*2;
});
console.log(rahi);

//our own costom map function
function MyMap(arr,func){
    var Map=[]
    for(var i=0;i<arr.length;i++){
        Map.push(func(arr[i]));
    }
    return Map;
}

var tut=MyMap(arr,function(value){
    return value*2;
})
console.log(tut);

