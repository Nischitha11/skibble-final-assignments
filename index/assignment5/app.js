let foodContainer = document.querySelector('.food-container');
const fooditem=[
        {
        FoodName: "idli",
        foodimg: './images menuapp/idli image.jpg',
        price: 'RS 40/-',
        type: "Breakfast",
        des: " A type of savoury rice cake, originating from the Indian subcontinent, popular as breakfast foods in Southern India and in Sri Lanka. "
    },
    {
        FoodName: "dosa",
        foodimg: './images menuapp/dosa.jpg',
        price: 'RS 45/-',
        type: "Breakfast",
        des: "A dosa is a thin flat bread originating from South India, made for fermented batter."
    },
    {
        FoodName: "vada",
        foodimg:'./images menuapp/vada.jpg',
        price: 'RS 40/-',
        type: "Breakfast",
        des: "Vada is also a southindian braekfast made from blackgram .Vadas are really delicious when the outer casings are crispy crackling and soft spongy inside with hardly any traces of oil smell or greasy taste."
    },
    {
        FoodName: "puri",
        foodimg: './images menuapp/puri.jpg',
        price: 'RS 50/-',
        type: "Breakfast",
        des: "Puri is an unleavened deep fried bread made with flour and salt."
    },
    {
        FoodName: "upma",
        foodimg: './images menuapp/upma.jpg',
        price: 'RS 40/-',
        type: "Breakfast",
        des: " Upma is a flavourful South Indian braekfast dish made from rava or cream of whaetflour. This traditonal dish involves cooking of roasted rava in water."
        },
    {
        FoodName: "cheese rolls",
        foodimg: './images menuapp/cheese rolls.jpg',
        price: 'RS 80/-',
        type: "Starters",
        des: "Yummy cheese rolls ia an ideal snack dish made with Indian Cheese and mixed herbs."
    },
    {
        FoodName: "chicken tikka",
        foodimg: './images menuapp/chicken tikka.jpg',
        price: 'RS 180/-',
        type: "Starters",
        des: "Chicken tikka is a chicken dish originting in Indian subcontinent.It is traditionally small pieces of boneless chicken baked using skewers ."
    },
    {
        FoodName: " Gourmet Prawns",
        foodimg: './images menuapp/prawns.png',
        price: 'RS 200/-',
        type: "Starters",
        des: "Gourmet prawns receipe is from Great Britian chefs."
    },
    {
        FoodName: "Jeera rice",
        foodimg: './images menuapp/jeerarice.jpg',
        price: 'RS 250/-',
        type: "Lunch",
        des: "Jeera rice is a popular fried rice dish having the flavour of cumin seeds ."
    },
    {
        FoodName: "Pudina rice",
        foodimg: './images menuapp/pudina rice.jpg',
        price: 'RS 150/-',
        type: "Lunch",
        des: "Pudina rice is a fragrant,spicy and tasty one pot dish made with fresh mint leaves,basati rice,onion,tomato and some spices and herbs."
    },
    {
        FoodName: "Chicken Biryani",
        foodimg: './images menuapp/chicken biryani.jpg',
        price: 'RS 300/-',
        type: "Lunch",
        des: "Chicken biryani is a savory chicken and layers of rice dish that includes layers of chicken, rice, and aromatics steamed together."
    },
    {
        FoodName: "Fish Biryani",
        foodimg: './images menuapp/fish biryani.jpg',
        price: 'RS 400/-',
        type: "Lunch",
        des: "Fish biryani is a flavourful mix of rice ,spices and fish fillets."
    },
    {
        FoodName: "Juices",
        foodimg: './images menuapp/fruits.jpg',
        price: 'RS 40/- each',
        type: "Shakes_and_Juices",
        des: "Juices are made from fresh fruits ."
    },
    {
        FoodName: "ChocolateShake",
        foodimg: './images menuapp/shakes.jpg',
        price: 'RS 100/-',
        type: "Shakes_and_Juices",
        des: "There are different kind of thick shakes flavored with different varieties of fruite and chocolate."
    },
    {
        FoodName: "Jamun",
        foodimg: './images menuapp/jamun.jpg',
        price: 'RS 60/-',
        type: "Desserts",
        des: "This traditional dessert is the centre of attraction in every festival and occasion in India ."
    },
    
    {
        FoodName: "Chocobrownie with icecream",
        foodimg: './images menuapp/chocobrownie with ice cream.jpg',
        price: 'RS 80/-',
        type: "Desserts",
        des: "Warm and fudgy with premium vanilla ice-cream melting on top,this nutty brownie is chocolate heaven."
    },
]
console.log(fooditem);
const food = fooditem.map(item => {
    const listitem = ` <div class="col-md-6 foodbox ${item.type}">
    <div class="content b my-2">
        <div class="c-image">
            <img src="${item.foodimg}" alt="">
        </div>
        <div class="t-n-p my-2">
            <div class="header">  
                <span class="title">${item.FoodName}</span>
                <span class="price">${item.price}</span>
            </div>
            <div class="des my-3 ">
                <p>${item.des}</p>
            </div>
        </div>   
    </div>
</div>`;
foodContainer.innerHTML += listitem;
})
console.log(food);
const foodbox = document.querySelectorAll('.foodbox');
const menu = document.querySelectorAll('ul');
menu.forEach(m => {
    m.addEventListener('click', e =>{
        console.log(e.target.innerHTML);
        foodbox.forEach(box =>{

             box.style.display="none";
            if(e.target.innerHTML==='All'){
                box.style.display = "block";
            }
            else if(e.target.innerHTML==='Breakfast'){
                if(box.classList.contains('Breakfast'))
                {
                    box.style.display = "block";
                }
                
            }
            else if(e.target.innerHTML==='Starters'){
                if(box.classList.contains('Starters'))
                {
                    box.style.display = "block";
                }
            }
            else if(e.target.innerHTML==='Lunch'){
                if(box.classList.contains('Lunch'))
                {
                    box.style.display = "block";
                }
                
            }
            else if(e.target.innerHTML==='Shakes_and_Juices'){
                if(box.classList.contains('Shakes_and_Juices'))
                {
                    box.style.display = "block";
                }
                
            }
            else if(e.target.innerHTML==='Desserts'){
                if(box.classList.contains('Desserts'))
                {
                    box.style.display = "block";
                } 
            }
            else{
                box.style.display = "block";
            }
        })
    })
})
const ele1 = document.querySelector(".l1");
const ele2 = document.querySelector(".l2");
const ele3 = document.querySelector(".l3");
const ele4 = document.querySelector(".l4");
const ele5 = document.querySelector(".l5");
const ele6 = document.querySelector(".l6");
ele1.addEventListener("click",function(){
    ele1.style.borderColor="blue";
    ele2.style.borderColor="burlywood";
    ele3.style.borderColor="burlywood";
    ele4.style.borderColor="burlywood";
    ele5.style.borderColor="burlywood";
    ele6.style.borderColor="burlywood";
})

