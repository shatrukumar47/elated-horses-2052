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



























let tbody=document.querySelector("tbody")
let bookmarkData=[]
let course=JSON.parse(localStorage.getItem("visit-course"))||[]
DisplayData(bookmarkData)
function DisplayData(arr){
    arr.forEach((element,ind) => {
        let tr=document.createElement("tr")
        let td1=document.createElement("td")
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
        let td7=document.createElement("td")
        td6.className="view"
        td7.innerText="Buy Now"
        let td8=document.createElement("td")
        td8.className="delete"
        td8.innerText="Delete"
        td8.addEventListener("click",()=>{
          let bookmarkData=bookmarkData.filter((ele,i)=>{
            return ind!=i
          })
          DisplayData(bookmarkData)
          localStorage.setItem("abc",JSON.stringify(bookmarkData))
        })

        td7.addEventListener("click",()=>{
            window.location.href="../payment.html"
        })
        td6.addEventListener("click",()=>{
            course.push(element)
            localStorage.setItem("visit-course",JSON.stringify(course))
            window.location.href="../bookView.html"
        })
        tr.append(td1,td2,td3,td4,td5,td6,td7,td8)
        tbody.append(tr)

    });
    

}