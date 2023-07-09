const menuBtns = document.querySelectorAll('.menu_btn');
const foodItems = document.querySelectorAll('.food-item');

let activeBtn = "Biryanis";

showFoodMenu(activeBtn);

menuBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        resetActiveBtn();
        showFoodMenu(btn.id);
        btn.classList.add('active-btn');
    });
});

function resetActiveBtn(){
    menuBtns.forEach((btn) => {
        btn.classList.remove('active-btn');
    });
}

function showFoodMenu(newMenuBtn){
    activeBtn = newMenuBtn;
    document.getElementById("Category").innerText=activeBtn;
    foodItems.forEach((item) => {
        if(item.classList.contains(activeBtn)){
            item.style.display = "grid";
        } else {
            item.style.display = "none";
        }
    });
}

var count=0;
var count1=0
const all_items_button=document.querySelectorAll("button");
all_items_button.forEach(elt=>elt.addEventListener("click",function(){
  
  if(String(this.id).includes("cart")){
  const item=this.parentElement.getElementsByClassName("card-title")[0].innerText;
  const price=this.parentElement.getElementsByClassName("price")[0].innerText;
  const rating=this.parentElement.getElementsByClassName("btn-secondary")[0].innerText;
  console.log(rating);
  AddItems(item,price,rating);
  ShowItems();
  
  }
  else if(String(this.id).includes("heart"))
  {
    const wishItem=this.parentElement.getElementsByClassName("card-title")[0].innerText;
    const wishPrice=this.parentElement.getElementsByClassName("price")[0].innerText;
    AddWishItems(wishItem,wishPrice);
    ShowWishItems();
   //incrementhearts(this);
   this.innerHTML="❤️";
  }
  
  else{
    submit();
  }
}))
const prices=[];
const items=[];
const ratings=[];

function AddItems(i,p,r){
    if(p!=undefined)
    prices.push(p);
    if(i!=undefined)
    items.push(i);
    if(r!=undefined)
    ratings.push(r);
}
/*var indexArr=[];
function incrementhearts(t) {
  var index=String(t.id).slice(5,6);
  indexArr.push(index);
  var l=indexArr.length;
  if(indexArr[l-1]!=indexArr[l-2])
  count=0;
  count++;
  t.innerHTML="❤️"+count;
}
var indexArrStar=[]
function incrementstars(t) {
  var index1=String(t.id).slice(4,5);
  indexArrStar.push(index1);
  var l1=indexArrStar.length;
  if(indexArrStar[l1-1]!=indexArrStar[l1-2])
  count1=0;
  count1++;
  t.innerHTML="★"+count1;
}*/
function ShowItems()
{
    
    localStorage.setItem("prices",JSON.stringify(prices)); 
    localStorage.setItem("items",JSON.stringify(items)); 
    localStorage.setItem("ratings",JSON.stringify(ratings))
    //document.getElementById("count").innerText=String(prices.length);
}
const wishPrices=[];
const wishItems=[];
function AddWishItems(a,b){
  if(a!=undefined&&!(wishPrices.includes(a)))
  wishItems.push(a);
  if(b!=undefined&&!(wishItems.includes(b)))
  wishPrices.push(b);
  
}
function ShowWishItems(){
localStorage.setItem("wishItems",JSON.stringify(wishItems));
localStorage.setItem("wishPrices",JSON.stringify(wishPrices));
}


/*$(document).ready(function(){
  $("#heading").hover(function(){
    if(document.getElementById("services").style.display!=="none")
    {
    document.getElementById("services").style.display="none";
    document.getElementById("servicesSection").style.height="20px";
  }else{
    document.getElementById("services").style.display="block";
    document.getElementById("servicesSection").style.height="500px";
  }
})
})*/
function showServices(){
  document.getElementById("services").style.display="block";
  document.getElementById("servicesSection").style.height="500px";
}
function hideServices(){
  document.getElementById("services").style.display="none";
  document.getElementById("servicesSection").style.height="20px";
}