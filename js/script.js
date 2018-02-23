/*eslint-env browser*/

var monthlyRate;
var months;
var futureValue;
var monthlyInterest;
var i;
var rate;
var investment;
var years;
var output;
var Calculate;

investment =    window.document.getElementById("investment");
rate =          window.document.getElementById("interest");
years =         window.document.getElementById("yrs");
output =        window.document.getElementById("futurevalue");
Calculate =     window.document.getElementById("calculate");

//Calculate the future Value

function calculateInvestment(investment, rate, years) {
    "use strict";
    monthlyRate = rate / 12 / 100;
    months =      years * 12;
    futureValue =  investment;
    
    for (i = 1; i < months; i += 1) {
        monthlyInterest = futureValue * monthlyRate;
        futureValue += monthlyInterest;
    }
    return futureValue;
    
}

Calculate.addEventListener("click", function () {
"use strict";
investment =    parseFloat(investment.value);
rate =          parseFloat(rate.value);
years =         parseFloat(years.value, 10);

futureValue =  calculateInvestment(investment, rate, years);
    
output.innerHTML = "Future Value: $" + Math.round(futureValue)+".00";

});