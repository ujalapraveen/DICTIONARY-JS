// var myHome = {
//     "name": "Mannat",
//     "location":"Mumbai",
//     "Colour":"black",
//     "owner":"sharukh khan",
//     "neighbours": ["everything!"]
//   };
// // myHome.name="ujala parveen"
// myHome["name"]="ujala parveen" 
// myHome.middlename="Ashma"
// myHome["address"]="salarpur"
// delete myHome.middlename
// console.log(myHome)




// function checkObj(obj, checkProp) {
//   const myObj ={
//     gift: "pony",
//     pet: "kittten",
//     bed: "sleigh",

//   }
//   // Only change code below this line
//   if (obj.hasOwnProperty(checkProp)) {
//     return obj[checkProp];
//   } else {
//     return "Not Found";
//   }
//   // Only change code above this line
// }


// function multiplyAll(arr) {
//   let product = 1;
//   for(let i=0;i<arr.length;i++){
//     for(let j=0;j<arr[i].length;j++){
//       product*=arr[i][j]

//     }
//   }
//   // Only change code below this line

//   // Only change code above this line
//   return product;
// }

// var product=(multiplyAll([[1, 2], [3, 4], [5, 6, 7]]));
// console.log(product)



// def even(num):
//     if num>9:
//         i=0
//         s=0
//         while i<num:
//             rem=num%10
//             s=s+rem
//             num=num//10
//         return even(s)
//     else:
//         if num%2==0:
//             print("very even",num)
//         else:
//             print("not even",num)
// even(num=int(input("enter a num =")))



// function even(num){
//   if(num>9){
//     var i=0;
//     var sum=0;
//     while(i<num){
//       rem=num%10
//       sum=sum+rem
//       Math.floor(10)
//     return even(sum)

//   }

//   }
//   else{
//     if(num%2==0){
//       console.log("very even",num)
//     }
//     else{
//       console.log("not even",num)
//     }
//   }
 

// }
// var readlineSync=require("readline-sync")
// var num=readlineSync.questionInt(" enter a num =")
// (even(num))


// var numbers=[50, 40, 23, 70, 56, 12, 5, 10, 7,19,43]
// var i=numbers.length-1
// var c=[]
// while(i>=0){
//     c.push(numbers[i])
//     i=i-1
   
// }
// console.log(c);



var myName={name:"ujala",class:12,}
myName2=myName["name"]
console.log(myName2)
