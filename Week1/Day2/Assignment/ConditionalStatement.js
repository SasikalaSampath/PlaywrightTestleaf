function launchBrowser(){
if(browserName=="Chrome"){
    console.log("Chrome browser is running sucessfully");
}else{
    console.log("Not a chrome browser");
}
}
function runTests(testType){
switch(testType){
    case "Smoke":
        console.log("Smoke");
        break;
   case "Sanity":
        console.log("Sanity");
        break;
   case "Regression":
        console.log("Regression");
        break;
    default:
        console.log("no testType");
}
}
let browserName="Chrome";
let testType="Smoke";
launchBrowser(browserName);
runTests(testType);