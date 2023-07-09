const price=JSON.parse(localStorage.getItem("wishPrices"));
const item=JSON.parse(localStorage.getItem("wishItems"));
ext=".jpeg";
function wishList(){
    for(var i=0;i<=price.length;i++)
    {
    if(price[i]!=undefined&&item[i]!=undefined)
    {
    console.log(price[i]);
    console.log(item[i]);
    const x=document.createElement("div");
    x.className="col-4";
   // x.style.border="1px solid black";
   // x.style.margin="2px 2px 2px 2px";
    const v=document.createElement("div");
    v.className="card h-100";
    var im=document.createElement('img');
    if(item[i]!=undefined)
    im.src="SnacksPoint/images/" + item[i]+ext;

    im.style.marginRight="20px"
    im.style.width="100px";
    im.style.height="100px";
   // v.style.border="1px solid black";
    //v.style.padding="4px 4px 4px 4px";
    const z = document.createElement("div");
    z.className="card-body";
    z.style.display="flex";
    z.style.flexDirection="row";
    const t = document.createElement("h6");
    //t.style.marginRight="70px";
   
    t.className="cart-title";
    t.style.width="240px"
    if(item[i]!=undefined)
    {
    t.innerHTML=item[i];
    }
    //z.style.border="1px solid black";
    //z.style.padding="10px 10px 10px 10px";
 
    const y = document.createElement("h6");
    y,className="card-text";
    y.style.marginRight="30px";
   // y.style.border="1px solid black";
    //y.style.padding="10px 10px 10px 10px";
    
   
  var close=document.createElement("button");
  close.id="remove";
  close.className="btn-close"
  close.type="button"
  
  
  /*if()
  var ov=qty.option[qty.selectedIndex].value;
  if(price[i]!=undefined)
  {
    var s=Number(price[i])*ov;
    y.innerHTML=s+"$";
    console.log(s);
  }*/
   // var p=prices[i].slice(-3);
   if(price[i]!=undefined)
   y.innerHTML=price[i]+"$";
   z.appendChild(im);
    z.appendChild(t);
    z.appendChild(y);
    
    
    z.appendChild(close);
    v.appendChild(z);
    x.appendChild(v);
        

    /*const u = document.createTextNode(prices[i]+"$");
   // v.appendChild(i);
    //z.appendChild(t);
    y.appendChild(u);
    //x.appendChild(v);
    x.appendChild(z);
    x.appendChild(y);*/
    
    document.getElementById("wish").appendChild(x);
    
   
    close.addEventListener("click", function(){
      document.getElementById("wish").removeChild(x);
      
   
    
    })
    }
    }
   
    
    
   /* const a = document.createElement("TR");
    a.style.border="1px solid black";
    a.style.padding="10px 10px 10px 10px";
    const e = document.createElement("TD");
    const b=document.createTextNode("Total");
    const c = document.createElement("TD");
    c.style.border="1px solid black";
    c.style.padding="10px 10px 10px 10px";
    const d=document.createTextNode(String(sum)+"$");
    e.appendChild(b);
    c.appendChild(d);
    a.appendChild(e);
    a.appendChild(c);
    console.log(sum);
    document.getElementById("cart").appendChild(a);
   return 1;*/
  
}
