//  login button functionality
document.getElementById("loginButton")
    .addEventListener("click",function(e){
        e.preventDefault()

        const mobileNumber = 18224582430
        const pinNumber = 1234

        const mobileNumberValue = document.getElementById("mobile-number").value
        const mobileNumberValueConverted = parseInt(mobileNumberValue)
        // console.log("mobileNumberValueConverted");

        const pinNumberValue = document.getElementById("pin-number").value
        const pinNumberValueConverted = parseInt(pinNumberValue)

        console.log(mobileNumberValueConverted, pinNumberValueConverted);

        if (mobileNumberValueConverted === mobileNumber && pinNumberValueConverted === pinNumber) {
            // console.log('all matched');
            alert('Login Successfully')
            window.location.href = "./home.html"

        }
        else {
            // console.log('invalid number');
            alert('Invalid Password')
            alert('Please fill in the blanks correct number')

        }



    })
