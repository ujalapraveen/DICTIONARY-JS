
var readlineSync=require("readline-sync")

var dict={}
for(let i=0;i<5;i++){
    var student=readlineSync.question("enter a students=")
    var marks=readlineSync.questionInt("enter a marks")
    dict[student]=marks


}
console.log(dict)