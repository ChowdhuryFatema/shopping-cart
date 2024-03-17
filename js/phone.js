document.getElementById('btn-phone-plus').addEventListener('click', function(){
    const newInputNumber = updateCaseNumber(true, 'phone-input-field');
    updatePhoneTotalPrice(newInputNumber)
    calculateSubTotal()
})
document.getElementById('btn-phone-minus').addEventListener('click', function(){
    const newInputNumber = updateCaseNumber(false, 'phone-input-field');
    updatePhoneTotalPrice(newInputNumber)
    calculateSubTotal()
})