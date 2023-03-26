// document.getElementById('btn-deposit').addEventListener('click', function () {
//     // input section
//     const newdiposit = document.getElementById('text');
//     const newdipositstring = newdiposit.value;
//     const newdiposits = parseFloat(newdipositstring);
//     // output section
//     const olddiposit = document.getElementById('add-deposit');
//     const olddipositstring = olddiposit.innerText;
//     const olddiposits = parseFloat(olddipositstring);
//     // diposit add section
//     const totaldiposit = newdiposits + olddiposits;
//     olddiposit.innerText = totaldiposit;
//     // balance add section
//     const oldbalance = document.getElementById('add-balance');
//     const oldbalancestring = oldbalance.innerText;
//     const oldbalances = parseFloat(oldbalancestring);
//     const totalbalance = oldbalances + newdiposits;
//     oldbalance.innerText = totalbalance;
//     // value faka kora
//     newdiposit.value = ''

// })
// document.getElementById('btn-withdeaw').addEventListener('click', function () {
//     // input section
//     const newwithdraw = document.getElementById('withdraw');
//     const newwithdrawstring = newwithdraw.value;
//     const newwithdraws = parseFloat(newwithdrawstring);
//     // validation er jonno kora
//     newwithdraw.value = '';
//     if (isNaN(newwithdraws)) {
//         alert('please provide number');
//         return;
//     }

//     // output section
//     const oldwithdraw = document.getElementById('add-withdraw');
//     const oldwithdrawstring = oldwithdraw.innerText;
//     const oldwithdraws = parseFloat(oldwithdrawstring);
//     // validation et jonno

//     if (newwithdraws > oldwithdraw) {
//         alert('tor baper bank a to taka nai');
//         return;
//     }
//     // withdraw add section
//     const totalwithdraw = newwithdraws + oldwithdraws;
//     oldwithdraw.innerText = totalwithdraw;
//     // ballence minus section
//     const oldbalance = document.getElementById('add-balance');
//     const oldbalancestring = oldbalance.innerText;
//     const oldbalances = parseFloat(oldbalancestring);
//     const finalbalance = oldbalances - newwithdraws;
//     oldbalance.innerText = finalbalance;






// })



document.getElementById('btn-deposit').addEventListener('click', function () {
    // input section
    const newdiposit = document.getElementById('text');
    const newdipositstring = newdiposit.value;
    const newdiposits = parseFloat(newdipositstring);
    // output section
    const olddiposit = document.getElementById('add-deposit');
    const olddipositstring = olddiposit.innerText;
    const olddiposits = parseFloat(olddipositstring);
    // add diposit section
    const totaldiposit = newdiposits + olddiposits
    olddiposit.innerText = totaldiposit;


    // balance section 
    const oldbalance = document.getElementById('add-balance');
    const oldbalancestring = oldbalance.innerText;
    const oldbalances = parseFloat(oldbalancestring)
    const totalbalance = oldbalances + newdiposits;
    oldbalance.innerText = totalbalance;
    // withdraw section

    newdiposit.value = '';
})