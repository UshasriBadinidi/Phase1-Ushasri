const price=JSON.parse(localStorage.getItem("prices"));
const item=JSON.parse(localStorage.getItem("items"));
const rating=JSON.parse(localStorage.getItem("ratings"));
var sum=0;
const ext=".jpeg";

function cart(){
    for(var i=0;i<=price.length;i++)
    {
      if(item[i]!=undefined&&price[i]!=undefined)
      {
    console.log(price[i]);
    console.log(item[i]);
    const div1=document.createElement("div");
    div1.className="col-6";
    const div2=document.createElement("div");
    div2.className="card h-100";
    var image=document.createElement('img');
    if(item[i]!=undefined)
    image.src="images/" + item[i]+ext;
          console.log(image.src);
    image.style.marginRight="20px"
    image.style.width="100px";
    image.style.height="100px";
    const div3 = document.createElement("div");
    div3.className="card-body";
    div3.style.display="flex";
    div3.style.flexDirection="row";
    const itemName = document.createElement("h6");
    itemName.className="cart-title";
    itemName.style.width="220px"
    if(item[i]!=undefined)
    {
    itemName.innerHTML=item[i];
    }
    const priceValue = document.createElement("h6");
    priceValue.className="card-text";
    priceValue.style.marginRight="50px";
    if(price[i]!=undefined)
    priceValue.innerHTML=price[i]+"$";
   var qty=document.createElement("select");
    qty.innerText="Qty";
    qty.style.height="25px";
    qty.id="select1";
    qty.style.marginRight="50px"
  var option=["qty: 1","qty: 2","qty: 3","qty: 4","qty: 5","qty: 6","qty: 7","qty: 8","qty: 9","qty: 10"];
  for(const val of option)
  {
     var r=document.createElement("option");
     r.value=val;
     r.text=val;
     qty.appendChild(r);
  }
  var close=document.createElement("button");
  close.id="remove";
  close.className="btn-close"
  close.type="button" 
  var rating=document.createElement("p");
  rating.innerHTML=rating[i];
    div3.appendChild(image);
    div3.appendChild(itemName);
    div3.appendChild(priceValue);
    
    div3.appendChild(qty);
   
    div3.appendChild(close);
    
    div2.appendChild(div3);
    div1.appendChild(div2);
    document.getElementById("table").appendChild(div1);
    if(price[i]!=undefined)
    sum=sum+Number(price[i]);
    close.addEventListener("click", function(){
      document.getElementById("table").removeChild(div1);
      if(priceValue.innerHTML!=undefined)
      Add(Number((priceValue.innerHTML).slice(0,2)))
    })
    qty.onchange=function(){
      var ov=Number(qty.value.slice(5,6));
      console.log(qty.value.slice(5,6));
      if(price[i]!=undefined)
  {
    var s=Number(price[i])*ov;
    priceValue.innerHTML=s+"$";
    console.log(s);
  }  
    }
  }
    var removedItemPrice=[];
    var removedSum=0;
    function Add(ele){
      removedItemPrice.push(ele);
      sum=sum-ele;
      console.log(sum);
      q.innerHTML=sum+"$";
    }
  }
   console.log(price.length);
   console.log(item.length);
   const l=document.createElement("div");
   l.className="col-6";
   const m=document.createElement("div");
   m.className="card h-100";
   const n = document.createElement("div");
   n.className="card-body bg-secondary opacity-75";
   n.style.display="flex";
   n.style.flexDirection="row";
   const o = document.createElement("h6");
   o.style.marginRight="35px";
   o.style.marginLeft="220px"
   o.className="cart-title";
   o.innerHTML="Sub total:";
   const q = document.createElement("h6");
   q.className="card-text text-dark";
   q.style.display="block";
   q.innerHTML=sum+"$";  
   n.appendChild(o);
   n.appendChild(q);
   m.appendChild(n);
   l.appendChild(m);   
   document.getElementById("table").appendChild(l);
   var button=document.createElement("button");
   button.style.width="250px";
   button.style.height="70px";
   button.style.marginLeft="180px";
   button.style.marginRight="auto";
   button.style.marginTop="20px";
   button.style.alignContent="center";
   button.style.backgroundColor="green";
   button.style.borderRadius="10px";
   var anchor=document.createElement("a");
   anchor.href="/Users/ushasribadinidi/Desktop/Snackspoint/Checkout.html";
   anchor.innerText="Go to Checkout";
   anchor.style.color="white";
   anchor.style.textDecoration="none";
   button.appendChild(anchor);
   document.getElementById("table").appendChild(button);
  
}

