const billInput = document.getElementById("billTotalInput");
const tipInput = document.getElementById("tipInput");
const numberOfPeopleDiv = document.getElementById("numberOfPeople");
const perPersonTotalDiv = document.getElementById("perPersonTotal");

let numberOfPeople = Number(numberOfPeopleDiv.innerText);

function calculateBill() {
    const bill = Number(billInput.value);
    const tipPercentage = Number(tipInput.value) / 100;
    const tipAmount = bill * tipPercentage;
    const total = tipAmount + bill;
    const perPersonTotal = total / numberOfPeople;
    perPersonTotalDiv.innerHTML = "₹" + perPersonTotal.toFixed(2).toLocaleString('en-Us');
}

function increasePeople() {
    numberOfPeople += 1;
    numberOfPeopleDiv.innerText = numberOfPeople
    calculateBill();
}



function decreasePeople() {
    if(numberOfPeople <=1 ){
        return
    }
    numberOfPeople -= 1;
    numberOfPeopleDiv.innerText = numberOfPeople
    calculateBill();
}




































