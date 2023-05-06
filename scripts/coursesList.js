let buttonWrapper = document.getElementById("button-wrapper");

$(document).ready(function(){
    $('.carousel').slick({
    slidesToShow: 3,
    dots:true,
    centerMode: true,
    infinite: true,
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
        console.log(data);
        let limit = 6;
        //
        let total = data.length;
        let totalBtn = Math.ceil(total/limit);

        // buttonWrapper.innerHTML = null;
        for(let i=1; i<=totalBtn; i++){
            buttonWrapper.append(createBtn(i, data, limit))
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

    btnDiv.append(btn1,btn2);
    flex1.append(iconImg1,p1);
    flex2.append(iconImg2,p2);
    flex3.append(iconImg3,p3);
    flexContainer.append(flex1,flex2,flex3)
    card.append(img,category,title,flex1,flexContainer,btnDiv);

    return card;
}

function createBtn(i, data, limit){
    let btn = document.createElement("button");

    let activeClass = '';
    if(i==1){
        activeClass = 'active';
    }
    btn.className = `.pagination-button ${activeClass}`;
    btn.innerText = i;



    btn.addEventListener("click",function(){
        btn.classList.remove('active');
        btn.className = 'active'
        console.log(btn)
        let resArr = pagination(data, i, limit);
        Display(resArr);
    })

    return btn;
}
