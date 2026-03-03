// Function scope
function scope(){
    var insideVar = 10;
    let insideLet = 20;
    const insideConst = 30;
    console.log(insideVar);
    console.log(insideLet);
    console.log(insideConst);
 }
scope();
// console.log(insideVar);    //Fucntion scoped
// console.log(insideLet);   //block Scoped
// console.log(insideConst);  //block Scoped

function varfunctionScoped(){
    if(true){
        var x = 40;
        let y = 50;
    }
    console.log("x: ", x);
    console.log("y: ", y);
}
varfunctionScoped();
