let form = document.querySelector("form");

form.addEventListener("submit",function(e){
    e.preventDefault();

    let cardNumber = document.getElementById("cardnumber").value;
    let expirymonth = document.getElementById("expirymonth").value;
    let expiryyear = document.getElementById("expiryyear").value;
    let cvv = document.getElementById("cvv").value;

    if(cardNumber && expirymonth && expiryyear && cvv){
        checkOTP();
    }else{
        alert("Please fill all the parameters !!");
    }
    
})


function checkOTP(){
    let otp = Math.floor(1000 + Math.random() * 9000);

    alert("Your OTP is " + otp);

    let verifyOtp = prompt("Enter OTP ");

    if(otp == verifyOtp){
        let paymentCont = document.getElementById("payment-container");
        let thankyouImg = document.querySelector(".thankyou-img");
        paymentCont.style.display = "none";
        thankyouImg.style.display = "block"
    }else{
        alert("Wrong OTP");
    }
}