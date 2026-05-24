

const validPin = 1234


// function to get input value 

function getInputvalueNumber (id){
    const inputFieldValueNumber = parseInt(document.getElementById(id).value)
    return inputFieldValueNumber;
}


// function getInputValueNumber (id){
//     const inputField = document.getElementById(id)
//     const inputFieldValue = inputField.value
//     const inputFieldValueNumber = parseInt(inputFieldValue)
//     return inputFieldValueNumber
// }




function getInputvalue(id){
    const inputFieldValue = document.getElementById(id).value
    return inputFieldValue;
}
// function getInputvalue(id){
//     const inputField = document.getElementById(id)
//     const inputFieldValue = inputField.value
//     return inputFieldValue;
// }


function getInputInnerText(id){
    const inputFieldInnerText = parseInt(document.getElementById(id).innerText)
    return inputFieldInnerText;
}


// function innertext 
function setInnerText(value){
    const availableBalanceElement = document.getElementById("available-balance").innerText = value
}


// add money feature 

document.getElementById('add-money-btn')
.addEventListener('click',function(e){
    e.preventDefault()

    // console.log('add money btn clicked');

    // const bank = document.getElementById("bank").value;
    const bank = getInputvalue("bank");
    const accountNumber = document.getElementById("account-number").value

    // const addAmount = parseInt(document.getElementById("add-amount").value)
    const addAmount = getInputvalueNumber("add-amount")

    // const addPin = parseInt(document.getElementById("add-pin").value)
    const addPin = getInputvalueNumber("add-pin")
    

    // const availableBalance = parseInt(document.getElementById("available-balance").innerText)
    const availableBalance = getInputInnerText("available-balance")
    
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
    //  console.log(totalNewAvailableBalance);
    //  document.getElementById("available-balance").innerText = totalNewAvailableBalance
      setInnerText(totalNewAvailableBalance)

     
    
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




    // const amount = parseInt(document.getElementById("withdraw-amount").value)
    const amount = getInputvalueNumber("withdraw-amount")

    // const availableBalance = parseInt(document.getElementById("available-balance").innerText)
    const availableBalance = getInputInnerText("available-balance")

    // console.log(amount,availableBalance);
    const totalNewAvailableBalance = availableBalance - amount
    console.log(totalNewAvailableBalance);

    // document.getElementById("available-balance").innerText = totalNewAvailableBalance
    setInnerText(totalNewAvailableBalance)
    
    
    
})

// toggling feature 

// document.getElementById("add-button")
// .addEventListener("click", function(){
//     document.getElementById("cash-out-parent").style.display = "none"
//     document.getElementById("transfer-money-parent").style.display = "none"
//     document.getElementById("add-money-parent").style.display = "block"

// })

// document.getElementById("cash-out-button")
// .addEventListener("click", function(){
//     document.getElementById("add-money-parent").style.display = "none"
//      document.getElementById("transfer-money-parent").style.display = "none"
//     document.getElementById("cash-out-parent").style.display = "block"
    

// })

// document.getElementById("transfer-button")
// .addEventListener("click", function(){
//     document.getElementById("transfer-money-parent").style.display = "block"
//     document.getElementById("add-money-parent").style.display = "none"
//     document.getElementById("cash-out-parent").style.display = "none"
    

// })


// reusable code/shared code: 

document.getElementById("add-button")
.addEventListener("click", function(){
   const forms = document.getElementsByClassName("form")
   for(const form of forms){
    form.style.display = "none"
   }
   document.getElementById("add-money-parent").style.display = "block"

})

document.getElementById("cash-out-button")
.addEventListener("click", function(){
    const forms = document.getElementsByClassName("form")
   for(const form of forms){
    form.style.display = "none"
   }
   document.getElementById("cash-out-parent").style.display = "block"
})
document.getElementById("transfer-button")
.addEventListener("click", function(){
   const forms = document.getElementsByClassName("form")
   for(const form of forms){
    form.style.display = "none"
   }
   document.getElementById("transfer-money-parent").style.display = "block"

})
document.getElementById("get-bonus-button")
.addEventListener("click", function(){
   const forms = document.getElementsByClassName("form")
   for(const form of forms){
    form.style.display = "none"
   }
   document.getElementById("get-bonus-parent").style.display = "block"

})
document.getElementById("pay-bill-button")
.addEventListener("click", function(){
   const forms = document.getElementsByClassName("form")
   for(const form of forms){
    form.style.display = "none"
   }
   document.getElementById("pay-bill-parent").style.display = "block"

})
document.getElementById("transactions-button")
.addEventListener("click", function(){
   const forms = document.getElementsByClassName("form")
   for(const form of forms){
    form.style.display = "none"
   }
   document.getElementById("transactions-parent").style.display = "block"

})
