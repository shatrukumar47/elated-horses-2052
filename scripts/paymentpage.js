let form = document.querySelector("form");
let applyData = JSON.parse(localStorage.getItem("applying-course")) || [];

let title = document.getElementById("name");
let category = document.getElementById("category");
let price = document.getElementById("price");
let payBtn = document.getElementById("submit");
payBtn.value = `Pay ₹${applyData[0].price} 🔒`;
title.textContent = `Title : ${applyData[0].name}`;
category.textContent = `Category : ${applyData[0].category}`;
price.textContent = `Price : ${applyData[0].price}`;

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
        setTimeout(function(){
            window.location.href = "coursesList.html"
        },2000)
    }else{
        alert("Wrong OTP");
    }
}


