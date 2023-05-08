let mainSection = document.getElementById("container");
let coursedata=JSON.parse(localStorage.getItem("course-view"));
console.log(coursedata);

displayData(coursedata)
function displayData(data){
     mainSection.innerHTML = null;

    mainSection.append(createCard(data[0]));
}


function createCard(item){
    let card = document.createElement("div");
    card.className = "card";

    let card_div = document.createElement("div");
    card_div.className="card_div";

    let title = document.createElement("h2");
    title.innerText =`TITLE : ${item.name}`;
   
    let imgdiv=document.createElement("div");
    imgdiv.className="image_div"
    
    let img = document.createElement("img");
    img.className = "card_image"
    img.src =item.avatar;
        
    let duration=document.createElement("h5");
    duration.className="duration";
    duration.innerText=`DURATION : ${item.duration}`;

    let category = document.createElement("h4");
    category.className = "category"
    category.innerText = `CATEGORY : ${item.category}`;

    imgdiv.append(title,category,duration)
    card_div.append(img,imgdiv);
    // ------------------------------------------------------//

    let banner=document.createElement("div");
    banner.className="banner";

    let first=document.createElement("h1");
    first.className="first";
    first.innerText="Over 500 satisfied students have entrusted us to help them reach their goals."
    
    let second=document.createElement("h2");
    second.className="second";
    second.innerText="The function of education is to teach one to think intensively and to think critically. Intelligence plus character- that is the goal of true educaation."
   
    banner.append(first,second);

    let card_box=document.createElement("div");
    card_box.className="card_box";

   

    let tutorCont = document.createElement("div");
    tutorCont.className="tutorCont";

    let divTutor1 = document.createElement("div");
    divTutor1.className = "tutor-1-div"
    let tutor1=document.createElement("p");
    tutor1.className="tutor1";
    tutor1.innerText = `TUTOR : ${item.tutore1}`;
    let img1 = document.createElement("img");
    img1.className = "tutor1_image"
    img1.src = item.tutore1_Image;

    divTutor1.append(img1,tutor1);

    let divTutor2 = document.createElement("div");
    divTutor2.className = "tutor-2-div"
    let tutor2=document.createElement("p");
    tutor2.className="tutor2";
    tutor2.innerText = `TUTOR : ${item.tutore2}`;
    let img2 = document.createElement("img");
    img2.className = "tutor2_image"
    img2.src = item.tutore2_Image;
    divTutor2.append(img2,tutor2);

    let info = document.createElement("div");
    info.className = "info";
    info.innerText=`DETAILS : ${item.details}`;

    let price=document.createElement("p");
    price.className="price";
    price.innerText=`PRICE : ₹${item.price}`;

    

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
    card_box.append(tutorCont,info,price)

    card.append(card_div,banner,card_box,buttons);

    return card;
}

