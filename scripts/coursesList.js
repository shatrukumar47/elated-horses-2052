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





let buttonWrapper = document.getElementById("button-wrapper");

$(document).ready(function(){
    $('.carousel').slick({
    autoplay: true,
    slidesToShow: 3,
    dots:true,
    speed: 100,
    centerMode: true,
    
    });
  });

  //

function pagination(data, pageNo, limit){
    return data.slice((pageNo-1)*limit, (pageNo*limit -1 )+1 )
} 




async function fetchAPI(){
    try {
        let res = await fetch("https://64537452c18adbbdfe9daf61.mockapi.io/learn/learn");
        let data = await res.json();
      
        //pagination
        console.log(data);
        let limit = 6;
        let total = data.length;
        let totalBtn = Math.ceil(total/limit);

        buttonWrapper.innerHTML = null;
        for(let i=1; i<=totalBtn; i++){
            buttonWrapper.append(createBtn(i))
        }

        let resArr = pagination(data, 1, limit);
        Display(resArr);
    } catch (error) {
        console.log(error)
    }
}
fetchAPI()

let cardContainer = document.getElementById("card-container");

function Display(data){
    cardContainer.innerHTML = null;
    data.forEach(function(item){
        cardContainer.append(createCard(item))
    })
}


function createCard(item){
    let card = document.createElement("div");
    card.className = "card";
    let img = document.createElement("img");
    img.className = "poster"
    img.src = item.avatar;
    img.style.cursor = "pointer";
    // image click functionality
    img.addEventListener("click",function(){
        const data = JSON.parse(localStorage.getItem("course-view")) || [];
        if(data.length == 0){
            data.push(item);
            localStorage.setItem("course-view", JSON.stringify(data));  
        }else{
            data.pop()
            localStorage.setItem("course-view", JSON.stringify(data));
            data.push(item);
            localStorage.setItem("course-view", JSON.stringify(data));
        }
        window.open('Product.html', '_blank');
    })



    let category = document.createElement("p");
    category.className = "category"
    category.textContent = item.category;
    let title = document.createElement("h2");
    title.textContent = item.name;

    let flexContainer = document.createElement("div");
    flexContainer.className = "flex-wrapper";
    let flex1 = document.createElement("div");
    flex1.className = "flex";
    let iconImg1 = document.createElement("img");
    iconImg1.src = "https://masaischool.com/courses/images/calender.svg";
    let p1 = document.createElement("p");
    p1.textContent =item.duration;

    let flex2 = document.createElement("div");
    flex2.className = "flex";
    let iconImg2 = document.createElement("img");
    iconImg2.src = "https://masaischool.com/courses/images/calender-clock.svg";
    let p2 = document.createElement("p");
    p2.textContent = "Learn completely in 60 Days"

    let flex3 = document.createElement("div");
    flex3.className = "flex";
    let iconImg3 = document.createElement("img");
    iconImg3.src = "https://masaischool.com/courses/images/currency-inr.svg";
    let p3 = document.createElement("p");
    p3.textContent = item.price;

    let btnDiv = document.createElement("div");
    btnDiv.className = "buttons-wrapper";
    let btn1 = document.createElement("button");
    let btn2 = document.createElement("button");
    btn1.textContent = "VIEW DETAILS";
    btn2.textContent = "APPLY NOW";

    // view details functionality
    btn1.addEventListener("click",function(){
        const data = JSON.parse(localStorage.getItem("course-view")) || [];
        if(data.length == 0){
            data.push(item);
            localStorage.setItem("course-view", JSON.stringify(data));  
        }else{
            data.pop()
            localStorage.setItem("course-view", JSON.stringify(data));
            data.push(item);
            localStorage.setItem("course-view", JSON.stringify(data));
        }
        window.open('Product.html', '_blank');
    })

    // apply now functionality

    btn2.addEventListener("click",function(){

        let users=JSON.parse(localStorage.getItem("login"));
        if(users == undefined){
            window.location.href = "login.html";
        }else{
            const data = JSON.parse(localStorage.getItem("applying-course")) || [];
            if(data.length == 0){
                data.push(item);
                localStorage.setItem("applying-course", JSON.stringify(data));  
            }else{
                data.pop()
                localStorage.setItem("applying-course", JSON.stringify(data));
                data.push(item);
                localStorage.setItem("applying-course", JSON.stringify(data));
            }
            window.open('paymentpage.html', '_blank');
        }
 
    })





    btnDiv.append(btn1,btn2);
    flex1.append(iconImg1,p1);
    flex2.append(iconImg2,p2);
    flex3.append(iconImg3,p3);
    flexContainer.append(flex1,flex2,flex3)
    card.append(img,category,title,flex1,flexContainer,btnDiv);

    return card;
}

