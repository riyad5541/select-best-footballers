const cardArray = [];

function disply(playerList){
   const tableBody =document.getElementById('player-table-list');
   tableBody.innerHTML = "";

   for(let i = 0; i < playerList.length; i++){
    const playerNameShow = cardArray[i].playerName;
    const tr = document.createElement("tr");
    tr.innerHTML = `
     
    <th>${i+1}</th>
    <td>${playerNameShow}</td>
    
    `;
    tableBody.appendChild(tr);
   }
   
}

function selectV(element){
    const playerName = element.parentNode.parentNode.children[0].innerText ;
    const playerObj = {
        playerName: playerName
    }

    if (cardArray.length < 5){
        cardArray.push(playerObj);

        element.disable = true;
        element.style.background = "grey";
    }
    else{
        alert('you can select only five player')
    }
    disply(cardArray);
}

document.getElementById('calculate').addEventListener('click',function(){
   const calculateField = document.getElementById('input-price');
   const calculateAmmountString = calculateField.value;
   const newCalculationAmount = parseFloat(calculateAmmountString);
   

   const playerExpenses = newCalculationAmount * cardArray.length;

   const findPlayerExpenses = document.getElementById('player-expenses');
   const previousPlayerExpensesString = findPlayerExpenses.innerText; 
   const previousPlayerExpenses = parseFloat
   (previousPlayerExpensesString);
   const newPlayerExpenses = previousPlayerExpenses + playerExpenses;
   findPlayerExpenses.innerText = newPlayerExpenses;
})


document.getElementById('calculate-total').addEventListener('click',function(){
    const managerInputField = document.getElementById('manager-input');
    const managerInputFieldString = managerInputField.value;
    const newManagerAmount = parseFloat(managerInputFieldString);

    const coachInputField = document.getElementById('coach-input');
    const coachInputFieldString = coachInputField.value;
    const newCoachAmount = parseFloat(coachInputFieldString);

    const findPlayerExpenses = document.getElementById('player-expenses');
    const previousPlayerExpensesString = findPlayerExpenses.innerText; 
    const previousPlayerExpenses = parseFloat
    (previousPlayerExpensesString);

    const totalCost = document.getElementById('total-cost');
    const previousTotalCostString = totalCost.innerText;
    const previousTotalCost = parseFloat(previousTotalCostString);

    const total = newManagerAmount + newCoachAmount + previousPlayerExpenses;
    totalCost.innerText = total;
})