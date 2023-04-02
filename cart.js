let container = document.getElementById("cart-container");

let cartData = JSON.parse(localStorage.getItem('cart')) || [];

let buyItem = JSON.parse(localStorage.getItem('buy-item'))|| [];

Display(cartData);

function Display(cartData) {

  container.innerHTML = "";

  cartData.forEach((element, index) => {

    //console.log(element);

    let card = document.createElement('div');
    let img = document.createElement('img');
    let category = document.createElement('h2');
    let Brand = document.createElement('h3');
    let discount = document.createElement('h5');
    let description = document.createElement('p');
    let price = document.createElement('h4');
    let rating = document.createElement("h5");
    let increment = document.createElement("button");
    let quantity = document.createElement('span');
    let decrement = document.createElement("button");
    let remove = document.createElement("button");
    let Buy = document.createElement("button");

    img.src = element.images[0];
    category.innerText = element.category;
    Brand.innerText = element.brand;
    discount.innerText = ` Disc. -${element.discountPercentage}%`;
    description.innerText = element.description;
    price.innerText = `Price- ${element.price}$`;
    rating.innerText = `Rating- ${element.rating}`;
    increment.innerText = "+";
    quantity.innerText = element.quantity;
    decrement.innerText = "-";
    remove.innerText = "Remove";
    Buy.innerText = "Buy Now";

    Buy.addEventListener('click', function () {

        buyItem.push({ ...element, quantity: 1 });

        localStorage.setItem('buy-item', JSON.stringify(buyItem));

        alert('Ready to buy')


    })

    remove.addEventListener('click', function () {

      cartData.splice(index, 1);

      localStorage.setItem('cart', JSON.stringify(cartData));

      Display(cartData)
    })

    increment.addEventListener('click', function () {

      element.quantity++;

      localStorage.setItem("cart", JSON.stringify(cartData));

      Display(cartData)
    })

    decrement.addEventListener("click", function () {

      if (element.quantity > 1) {

        element.quantity--;

        localStorage.setItem("cart", JSON.stringify(cartData));

        Display(cartData)
      }
    })



    card.append(img, category, Brand, discount, description, price, rating, increment, quantity, decrement, remove, Buy);

    container.append(card);

    let cartTotal = document.getElementById("cart-total");

    let sum = 0;

    for (let i = 0; i < cartData.length; i++) {

      sum += cartData[i].quantity * cartData[i].price;


    }
    cartTotal.innerText = sum;




  });


}