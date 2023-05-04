let form = document.querySelector("form");

form.addEventListener("submit",function(e){
    e.preventDefault();

    let cardNumber = document.getElementById("cardnumber").value;
    let expirymonth = document.getElementById("expirymonth").value;
    let expiryyear = document.getElementById("expiryyear").value;
    let cvv = document.getElementById("cvv").value;

    if(cardNumber && expirymonth && expiryyear && cvv){
        // takeInput(id,name,age,designation,priority,vaccine);
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

        alert(`${item.name} Added to Queue`);
        setTimeout(function(){
            alert(`Vaccinating ${item.name}`)
        },5000)
        setTimeout(function(){
            alert(`${item.name} Vaccinated`)
            vaccinatedData.push(item);
            localStorage.setItem("vaccinated",JSON.stringify(vaccinatedData));
            registerData.splice(index,1);
            localStorage.setItem("register",JSON.stringify(registerData));
            Display(registerData);
        },10000)    

    }else{
        alert("wrong otp");
    }
}