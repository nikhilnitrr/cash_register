var billref=document.querySelector('#bill-amount');
var cashref=document.querySelector('#cash-amount');
var btnref=document.querySelector('#btn-primary');
var error=document.querySelector('#error-message');


function myScript()
{
var billAmount=parseInt(billref.value);
var cashAmount=parseInt(cashref.value);

    if(billAmount<0 || cashAmount<0)
    {
        error.innerText="Invalid input";
    }

    else if(cashAmount<billAmount)
    {
        error.innerText="Do you want to get beaten?";
    }
}



btnref.addEventListener('click',myScript);
