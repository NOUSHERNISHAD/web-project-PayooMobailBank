

const validPin = 1234
const transactionData = []


// function to get input value 

function getInputvalueNumber(id) {
    const inputFieldValueNumber = parseInt(document.getElementById(id).value)
    return inputFieldValueNumber;
}


// function getInputValueNumber (id){
//     const inputField = document.getElementById(id)
//     const inputFieldValue = inputField.value
//     const inputFieldValueNumber = parseInt(inputFieldValue)
//     return inputFieldValueNumber
// }




function getInputvalue(id) {
    const inputFieldValue = document.getElementById(id).value
    return inputFieldValue;
}
// function getInputvalue(id){
//     const inputField = document.getElementById(id)
//     const inputFieldValue = inputField.value
//     return inputFieldValue;
// }


function getInputInnerText(id) {
    const inputFieldInnerText = parseInt(document.getElementById(id).innerText)
    return inputFieldInnerText;
}


// function innertext 
function setInnerText(value) {
    const availableBalanceElement = document.getElementById("available-balance").innerText = value
}



// function to toggle

// function handleToggle(id) {

//     const forms = document.getElementsByClassName("form")
//     for (const form of forms) {
//         form.style.display = "none"
//     }
//     document.getElementById(id).style.display = "block"


// }




// add money feature 

document.getElementById('add-money-btn')
    .addEventListener('click', function (e) {
        e.preventDefault()

        // console.log('add money btn clicked');

        // const bank = document.getElementById("bank").value;
        const bank = getInputvalue("bank");
        const accountNumber = document.getElementById("account-number").value

        // const addAmount = parseInt(document.getElementById("add-amount").value)
        const addAmount = getInputvalueNumber("add-amount")

        if(addAmount<=0){
            alert("invalid money")
            return;
        }

        // const addPin = parseInt(document.getElementById("add-pin").value)
        const addPin = getInputvalueNumber("add-pin")


        // const availableBalance = parseInt(document.getElementById("available-balance").innerText)
        const availableBalance = getInputInnerText("available-balance")

        // console.log(availableBalance);

        if (accountNumber.length < 11) {
            alert("please provide your valid account number")
            return;
        }

        if (addPin !== validPin) {
            alert("please provide your valid pin number")
            return;
        }

        const totalNewAvailableBalance = addAmount + availableBalance
        //  console.log(totalNewAvailableBalance);
        //  document.getElementById("available-balance").innerText = totalNewAvailableBalance
        setInnerText(totalNewAvailableBalance)

        
        const data = {
            name: "Add Money",
            date : new Date().toLocaleTimeString()
        }
        transactionData.push(data)

    })



// cash out feature 

const pinValid = 1235

