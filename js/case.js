document.getElementById('btn-case-plus').addEventListener('click', function(){
    const newInputNumber = updateCaseNumber(true, 'case-input-field');
    updateCaseTotalPrice(newInputNumber);
    calculateSubTotal()

})
document.getElementById('btn-case-minus').addEventListener('click', function(){
    const newInputNumber = updateCaseNumber(false, 'case-input-field');
    updateCaseTotalPrice(newInputNumber);
    calculateSubTotal()
})