 // SOrting


 var rahi=[23,12,32,11,4,34,53,33]

 rahi.sort(function(a,b){
     return a-b;            //array sorting
 })
 console.log(rahi);

 var data=[
     {name:'abul',age:18},{name:'kashem',age:17},{name:'joy',age:19},{name:'shoan',age:11}
 ]

 // object sorting by age integer balue
 data.sort(function(a,b){
     return a.age-b.age; 
 })
 console.log(data);

 //object sorting by name order
 data.sort(function(a,b){
     if (a.name>b.name){
         return 1;
     }else if(a.name<b.name){
         return -1;
     }else{
         return 0;
     }
 })
 console.log(data);
 