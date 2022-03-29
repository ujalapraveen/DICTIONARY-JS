function show(){
    console.log("I am show function");
}
function geeky(callback){
    callback()
}

geeky(show);
console.log("End")