function createBtn(i){
    let btn = document.createElement("button");

    let activeClass = '';
    if(i==1){
        activeClass = 'active';
    }
    btn.className = `.pagination-button ${activeClass}`;
    btn.innerText = i;
    return btn;
}

setTimeout(async function(){
    const btns = document.querySelectorAll("#button-wrapper button");
    let res = await fetch("https://64537452c18adbbdfe9daf61.mockapi.io/learn/learn");
    let data = await res.json();
    let limit = 6;

    btns.forEach((btn) => {
        btn.addEventListener("click",function(){
            btns.forEach(btnb=> btnb.classList.remove('active'));
            btn.classList.add("active")
            let i = btn.innerText;
            let resArr = pagination(data, i, limit);
            Display(resArr);
        })
    })
},500)



// search functionality
 let searchInput = document.getElementById("search-input")
 searchInput.addEventListener("input",function(){

    let promise = fetch("https://64537452c18adbbdfe9daf61.mockapi.io/learn/learn");
    promise.then((res)=>{
        return res.json();
    }).then((data)=>{
        
        let tempData = data.filter(function(ele){
            if(ele.name.toLowerCase().includes(searchInput.value.toLowerCase())){
                return true;
            }else{
                false;
            }
        })
        let limit = 6
        let total = tempData.length;
        let totalBtn = Math.ceil(total/limit);

        buttonWrapper.innerHTML = null;
        for(let i=1; i<=totalBtn; i++){
            buttonWrapper.append(createBtn(i, data, limit))
        }

        console.log(tempData);
        let resArr = pagination(tempData, 1, limit);
        Display(resArr);
    }).catch((error)=>{
        console.log(error);
    })
 })

 // category filtering
let selectCategory = document.getElementById("filter-by-category");
selectCategory.addEventListener("change",function(){
   if(selectCategory.value == ""){
    fetchAPI();
   }else{
    const url = new URL('https://64537452c18adbbdfe9daf61.mockapi.io/learn/learn');
    url.searchParams.append('category', `${selectCategory.value}`);

    fetch(url, {
    method: 'GET',
    headers: {'content-type':'application/json'},
    }).then(res => {
    if (res.ok) {
        return res.json();
    }
    }).then(data => {
    console.log(data)
    Display(data)
    }).catch(error => {
        console.log(error)
    })
   }
})

// sorting by price
let sortPrice = document.getElementById("sort-by-price");
sortPrice.addEventListener("change",function(){
    if(sortPrice.value == ""){
        fetchAPI();
       }else{
        const url = new URL('https://64537452c18adbbdfe9daf61.mockapi.io/learn/learn');
        url.searchParams.append('sortBy', 'price');
        url.searchParams.append('order', `${sortPrice.value}`); // order parameter is optional and will default to `asc`
        
        fetch(url, {
          method: 'GET',
          headers: {'content-type':'application/json'},
        }).then(res => {
          if (res.ok) {
              return res.json();
          }
        }).then(data => {
          Display(data)
        }).catch(error => {
          console.log(error)
        })
       }
})

