
function taxCalculation() {
    // const nameInput = getInputNumber("tax-name-input");
    // console.log(nameInput);
    const invest = getInputNumber("tax-actual-invest");
    const income = getInputNumber("tax-total-income");
    const taxableIncome = getInputNumber("tax-annual-taxable-income");
    const allowableInvestment = getInputNumber("tax-maximum-allowable-investment");
    // console.log(allowableInvestment);

    const minValue = Math.min(invest, taxableIncome * .25, 1500000);

    document.getElementById("tax-maximum-allowable-investment").value = minValue;
    document.getElementById("output-actual-invest-unit-fund").value = invest;

    const outputSaveTaxUnitFund = getInputNumber("output-save-tax-unit-fund");
    console.log(outputSaveTaxUnitFund,"kasdf");
    const outputSaveTaxDPS = getInputNumber("output-save-tax-dps");

    const outputActualInvestUnitFund = getInputNumber("output-actual-invest-unit-fund");
    const outputActualInvestDPS = getInputNumber("output-actual-invest-dps");

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
        saveTaxUnit = outputMaximumInvestUnitFund * .15;
        saveTaxDPS = outputMaximumInvestDPS * .15;
        console.log("else", saveTaxUnit);
        document.getElementById("output-save-tax-unit-fund").value = saveTaxUnit;
        document.getElementById("output-save-tax-dps").value = saveTaxDPS;
    }

    // const outputReturnTaxUnitFund = Math.ceil((saveTaxUnit/outputActualInvestUnitFund)*10);
    // const outputReturnTaxDPS = Math.ceil((saveTaxDPS / outputActualInvestUnitFund)*10);
    const divideTaxUnit = (saveTaxUnit / outputActualInvestUnitFund);
    const divideTaxDPS = (saveTaxDPS / outputActualInvestUnitFund);
    const multiplyTaxUnit = divideTaxUnit * 100;
    const multiplyTaxDPS = divideTaxDPS * 100;
    const calculateTaxUnit = Math.ceil(multiplyTaxUnit);
    const calculateTaxDPS = Math.ceil(multiplyTaxDPS);
    // console.log(Math.ceil(a*10), Math.ceil(b*10));
    console.log(calculateTaxUnit, calculateTaxDPS);
    document.getElementById("output-return-tax-unit-fund").value =calculateTaxUnit+"%";
    document.getElementById("output-return-tax-dps").value =calculateTaxDPS+"%";

    document.getElementById("max-allowable-investment").innerHTML = outputMaximumInvestUnitFund; 
    document.getElementById("ekus-unit-fund").innerHTML = saveTaxUnit; 
    document.getElementById("implicitly-earn").innerHTML = calculateTaxUnit+"%"; 
    


}

// function calculate(params) {
    
// }
function getInputNumber(id) {
    const inputNumber = document.getElementById(id).value;
    const parseInputNumber = parseFloat(inputNumber);
    return parseInputNumber;
}

function taxReset() {
    document.getElementById("tax-name-input").value = ""; 
    document.getElementById("tax-actual-invest").value = ""; 
    document.getElementById("tax-total-income").value = ""; 
    document.getElementById("tax-annual-taxable-income").value = ""; 
}