// JavaScript Code

// Input
let CS1 = +prompt(`Your Client-Side Scripting 1 grade:`);
let SP1 = +prompt(`Your Structured Programming 1 grade:`); 
let SP2 = +prompt(`Your Structured Programming 2 grade:`); 
let CSS2 = +prompt(`Your Client-Side Scripting 2 grade:`); 
let PA = +prompt(`Your Project A grade:`); 

// Process
let DIV = 5
let Calc = CS1 + SP1 + SP2 + CSS2 + PA;
let ANS = Calc / DIV;
// Output
alert(`Your Grade is ${ANS}.`);