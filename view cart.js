function raji (){
var x = document.getElementsByClassName("pb-cart-item-add");
var y = [];
for(var i=0; i<(x.length); i++)
{
   y[i] = 
          {
           "product_name": x[i].childNodes[3].childNodes[1].childNodes[1].innerText,
           "product_qty": x[i].childNodes[3].childNodes[7].childNodes[1].childNodes[1].innerText,
           "unit_price": parseInt(document.getElementsByClassName("pb-cart-item-add")[i].childNodes[3].childNodes[1].children[1].innerText.replace(/[^\x00-\x7F]/g, "").trim())/parseInt(x[i].childNodes[3].childNodes[7].childNodes[1].childNodes[1].innerText),
           "line_item_total": document.getElementsByClassName("pb-cart-item-add")[i].childNodes[3].childNodes[1].children[1].innerText.replace(/[^\x00-\x7F]/g, "").trim()


          };
}

var obj = {
"total_price": 
document.getElementsByClassName("pb-cart-summery-wrapper")[0].childNodes[1].childNodes[1].childNodes[1].childNodes[1].childNodes[12].childNodes[1].childNodes[1].innerText,
"items":  y
};

console.log(obj);
}
 window.onload = raji();
document.body.addEventListener('DOMSubtreeModified', raji);
