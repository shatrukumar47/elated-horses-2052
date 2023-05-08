let logo = document.getElementById("logo");
logo.addEventListener("click",function(){
    window.location.href = "index.html";
})
let courseLogo = document.getElementById("course");
courseLogo.addEventListener("click",function(){
    window.location.href = "coursesList.html";
})
let bookmark = document.getElementById("bookmark");
bookmark.addEventListener("click",function(){
    window.location.href = "bookmark.html";
})
let login = document.getElementById("login");
login.addEventListener("click",function(){
    window.location.href = "login.html";
})


// logout feature
let users=JSON.parse(localStorage.getItem("login"));
let userNameDiv = document.getElementById("user-name")
if(users != undefined){
    let login = document.getElementById("login");
    login.style.display = "none"
    let h4 = document.createElement("h2");
    let logOut = document.createElement("button");
    logOut.className = "logout-button";
    logOut.innerText = "Log Out"

    logOut.addEventListener("click",function(){
        // console.log("hello")
        localStorage.removeItem("login")
        window.location.href = "index.html";
    })
    h4.className = "user-name";
    h4.innerText = `👱🏻 ${users.firstName}`;
    userNameDiv.append(h4,logOut);
    
}else{
    userNameDiv.style.display = "none";
}


// end of navbar functionalities

let tbody=document.querySelector("tbody")
let bookmarkData =JSON.parse(localStorage.getItem("bookmark"))||[]
console.log(bookmarkData)
DisplayData(bookmarkData)
    
function DisplayData(arr){
    tbody.innerHTML = null;
    arr.forEach((element,ind) => {
        let tr=document.createElement("tr")
        let td1=document.createElement("td")
        td1.innerText = ind+1;
        let td2=document.createElement("td")
        td2.innerText=element.name
        let td3=document.createElement("td")
        td3.innerText=element.duration
        let td4=document.createElement("td")
        td4.innerText=element.price
        let td5=document.createElement("td")
        td5.innerText=element.tutore1
        let td6=document.createElement("td")
        td6.innerText="View"
    
        td6.className="view";
        td6.style.cursor = "pointer";
        td6.style.fontWeight = "bold";
        td6.style.color = "#137DC3";


        let td7=document.createElement("td")
        td7.innerText="Buy Now";
        td7.style.cursor = "pointer";
        td7.style.fontWeight = "bold";
        td7.style.color = "green";


        let td8=document.createElement("td")
        td8.className="delete";
        td8.innerText="Delete";
        td8.style.cursor = "pointer";
        td8.style.fontWeight = "bold";
        td8.style.color = "red";



        td8.addEventListener("click",()=>{
        bookmarkData.splice(ind,1);
        localStorage.setItem("bookmark",JSON.stringify(bookmarkData))
        DisplayData(bookmarkData)
        })

        td7.addEventListener("click",()=>{
            const data = JSON.parse(localStorage.getItem("applying-course")) || [];
            if(data.length == 0){
                data.push(element);
                localStorage.setItem("applying-course", JSON.stringify(data));  
            }else{
                data.pop()
                localStorage.setItem("applying-course", JSON.stringify(data));
                data.push(element);
                localStorage.setItem("applying-course", JSON.stringify(data));
            }
            window.open('paymentpage.html', '_blank');
        })


        td6.addEventListener("click",()=>{
            const data = JSON.parse(localStorage.getItem("course-view")) || [];
            if(data.length == 0){
                data.push(element);
                localStorage.setItem("course-view", JSON.stringify(data));  
            }else{
                data.pop()
                localStorage.setItem("course-view", JSON.stringify(data));
                data.push(element);
                localStorage.setItem("course-view", JSON.stringify(data));
            }
            window.open('Product.html', '_blank');
        })
        tr.append(td1,td2,td3,td4,td5,td6,td7,td8)
        tbody.append(tr)

    });
        
}