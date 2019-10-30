// Reduce, to do operation in whole array sum

var arr=[1,2,3,4,5,6,7,8,9,10]
// if we want to get sum of these array in genaral way

var sum=0;
for(var i=0;i<arr.length;i++){
    sum+=arr[i]
}
console.log(sum);


// js programmer's are smart they use reduce for these
var rahi=arr.reduce(function(a,b){
    return a+b; // also we can do (-,+,*,/)
})
console.log(rahi);
