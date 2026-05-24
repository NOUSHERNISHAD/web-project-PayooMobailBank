

// add money feature 

const validPin = 1234

document.getElementById('add-money-btn')
.addEventListener('click',function(e){
    e.preventDefault()

    // console.log('add money btn clicked');

    const bank = document.getElementById("bank").value
    const accountNumber = document.getElementById("account-number").value
    const addAmount = parseInt(document.getElementById("add-amount").value)
    const addPin = parseInt(document.getElementById("add-pin").value)
    

    const availableBalance = parseInt(document.getElementById("available-balance").innerText)
    
    // console.log(availableBalance);

    if(accountNumber.length < 11){
        alert("please provide your valid account number")
        return;
    }

    if(addPin !== validPin){
        alert("please provide your valid pin number")
        return;
    }

     const totalNewAvailableBalance = addAmount + availableBalance
     console.log(totalNewAvailableBalance);
     document.getElementById("available-balance").innerText = totalNewAvailableBalance

     
    
})



// cash out feature 
const pinValid = 1235

document.getElementById("withdraw-btn")
.addEventListener("click",function(e){
    e.preventDefault()

    // console.log('ami ase gechi');
    const agentNumber = document.getElementById("agent-number").value

     if(agentNumber.length < 11){
        alert("please provide your valid account number")
        return;
    }
    
    const addPin = parseInt(document.getElementById("pin-number").value)

    if(addPin !== pinValid){
        alert("please provide your valid pin number")
        return;
    }




    const amount = parseInt(document.getElementById("withdraw-amount").value)
    const availableBalance = parseInt(document.getElementById("available-balance").innerText)

    // console.log(amount,availableBalance);
    const totalNewAvailableBalance = availableBalance - amount
    console.log(totalNewAvailableBalance);

    document.getElementById("available-balance").innerText = totalNewAvailableBalance
    
    
    
})

// toggling feature 

document.getElementById("add-button")
.addEventListener("click", function(){
    document.getElementById("cash-out-parent").style.display = "none"
    document.getElementById("add-money-parent").style.display = "block"

})

document.getElementById("cash-out-button")
.addEventListener("click", function(){
    document.getElementById("add-money-parent").style.display = "none"
    document.getElementById("cash-out-parent").style.display = "block"
    

})
