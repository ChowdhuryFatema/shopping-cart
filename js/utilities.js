function updateCaseNumber(isIncrease, elementId){
    const inputfield = document.getElementById(elementId);
    const inputValueString = inputfield.value;
    const inputValue = parseInt(inputValueString);

    let newInputNumber;
    if(isIncrease === true){
        newInputNumber = inputValue + 1;
    }
    else{
        newInputNumber = inputValue - 1;
    }
    inputfield.value = newInputNumber;
    return newInputNumber;
}
function updatePhoneTotalPrice(newInputNumber){
    const phoneTotalPrice = newInputNumber * 1219;
    const phonePriceElement = document.getElementById('phone-total-price');
    phonePriceElement.innerText = phoneTotalPrice;

}
function updateCaseTotalPrice(newInputNumber){
    const caseTotalPrice = newInputNumber * 59;
    const caseElement = document.getElementById('case-total-price');
    caseElement.innerText = caseTotalPrice;
}

function getElementValueById(elementId){
    const phoneTotalElement = document.getElementById(elementId);
    const currentphoneTotalString = phoneTotalElement.innerText;
    const currentphoneTotal = parseInt(currentphoneTotalString);
    return currentphoneTotal;
}
function setTextElementById(elementId, value){
    const texElement = document.getElementById(elementId);
    texElement.innerText = value;
}
function calculateSubTotal(){
    // sub total 
    const currentphoneTotal = getElementValueById('phone-total-price');
    const currentCaseTotal = getElementValueById('case-total-price');

    const currentSubTotal = currentphoneTotal + currentCaseTotal;
    const currentSubTotalElement = document.getElementById('sub-total');
    currentSubTotalElement.innerText = currentSubTotal;

    // tex total
    const texAmountString = (currentSubTotal * 0.1).toFixed(2);
    const texAmount = parseFloat(texAmountString);

    setTextElementById('tex-total', texAmount);

    // final total 
    const finalTotal = currentSubTotal + texAmount;
    setTextElementById('final-total', finalTotal);
}