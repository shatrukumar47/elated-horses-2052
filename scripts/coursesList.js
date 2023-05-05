
$(document).ready(function(){
    $('.carousel').slick({
    slidesToShow: 3,
    dots:true,
    centerMode: true,
    });
  });
  



let cardContainer = document.getElementById("card-container");
Display();

function Display(data){
    cardContainer.innerHTML = null;
    for(let i=1; i<10; i++){
        cardContainer.append(createCard())
    }
}


function createCard(item){
    let card = document.createElement("div");
    card.className = "card";
    let img = document.createElement("img");
    img.className = "poster"
    img.src = "https://img.freepik.com/free-photo/language-communication-message-written_53876-127905.jpg?size=626&ext=jpg";
    let category = document.createElement("p");
    category.className = "category"
    category.textContent = "Education"
    let title = document.createElement("h2");
    title.textContent = "Teaching English as a Foreign Language (TEFL)";

    let flexContainer = document.createElement("div");
    flexContainer.className = "flex-wrapper";
    let flex1 = document.createElement("div");
    flex1.className = "flex";
    let iconImg1 = document.createElement("img");
    iconImg1.src = "https://masaischool.com/courses/images/calender.svg";
    let p1 = document.createElement("p");
    p1.textContent = "Course starts on 29 May 2023"

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
    p3.textContent = "5000"

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

