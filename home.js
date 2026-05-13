document.getElementById('add-money-btn')
.addEventListener('click',function(e){
    e.preventDefault()

    // console.log('add money btn clicked');

    const bank = document.getElementById("bank").value
    const accountNumber = document.getElementById("account-number").value
    const addAmount = parseInt(document.getElementById("add-amount").value)
    const addPin = document.getElementById("add-pin").value
    

    const availableBalance = parseInt(document.getElementById("available-balance").innerText)
    
    // console.log(availableBalance);

     const totalNewAvailableBalance = addAmount + availableBalance
     console.log(totalNewAvailableBalance);
     document.getElementById("available-balance").innerText = totalNewAvailableBalance

     
    
})
