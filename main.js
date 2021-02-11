
document.getElementById("calculate").addEventListener("click", function () {
    // const nameInput = getInputNumber("tax-name-input");
    // console.log(nameInput);
    const invest = getInputNumber("tax-actual-invest");
    console.log(invest);
    const income = getInputNumber("tax-total-income");
    console.log(income);
    const taxableIncome = getInputNumber("tax-annual-taxable-income");
    console.log(taxableIncome);
    const allowableInvestment = getInputNumber("tax-maximum-allowable-investment");
    // console.log(allowableInvestment);

    const minValue = Math.min(invest, taxableIncome * .25, 1500000);
    console.log(minValue);

    document.getElementById("tax-maximum-allowable-investment").value = minValue;

    // const outputActualInvestUnitFund = getInputNumber("output-actual-invest-unit-fund");
    // const outputActualInvestDPS = getInputNumber("output-actual-invest-dps");
    // const outputMaximumInvestUnitFund = getInputNumber("output-maximum-investment-unit-fund");
    // const outputMaximumInvestDPS = getInputNumber("output-maximum-investment-dps");
    // const outputSaveTaxUnitFund = getInputNumber("output-save-tax-unit-fund");
    // const outputSaveTaxDPS = getInputNumber("output-save-tax-dps");
    // const outputReturnTaxUnitFund = getInputNumber("output-return-tax-unit-fund");
    // const outputReturnTaxDPS = getInputNumber("output-return-tax-dps");

    document.getElementById("output-actual-invest-unit-fund").value = invest;

    const outputActualInvestUnitFund = getInputNumber("output-actual-invest-unit-fund");
    document.getElementById("output-actual-invest-dps").value = outputActualInvestUnitFund;
    document.getElementById("output-maximum-investment-unit-fund").value = minValue;
    let saveTaxUnit = 0;
    let saveTaxDPS = 0;
    const outputMaximumInvestUnitFund = getInputNumber("output-maximum-investment-unit-fund");
    const outputMaximumInvestDPS = getInputNumber("output-maximum-investment-dps");
  
    if (income > 1500000) {
        saveTaxUnit = outputMaximumInvestUnitFund * .1;
        saveTaxDPS = outputMaximumInvestDPS * .1;
        console.log("if", saveTax);
        document.getElementById("output-save-tax-unit-fund").value = saveTax;
        document.getElementById("output-save-tax-dps").value = saveTaxDPS;
    } else {
        saveTax = outputMaximumInvestUnitFund * .15;
        saveTaxDPS = outputMaximumInvestDPS * .15;
        console.log("else", saveTax);
        document.getElementById("output-save-tax-unit-fund").value = saveTax;
        document.getElementById("output-save-tax-dps").value = saveTaxDPS;
    }

})

// function calculate(params) {
    
// }
function getInputNumber(id) {
    const inputNumber = document.getElementById(id).value;
    const parseInputNumber = parseFloat(inputNumber);
    // console.log(typeof( parseInputNumber));
    return parseInputNumber;
}