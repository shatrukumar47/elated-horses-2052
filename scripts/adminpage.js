let cardContainer = document.getElementById("product-list");
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
    let title = document.createElement("h4");
    title.textContent = "Teaching English as a Foreign Language (TEFL)";

    let flexContainer = document.createElement("div");
    flexContainer.className = "flex-wrapper";
    let flex2 = document.createElement("div");
    flex2.className = "flex";
    let iconImg2 = document.createElement("img");
    iconImg2.src = "https://masaischool.com/courses/images/calender.svg";
    let p2 = document.createElement("p");
    p2.textContent = `Tutor : ${item}`;

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
    btn1.textContent = "EDIT";
    btn2.textContent = "REMOVE";

    btnDiv.append(btn1,btn2);
    flex2.append(iconImg2,p2);
    flex3.append(iconImg3,p3);
    flexContainer.append(flex2,flex3)
    card.append(img,category,title,flexContainer,btnDiv);

    return card;
}




