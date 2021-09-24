var billref=document.querySelector('#bill-amount');
var cashref=document.querySelector('#cash-amount');
var btnref=document.querySelector('#btn-primary');


function myScript(){
var billAmount=billref.value;
var cashAmount=cashref.value;

console.log(billAmount);
console.log(cashAmount);
}



btnref.addEventListener('click',myScript);