function checkout(){
  for(var i=0;i<=price.length;i++)
    {
      console.log(item[i]);
      var row=document.createElement("div");
      row.className="row";
      var col1=document.createElement("div");
      col1.className="col-2";
      var col2=document.createElement("div");
      col2.className="col-2";
      var para1=document.createElement("p");
      para1.style.width="400px"
      var para2=document.createElement("p");
      para2.style.marginLeft="200px"
      para2.style.marginBottom="30px"
      para2.style.width="100px"
      para2.className="price";
      if(price[i]!=undefined)
      para2.innerHTML=price[i]+"$";
      if(item[i]!=undefined)
      para1.innerHTML=item[i];
      col1.appendChild(para1);
      col2.appendChild(para2);
      row.appendChild(col1);
      row.appendChild(col2);
      document.getElementById("checkout").appendChild(row);
      if(price[i]!=undefined)
      sum=sum+Number(price[i]);
    }
    var hLine=document.createElement("hr");
    document.getElementById("checkout").appendChild(hLine);
    var totalPara1=document.createElement("p");
    totalPara1.style.width="250px"
    totalPara1.innerHTML="Total";
    var totalPara2=document.createElement("p");
    totalPara2.className="priceTotal";
    totalPara2.style.marginLeft="200px"
      totalPara2.style.marginBottom="30px"
      totalPara2.style.width="100px"
    totalPara2.innerHTML=String(sum)+"$";
    var totalRow=document.createElement("div");
    totalRow.className="row";
    var totalCol1=document.createElement("div");
    totalCol1.className="col-2";
    var totalCol2=document.createElement("div");
    totalCol2.className="col-2";
    totalCol1.appendChild(totalPara1);
    totalCol2.appendChild(totalPara2);
    totalRow.appendChild(totalCol1);
    totalRow.appendChild(totalCol2);
    document.getElementById("checkout").appendChild(totalRow);
    document.getElementById("co").innerHTML=price.length;
}

function pay(){
  var sum=0;
  document.getElementById("content1").style.display="none";
  var name=document.createElement("p");
  name.innerHTML=document.getElementById("fname").value;
  var mail=document.createElement("p");
  mail.innerHTML=document.getElementById("email").value;
  var address=document.createElement("p");
  address.innerHTML=document.getElementById("adr").value;
  var city=document.createElement("p");
  city.innerHTML=document.getElementById("city").value;
  var state=document.createElement("p");
  state.innerHTML=document.getElementById("state").value;
  var zipcode=document.createElement("p");
  zipcode.innerHTML=document.getElementById("zip").value;
  var h1=document.createElement("h5");
  h1.innerHTML="Address"
  var button=document.createElement("button");
  button.innerHTML="Pay"
  button.style.width="100%"
  button.style.height="50px"
  button.style.fontSize="20px"
  button.style.color="white"
  button.style.backgroundColor="rgb(21, 112, 21)";
  button.setAttribute("onclick","paymentPage()")
  var content=document.createElement("div");
  content.className="container c";
  content.style.marginLeft="500px"
  content.style.width="400px"
  content.id="content2";
  content.appendChild(h1);
  content.appendChild(name);
  content.appendChild(mail);
  content.appendChild(address);
  content.appendChild(city);
  content.appendChild(state);
  content.appendChild(zipcode);
  var h=document.createElement("h5");
  h.innerHTML="Order summary";
  content.appendChild(h);
  for(var i=0;i<=price.length;i++)
    {
      console.log(item[i]);
      var row=document.createElement("div");
      row.className="row";
      var col1=document.createElement("div");
      col1.className="col-2";
      var col2=document.createElement("div");
      col2.className="col-2";
      var para1=document.createElement("p");
      para1.style.width="400px"
      var para2=document.createElement("p");
      para2.style.marginLeft="200px"
      para2.style.marginBottom="30px"
      para2.style.width="100px"
      para2.className="price";
      if(price[i]!=undefined)
      para2.innerHTML=price[i]+"$";
      if(item[i]!=undefined)
      para1.innerHTML=item[i];
      col1.appendChild(para1);
      col2.appendChild(para2);
      row.appendChild(col1);
      row.appendChild(col2);
  content.appendChild(row);
      if(price[i]!=undefined)
      sum=sum+Number(price[i]);
    }
    var hLine=document.createElement("hr");
    var totalPara1=document.createElement("p");
    totalPara1.style.width="250px"
    totalPara1.innerHTML="Total";
    var totalPara2=document.createElement("p");
    totalPara2.className="priceTotal";
    totalPara2.style.marginLeft="200px"
      totalPara2.style.marginBottom="30px"
      totalPara2.style.width="100px"
    totalPara2.innerHTML=String(sum)+"$";
    var totalRow=document.createElement("div");
    totalRow.className="row";
    var totalCol1=document.createElement("div");
    totalCol1.className="col-2";
    var totalCol2=document.createElement("div");
    totalCol2.className="col-2";
    totalCol1.appendChild(totalPara1);
    totalCol2.appendChild(totalPara2);
    totalRow.appendChild(totalCol1);
    totalRow.appendChild(totalCol2);
    content.appendChild(hLine);
    content.appendChild(totalRow)
  content.appendChild(button);
  document.getElementById("content").appendChild(content);
}

