// JavaScript Code
// event listener
document.getElementById("btn").addEventListener("click", Whole)

function Whole(){
// Input{
let CS1 = +document.getElementById("css in").value;
let SP1 = +document.getElementById("sp in").value;
let SP2 = +document.getElementById("sp2 in").value;
let CSS2 = +document.getElementById("css2 in").value;
let PA = +document.getElementById("pa in").value;

// Process
let DIV = 5
let Calc = CS1 + SP1 + SP2 + CSS2 + PA;
let ANS = Calc / DIV;
// Output
document.getElementById("output").innerHTML = ANS;
}