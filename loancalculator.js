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