function paymentPage(){
  document.getElementById("heading").style.display="none";
  document.getElementById("content2").style.display="none";
  var content=document.createElement("div");
  content.style.height="800px"
  content.style.marginTop="100px";
  content.style.marginLeft="450px"
  content.style.width="800px"
  content.id="content3";
  var msg=document.createElement("h1");
  msg.innerHTML="Order Placed Successfully";
  var thanksMsg1=document.createElement("p");
  thanksMsg1.innerHTML="Thanks for shopping with us";
  var thanksMsg2=document.createElement("p");
  thanksMsg2.innerHTML="Your order will be shipped to the given address";
  content.appendChild(msg);
  content.appendChild(thanksMsg1);
  content.appendChild(thanksMsg2);
  document.getElementById("content").appendChild(content);
}

function yourOrders(){
  for(var i=0;i<=price.length;i++)
    {
     if(item[i]!==undefined){
  var div1=document.createElement("div");
 
  div1.style.height="150px"
  div1.style.display="flex"
  div1.style.flexDirection="row"
  div1.style.marginLeft="280px"
  div1.style.marginTop="40px"
  div1.style.width="600px"
  div1.style.backgroundColor="white"
  var image=document.createElement('img');
    if(item[i]!=undefined)
    image.src="/Users/ushasribadinidi/Desktop/Snackspoint/images/" + item[i]+ext;

    image.style.marginRight="20px"
    image.style.width="100px";
    image.style.height="100px";
    image.style.marginTop="20px"
    image.style.marginLeft="20px"
    const itemName = document.createElement("h6");
    //t.style.marginRight="70px";
   
    itemName.className="cart-title";
    itemName.style.width="220px"
    itemName.style.marginTop="40px"
    itemName.style.marginRight="20px"
    if(item[i]!=undefined)
    {
    itemName.innerHTML=item[i];
    }
    var orderMsg=document.createElement("p");
    orderMsg.innerHTML="Item delivered successfully";
    orderMsg.style.marginTop="40px"
    var horizontalLine=document.createElement("hr");
    div1.appendChild(image);
    div1.appendChild(itemName);
    div1.appendChild(orderMsg);
   // document.getElementById("yourOrders").style.backgroundColor="white";
    //document.getElementById("yourOrders").style.width="700px";
    document.getElementById("yourOrders").appendChild(div1);
   // document.getElementById("yourOrders").appendChild(horizontalLine);
  }
  }
}

function submit1(){
  document.getElementById("contact").style.display="none";
  var mainDiv=document.createElement("div");
  mainDiv.id="contact2";
  var card=document.createElement("div");
  card.className="col-6";
  var cardBody=document.createElement("div");
  cardBody.className="card h-100";
  var name=document.createElement("p");
  name.innerHTML="Name: "+document.getElementById("fname").value;
  name.style.marginLeft="20px"
  var mail=document.createElement("p");
  mail.innerHTML="Mail: "+document.getElementById("email").value;
  mail.style.marginLeft="20px"
  var address=document.createElement("p");
  address.innerHTML="Address: "+document.getElementById("adr").value;
  address.style.marginLeft="20px"
  var city=document.createElement("p");
  city.innerHTML="City: "+document.getElementById("city").value;
  city.style.marginLeft="20px"
  var mobile=document.createElement("p");
  mobile.innerHTML="Mobile: "+document.getElementById("mobile").value;
  mobile.style.marginLeft="20px"
  var state=document.createElement("p");
  state.innerHTML="State: "+document.getElementById("state").value;
  state.style.marginLeft="20px"
  var zipcode=document.createElement("p");
  zipcode.innerHTML="Zipcode: "+document.getElementById("zip").value;
  zipcode.style.marginLeft="20px"
  var h1=document.createElement("h1");
  h1.innerHTML="Details";
  cardBody.appendChild(name);
  cardBody.appendChild(mail);
  cardBody.appendChild(address);
  cardBody.appendChild(city);
  cardBody.appendChild(state);
  cardBody.appendChild(zipcode);
  card.appendChild(cardBody);
  mainDiv.appendChild(card);
  document.getElementById("contactInfo").appendChild(mainDiv);
 }
