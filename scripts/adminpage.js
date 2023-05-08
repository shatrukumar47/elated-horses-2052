let cardContainer = document.getElementById("product-list");
let buttonWrapper = document.getElementById("button-wrapper");
let url = "https://64537452c18adbbdfe9daf61.mockapi.io/learn/learn";

// update-course inputs
let updateTitle = document.getElementById("update-title")
let updateImage = document.getElementById("update-image-link")
let updateCategory = document.getElementById("update-category")
let updatePrice = document.getElementById("update-price")
let updateTutor = document.getElementById("update-tutor")

let updateCourseBtn = document.getElementById("update-button");
let id;
function addCourse(item){
    updateTitle.value = item.name;
    updateImage.value = item.avatar;
    updateCategory.value = item.category;
    updatePrice.value = item.price;
    updateTutor.value = item.tutore1;

    id = item.id;
}
updateCourseBtn.addEventListener("click",function(){
    console.log(id)
    let promise = fetch(`${url}/${id}`,{
        method: "PATCH",
        body: JSON.stringify({
            avatar: updateImage.value,
            category: updateCategory.value,
            name: updateTitle.value,
            price: updatePrice.value,
            tutore1: updateTutor.value
        }),
        headers: {
            "Content-type" : "application/json"
        }
    });

    promise.then((res)=>{
        return res.json();
    }).then((data)=>{
        console.log(data);
    }).catch((err)=>{
        console.log(err)
    })
    fetchAPI(1);
})

// add-course inputs
let addTitle = document.getElementById("add-title")
let addImage = document.getElementById("add-image-link")
let addCategory = document.getElementById("add-category")
let addPrice = document.getElementById("add-price")
let addTutor = document.getElementById("add-tutor")

let addCourseBtn = document.getElementById("add-course");

addCourseBtn.addEventListener("click",function(){
    let promise = fetch(url,{
        method: "POST",
        body: JSON.stringify({
            avatar: addImage.value,
            category: addCategory.value,
            name: addTitle.value,
            price: addPrice.value,
            tutore1: addTutor.value
        }),
        headers: {
            "Content-type" : "application/json"
        }
    });

    promise.then((res)=>{
        return res.json();
    }).then((data)=>{
        console.log(data);
    }).catch((err)=>{
        console.log(err)
    })
    fetchAPI(1);
})


fetchAPI(1);
function fetchAPI(pageNumber){
        fetch(`https://64537452c18adbbdfe9daf61.mockapi.io/learn/learn`).then((res)=>{
            return res.json();
        }).then((totalData)=>{
            console.log(totalData)
            let total = totalData.length;
            let totalBtn = Math.ceil(total/8);
            buttonWrapper.innerHTML = null;
            for(let i=1; i<=totalBtn; i++){
                buttonWrapper.append(createBtn(i))
            }

            //displaying total-courses
            let displayTotal = document.getElementById("total-courses");
            let displayLive = document.getElementById("live-courses");
            displayTotal.textContent = `Total Courses = ${totalData.length}`;
            displayLive.textContent = `Live Courses = ${totalData.length}`

        }).catch((err)=>{
            console.log(err)
        })


        const url = new URL('https://64537452c18adbbdfe9daf61.mockapi.io/learn/learn');
        url.searchParams.append('completed', false);
        url.searchParams.append('page', pageNumber);
        url.searchParams.append('limit', 8);

        fetch(url, {
        method: 'GET',
        headers: {'content-type':'application/json'},
        }).then(res => {
        if (res.ok) {
            return res.json();
        }
       
        }).then(data => {
            console.log(data)
            Display(data);
        }).catch(error => {
        console.log(error)
        })
}


function Display(data){
    cardContainer.innerHTML = null;
    data.forEach(function(item){
        cardContainer.append(createCard(item))
    })
}

function createBtn(i){
    // let btn = document.createElement("button");
    // btn.className = `.pagination-button`;
    // btn.innerText = i;

    // btn.addEventListener("click",function(){
    //   fetchAPI(i)
    // })
    // return btn;

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
        console.log(btns)
        btns.forEach((btn) => {
            btn.addEventListener("click",function(){
                btns.forEach(btnb=> btnb.classList.remove('active'));
                btn.classList.add("active")
                let i = btn.innerText;
                fetchAPI(i)
            })
        })
       
},500)


function createCard(item){
    let card = document.createElement("div");
    card.className = "card";
    let img = document.createElement("img");
    img.className = "poster"
    img.src = item.avatar;
    let category = document.createElement("p");
    category.className = "category"
    category.textContent = item.category
    let title = document.createElement("h4");
    title.textContent = item.name;

    let flexContainer = document.createElement("div");
    flexContainer.className = "flex-wrapper";
    let flex2 = document.createElement("div");
    flex2.className = "flex";
    let iconImg2 = document.createElement("img");
    iconImg2.src = "https://masaischool.com/courses/images/calender.svg";
    let p2 = document.createElement("p");
    p2.textContent = `Tutor : ${item.tutore1}`;

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
    btn1.textContent = "EDIT";
    btn2.textContent = "REMOVE";

    btn1.addEventListener("click",function(){
        addCourse(item);
    })
    btn2.addEventListener("click",function(){
        let promise = fetch(`${url}/${item.id}`,{
            method: "DELETE"
        });
        promise.then((res)=>{
            return res.json();
        }).then((data)=>{
            console.log(data);
        }).catch((err)=>{
            console.log(err)
        })
        fetchAPI(1)
    })

    btnDiv.append(btn1,btn2);
    flex2.append(iconImg2,p2);
    flex3.append(iconImg3,p3);
    flexContainer.append(flex2,flex3)
    card.append(img,category,title,flexContainer,btnDiv);

    return card;
}


// search functionality
let searchInput = document.getElementById("search-input")
let searchBtn = document.getElementById("search-button")

searchBtn.addEventListener("click",function(){

    if(!searchInput.value){
        fetchAPI(1);
    }else{
        const url = new URL('https://64537452c18adbbdfe9daf61.mockapi.io/learn/learn');
        url.searchParams.append('name', searchInput.value);
        
        fetch(url, {
          method: 'GET',
          headers: {'content-type':'application/json'},
        }).then(res => {
          if (res.ok) {
              return res.json();
          }
       
        }).then(data => {
            console.log(data);
            Display(data);
        }).catch(error => {
            console.log(error)
        })
    }
   
})

