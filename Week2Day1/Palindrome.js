let name="madam";
let splitName=name.split("");
let reverse="";

for(let i=splitName.length-1;i>=0;i--){
    reverse=reverse+splitName[i];
}
if(name===reverse){
    console.log("Palindrome");
}else{
    console.log("Not palindrome");
}