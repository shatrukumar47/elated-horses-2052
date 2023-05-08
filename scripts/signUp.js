let form =document.querySelector("form");
    form.addEventListener("submit",(e)=>{
        e.preventDefault();
        let users=JSON.parse(localStorage.getItem("users"))||[];
        if(form.submit.value=="Continue"){
            let email=form.email.value;
            let flag=false;
            for(let i=0;i<users;i++)
            {
                if(users[i].email==email)
                {
                    flag=true;
                    break;
                }
            }
            if(flag==true)
            {
                alert("Email already registered")
            }
            else{
                let formData=document.querySelectorAll(".formData")
                for(let j=0; j<formData.length ;j++)
                formData[j].style.display="block";
                document.querySelector("#submit").value="Sign up";
            }
        }
        else if(form.submit.value=="Sign up")
        {
            if(form.email.value==''|| form.password.value=='' || form.firstName.value=='' || form.lastName.value==''){
                alert("Enter the required fields!");
            }
            else{
                let obj={email:form.email.value,
                password:form.password.value,
                firstName:form.firstName.value,
                lastName:form.lastName.value
            }
            users.push(obj);
                localStorage.setItem("login",JSON.stringify(obj));
                localStorage.setItem("users",JSON.stringify(users));

                alert(`Welcome ${obj.firstName} ${obj.lastName }`);
                location="./index.html";
            }
         }
    })

    
