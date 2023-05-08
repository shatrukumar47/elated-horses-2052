let logo = document.getElementById("logo");
logo.addEventListener("click",function(){
    window.location.href = "index.html";
})
let course = document.getElementById("course");
course.addEventListener("click",function(){
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

let users=JSON.parse(localStorage.getItem("login"));
let userNameDiv = document.getElementById("user-name")
if(users != undefined){
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
