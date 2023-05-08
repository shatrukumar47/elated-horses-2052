let form =document.querySelector("form");
let user={};
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let users=JSON.parse(localStorage.getItem("users"));
    if(form.submit.value=="Continue"){
        let flag=false;
        if(form.email.value=="admin@gmail.com")
        flag=true;
        else{
            for(let i=0;i<users.length;i++)
        {
            if(users[i].email==form.email.value)
            {
                flag=true;
                user=users[i]
                break;
            }
        }
        }
        if(flag==false)
        {
            alert("Email Not registered")
        }
        else{
           let formdata= document.querySelectorAll(".formData")
           formdata[0].style.display="block";
           formdata[1].style.display="block";
            document.querySelector("#submit").value="Sign in";
        }
    }
    else if(form.submit.value=="Sign in")
    {
        if(form.email.value==''|| form.password.value==''){
            alert("Enter the required fields!");
        }
        else if(form.email.value=="admin@gmail.com" &&form.password.value=="admin"){
            location="./adminpage.html"
        }
        else{
        if((form.email.value==user.email) && (form.password.value==user.password))
        {
            localStorage.setItem("login",JSON.stringify(user));
            alert(`Welcome ${user.firstName} ${user.lastName }`);
            location="./index.html";
        }
        else{
            alert("wrong password")
        }
        }
     }
})