document.getElementById("withdraw-btn")
    .addEventListener("click", function (e) {
        e.preventDefault()

        // console.log('ami ase gechi');
        const agentNumber = document.getElementById("agent-number").value

        if (agentNumber.length < 11) {
            alert("please provide your valid account number")
            return;
        }

        const addPin = parseInt(document.getElementById("pin-number").value)

        if (addPin !== pinValid) {
            alert("please provide your valid pin number")
            return;
        }




        // const amount = parseInt(document.getElementById("withdraw-amount").value)
        const amount = getInputvalueNumber("withdraw-amount")

        // const availableBalance = parseInt(document.getElementById("available-balance").innerText)
        const availableBalance = getInputInnerText("available-balance")

        if(amount<=0 || amount > availableBalance){
            alert("You have no enough money")
        }

        // console.log(amount,availableBalance);
        const totalNewAvailableBalance = availableBalance - amount
        console.log(totalNewAvailableBalance);

        // document.getElementById("available-balance").innerText = totalNewAvailableBalance
        setInnerText(totalNewAvailableBalance)


        
        const data = {
            name: "Cash Out",
            date : new Date().toLocaleTimeString()
        }
        transactionData.push(data)


    })


   
 document.getElementById("transactions-button")
 .addEventListener("click", function(){
    const transactionContainer = document.getElementById("transaction-container")
    transactionContainer.innerHTML = ""
    for(const data of transactionData){
        const div = document.createElement("div")
        div.innerHTML=`
         <div class="bg-white rounded-xl p-3 flex justify-between items-center mt-3">
                    <div class="flex items-center ">
                        <div class="p-3 rounded-full bg-[#f4f5f7]">
                            <img class="mx-auto" src="./assets/wallet1.png" alt="">

                        </div>
                        <div class="ml-3">
                            <h1>${data.name}</h1>
                            <p>${data.date}</p>
                        </div>
                    </div>
                    <i class="fa-solid fa-ellipsis-vertical"></i>
                </div>
        `

        transactionContainer.appendChild(div)
    }
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




// function to toggle 
//  oporeo ase

function handleToggle(id) {

    const forms = document.getElementsByClassName("form")
    for (const form of forms) {
        form.style.display = "none"
    }
    document.getElementById(id).style.display = "block"

}

// function to button style layer
function handleButtonToggle(id){
    const formsBtns = document.getElementsByClassName("form-btn")

    for(const btn of formsBtns){
        btn.classList.remove("border-[#0874f2]","bg-[#0874f20d]")
        btn.classList.add("border-gray-300")
    }
    document.getElementById(id).classList.remove("border-gray-300")
    document.getElementById(id).classList.add("border-[#0874f2]","bg-[#0874f20d]")
}

// reusable code/shared code: 



// document.getElementById("add-button")
// .addEventListener("click", function(){
//    const forms = document.getElementsByClassName("form")
//    for(const form of forms){
//     form.style.display = "none"
//    }
//    document.getElementById("add-money-parent").style.display = "block"

// })

// document.getElementById("cash-out-button")
// .addEventListener("click", function(){
//     const forms = document.getElementsByClassName("form")
//    for(const form of forms){
//     form.style.display = "none"
//    }
//    document.getElementById("cash-out-parent").style.display = "block"
// })
// document.getElementById("transfer-button")
// .addEventListener("click", function(){
//    const forms = document.getElementsByClassName("form")
//    for(const form of forms){
//     form.style.display = "none"
//    }
//    document.getElementById("transfer-money-parent").style.display = "block"

// })
// document.getElementById("get-bonus-button")
// .addEventListener("click", function(){
//    const forms = document.getElementsByClassName("form")
//    for(const form of forms){
//     form.style.display = "none"
//    }
//    document.getElementById("get-bonus-parent").style.display = "block"

// })
// document.getElementById("pay-bill-button")
// .addEventListener("click", function(){
//    const forms = document.getElementsByClassName("form")
//    for(const form of forms){
//     form.style.display = "none"
//    }
//    document.getElementById("pay-bill-parent").style.display = "block"

// })
document.getElementById("add-button")
    .addEventListener("click", function () {
        handleToggle("add-money-parent")
        handleButtonToggle("add-button")


    })
document.getElementById("cash-out-button")
    .addEventListener("click", function () {
        handleToggle("cash-out-parent")
        handleButtonToggle("cash-out-button")

    })
document.getElementById("transfer-button")
    .addEventListener("click", function () {
        handleToggle("transfer-money-parent")
        handleButtonToggle("transfer-button")
    })
document.getElementById("get-bonus-button")
    .addEventListener("click", function () {
        handleToggle("get-bonus-parent")
         handleButtonToggle("get-bonus-button")

    })
document.getElementById("pay-bill-button")
    .addEventListener("click", function () {
        handleToggle("pay-bill-parent")
         handleButtonToggle("pay-bill-button")

    })
document.getElementById("transactions-button")
    .addEventListener("click", function () {
        handleToggle("transactions-parent")
         handleButtonToggle("transactions-button")

    })
