let username;
document.getElementById("b1").onclick=function(){
    username=document.getElementById("name").value;
    document.getElementById("h1").textContent=`Hello ${username}`
}
const decb1=document.getElementById("decb1");
const reb2=document.getElementById("reb2");
const incb3=document.getElementById("incb3");
const countLabel=document.getElementById("countLabel");
let count=0;
incb3.onclick=function(){
    count++;
    countLabel.textContent=count;
}
decb1.onclick=function(){
    count--;
    countLabel.textContent=count;
}
reb2.onclick=function(){
    count=0;
    countLabel.textContent=count;
}
