
class Milktea {
    /**
     * @param {string} img
     * @param {string} name 
     * @param {number} price 
     * @param {number} stock 
     */
    constructor(img, name, price, stock, description) {
        this.img = img;
        this.name = name;
        this.price = price;
        this.stock = stock;
        this.description = description;
    }
}

class ShopMilktea {
    // /**
    //  * 
    //  * @param {string} name 
    //  */
    constructor() {
        this.items = [];
        this.cart = [];
    }
    regItem(img, name, price, stock, description) {
        this.items.push(new Milktea(img, name, price, stock, description));
    }

    /**
     * 
     * @returns {Milktea[]}
     */
    getItems() {
        return this.items;
    }

    addItem(pName) {
        let foundItem = this.items.find((item_inStore) => item_inStore.name === pName);      
        if (1 > foundItem.stock) {
            alert("Out of stock");
            throw new Error("Out of stock");
        }
        this.cart.push({
            name: foundItem.name,
            quantity: 1,
            price: foundItem.price,
        });
        console.log(this.cart)
        foundItem.stock -= 1;
        return new Milktea(foundItem.img,foundItem.name,foundItem.price,foundItem.stock,foundItem.description);
    }

    totalPrice(){
        let total = 0;
        for(let i = 0; i < this.cart.length; i++){
            total += this.cart[i].price * this.cart[i].quantity;
        }
        this.cart = [];
        return total;
    }
}

let myShop = new ShopMilktea("My Shop");
myShop.regItem(
    "k1.jpg",
    "Hồng Trà Ceylon Latte Size L",
    98000,
    20,
    "This is description");
myShop.regItem(
    "k2.jpg",
    "Lục trà đào Size M",
    65000,
    10,
    "This is description");
myShop.regItem(
    "k3.jpg",
    "Lục Trà Sữa Mật Ong Size M",
    65000,
    5,
    "This is description");


function createNewItemHtml(Milktea) {
    return `
    <section class="wrapper">
            <div class="container">
              <div class="row" style="padding-left: 0px;">
                <div class="col-sm-4" >
                  <div class="card" >
                      <figure  class="card__image">
                        <img src="${Milktea.img}" alt="Short description">
                      </figure>
                      <div class="card__body">
                        <h3 class="card__name">KOI THÉ</h3>
                        <p class="card__job">Milk Tea</p>
                        <p class="name">${Milktea.name} </p>
                        <p class="card__bio">${Milktea.price} </p>
                        <p class="card__bio">${Milktea.stock} </p>
                       

                      </div>
                      <div class="card__footer">
                        <p class="card__date">${Milktea.description}</p>
                      </div>
                      <h3 class="button">Add To Cart</h3>
                    </div>
                   
                </div>
             </div>
            </div>
            </section>
    `
}                               

let listShopItem = document.getElementById("list-parent");
listShopItem.innerHTML = "";

for (let item of myShop.getItems()) {
    console.log(item);
    listShopItem.innerHTML += createNewItemHtml(item);
    
}
let perNames = document.getElementsByClassName('name');

let adds = document.getElementsByClassName('button');
for(let i = 0; i < adds.length; i++) {
    let item = adds[i];
    item.onclick = function() {
        for(let j = 0; j < perNames.length; j++){
            let pName = perNames[i];
            myShop.addItem(pName.textContent);
            break;
        }
    }
}

let Buy = document.getElementById('Buy');
Buy.onclick = function(){
    alert(myShop.totalPrice());
}



