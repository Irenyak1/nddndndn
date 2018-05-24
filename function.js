function add(){
var a,b,c;
a=Number(document.getElementById("firstad").value);
b=Number(document.getElementById("secondad").value);
c= a + b;
document.getElementById("answerad").value= c;
}
function subtract(){
var a,b,c;
a=Number(document.getElementById("firstsubtr").value);
b=Number(document.getElementById("secondsubtr").value);
c= a - b;
document.getElementById("answersubtr").value= c;
}
function multiply(){
var a,b,c;
a=Number(document.getElementById("firstmultip").value);
b=Number(document.getElementById("secondmultip").value);
c= a * b;
document.getElementById("answermultip").value= c;
}
function divide(){
var a,b,c;
a=Number(document.getElementById("firstdivi").value);
b=Number(document.getElementById("seconddivi").value);
c= a / b;
document.getElementById("answerdivi").value= c;
}