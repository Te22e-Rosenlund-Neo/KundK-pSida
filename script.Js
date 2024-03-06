let totalprice = 0;
let Items = [];
const nyckel = "Items";
const nyckelprice = "Total";

function AddCart(price, name){
    let item = {
        Name: name,
        Price: price
    };

    totalprice += price;
    document.getElementById("ItemCount").innerHTML = totalprice + "kr";
    if(!Items)
    {
        Items=[];
    }
    Items.push(item);

    let json  = JSON.stringify(Items);
    window.localStorage.setItem(nyckel, json);  
    let json2 = JSON.stringify(totalprice);
    window.localStorage.setItem(nyckelprice, json2);
    Display();
}

function ReadLocalStorage(){
    let Json_data = window.localStorage.getItem(nyckel);
    Items = JSON.parse(Json_data);
    let Json_data_price = window.localStorage.getItem(nyckelprice);
    totalprice = JSON.parse(Json_data_price);
    document.getElementById("ItemCount").innerHTML = totalprice + "kr";
    Display();
}

function Display(){

    document.querySelector(".dropdowncontent").innerHTML="";

    for(let i = Items.length-1; i >= 0; i--){
        
        let ItemName = document.createElement("h2");
        let ItemPrice = document.createElement("h3");
        ItemName.textContent = Items[i].Name;
        ItemPrice.textContent = Items[i].Price;
        document.querySelector(".dropdowncontent").appendChild(ItemName);
        document.querySelector(".dropdowncontent").appendChild(ItemPrice);

}
}
function ResetCart(){
    Items = [];
    totalprice = 0;
    Display();
    document.getElementById("ItemCount").innerHTML = totalprice + "kr";
    let json  = JSON.stringify(Items);
    window.localStorage.setItem(nyckel, json);  
    let json2 = JSON.stringify(totalprice);
    window.localStorage.setItem(nyckelprice, json2);


}





