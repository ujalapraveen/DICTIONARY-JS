function func1(){
    return new Promise(function(resolve,reject){
        setTimeout(()=>{
            const error=true;
            if(!error){
                console.log("Function:Your promise has been resolved")
                resolve();
            }
            else{
                  console.log("your promise has not been resolved")
                reject("Sorry not fulfilled");
            }

        },2000)  ;
    })

}
func1().then(function(){
    console.log(" ujala:Thanks for resolving")
}).catch(function(error){
    console.log("ujala :Very bad bro")
})