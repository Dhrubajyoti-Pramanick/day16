let a=[1,2,3,4,5,6];
let b=['+','-','*','/'];
num1=a.shift();
num2=a.shift();
console.log(num1);
console.log(num2);
console.log(a);
let op;
op=b.shift();
op=b.shift();
op=b.shift();
op=b.shift();
if(op=='+') {
    console.log(num1+num2);
}
else if(op=='-') {
    console.log(num1-num2);
}
else if(op=='/') {
    console.log(num1/num2);
}
 else if(op=='*') {
    console.log(num1*num2);
}