// My Original, working code

/*
let loanAmount = document.querySelector('#amount');
let interestRate = document.querySelector('#interest_rate');
let months = document.querySelector('#months');
let payment = document.querySelector('#payment');

interestRate.setAttribute('type', 'number');

function computeLoan() {
    let loanAmountValue = Number(loanAmount.value);
    let interestRateValue = Number(interestRate.value/100);
    let monthsValue = Number(months.value);
    function numberWithCommas() {
        let finalAmount = ((loanAmountValue + (loanAmountValue * interestRateValue)) / monthsValue).toFixed(2);
        return finalAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };
    payment.textContent = 'Monthy Payment = $' + numberWithCommas();
};
*/

// Code after improvements and reflection (See README.md)
interestRate.setAttribute('type', 'number');

function computeLoan() {
    let loanAmount = Number(document.querySelector('#amount').value);
    let interestRate = Number(document.querySelector('#interest_rate').value/100);
    let months = Number(document.querySelector('#months').value);
    let payment = document.querySelector('#payment');
    let finalAmount = ((loanAmount + (loanAmount * interestRate)) / months).toFixed(2);
    finalAmount = finalAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    payment.textContent = 'Monthy Payment = $' + finalAmount;
};



