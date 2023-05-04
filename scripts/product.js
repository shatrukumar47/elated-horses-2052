let mainSection = document.getElementById("container");

displayData()
function displayData(data){
     mainSection.innerHTML = null;
    mainSection.append(createCard(data));
}


function createCard(item){
    let card = document.createElement("div");
    card.className = "card";

    let card_div = document.createElement("div");
    card_div.className="card_div";

    let title = document.createElement("h2");
    title.innerText ="Teaching English as a Foreign Language (TEFL)";
   
    let img = document.createElement("img");
    img.className = "card_image"
    img.src ="https://img.freepik.com/free-photo/virtual-classroom-study-space_23-2149178650.jpg?size=626&ext=jpg&ga=GA1.2.1153339203.1683186141&semt=ais";
    
    let duration=document.createElement("h5");
    duration.className="duration";
    duration.innerText="6 months";

    card_div.append(img,title,duration);

    let card_box=document.createElement("div");
    card_box.className="card_box";

    let category = document.createElement("h3");
    category.className = "category"
    category.innerText = "Business";

    let tutorCont = document.createElement("div");

    let divTutor1 = document.createElement("div");
    let tutor1=document.createElement("p");
    tutor1.className="tutor1";
    tutor1.innerText = "Kshitiz Kumar Singh";
    let img1 = document.createElement("img");
    img1.className = "tutor1_image"
    img1.src = "https://masai-website-images.s3.ap-south-1.amazonaws.com/image_47_a922f4522c.png";

    divTutor1.append(img1,tutor1);

    let divTutor2 = document.createElement("div");
    let tutor2=document.createElement("p");
    tutor2.className="tutor2";
    tutor2.innerText = "Ravi Singh";
    let img2 = document.createElement("img");
    img2.className = "tutor2_image"
    img2.src = "https://masai-website-images.s3.ap-south-1.amazonaws.com/image_47_a922f4522c.png";
    divTutor2.append(img2,tutor2)

    let info = document.createElement("div");
    info.className = "info";
    info.innerText="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis soluta reprehenderit, fuga incidunt cumque laudantium.";

    let price=document.createElement("p");
    price.className="price";
    price.innerText="15000";

    

    let buttons=document.createElement("div");
    buttons.className="buttons";
    
    let btn1=document.createElement("button");
    btn1.className="bookmark";
    btn1.innerText="Bookmark";

    let btn2=document.createElement("button");
    btn2.className="start_course";
    btn2.innerText="Start Course";

    buttons.append(btn1,btn2);    
    tutorCont.append(divTutor1,divTutor2)
    card_box.append(category,tutorCont,info,price)

    card.append(card_div,card_box,buttons);

    return card;
}