ele1.style.borderColor="blue";
ele2.addEventListener("click",function(){
    ele1.style.borderColor="burlywood";
    ele2.style.borderColor="blue";
    ele3.style.borderColor="burlywood";
    ele4.style.borderColor="burlywood";
    ele5.style.borderColor="burlywood";
    ele6.style.borderColor="burlywood";
})
ele3.addEventListener("click",function(){
    ele1.style.borderColor="burlywood";
    ele2.style.borderColor="burlywood";
    ele3.style.borderColor="blue";
    ele4.style.borderColor="burlywood";
    ele5.style.borderColor="burlywood";
    ele6.style.borderColor="burlywood";
})
ele4.addEventListener("click",function(){
    ele1.style.borderColor="burlywood";
    ele2.style.borderColor="burlywood";
    ele3.style.borderColor="burlywood";
    ele4.style.borderColor="blue";
    ele5.style.borderColor="burlywood";
    ele6.style.borderColor="burlywood";
})
ele5.addEventListener("click",function(){
    ele1.style.borderColor="burlywood";
    ele2.style.borderColor="burlywood";
    ele3.style.borderColor="burlywood";
    ele4.style.borderColor="burlywood";
    ele5.style.borderColor="blue";
    ele6.style.borderColor="burlywood";
})
ele6.addEventListener("click",function(){
    ele1.style.borderColor="burlywood";
    ele2.style.borderColor="burlywood";
    ele3.style.borderColor="burlywood";
    ele4.style.borderColor="burlywood";
    ele5.style.borderColor="burlywood";
    ele6.style.borderColor="blue";
}) 
