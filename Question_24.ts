/*More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try
more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array*/


var a="Ali";
console.log(a=="Ali");

var b="Rida";
var b1=(b=="rida")? "True":"False";
console.log(b1);

var c=20;
console.log(c==20);

let d:number=100;
let d1:number=101;

console.log(d==100&&d1==104);


let e:number=100;
let e1:number=101;

console.log(e==100||e1==104);

let ary=[1,2,3,4];
let ary1=Array.isArray(ary);
console.log(ary1);

export{}