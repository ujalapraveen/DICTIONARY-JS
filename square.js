var readlineSync=require("readline-sync")
var number=readlineSync.questionInt("enter a number=")
d={}
for(var i=0;i<number;i++){
    d[i]=i**2
}
console.log(d)





// var dic={}
// var i=0;
// while(i<=5){
//     dic[i]=i*i
//     i++

// }
// console.log(dic)

