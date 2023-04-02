let container = document.getElementById("buy-container");

let buyItem = JSON.parse(localStorage.getItem('buy-item')) || [];



Display(buyItem);

function Display(buyItem) {

    container.innerHTML = "";

    buyItem.forEach((element, index) => {

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


        remove.addEventListener('click', function () {

            buyItem.splice(index, 1);

            localStorage.setItem('buy-item', JSON.stringify(buyItem));

            Display(buyItem)
            window.location.reload()
        })

        increment.addEventListener('click', function () {

            element.quantity++;

            localStorage.setItem("buy-item", JSON.stringify(buyItem));

            Display(buyItem)
        })

        decrement.addEventListener("click", function () {

            if (element.quantity > 1) {

                element.quantity--;

                localStorage.setItem("buy-item", JSON.stringify(buyItem));

                Display(buyItem);
            }
        })



        card.append(img, category, Brand, discount, description, price, rating, increment, quantity, decrement, remove);

        container.append(card);

        let buyTotal = document.getElementById("buy-total");

        let sum = 0;

        for (let i = 0; i < buyItem.length; i++) {

            sum += buyItem[i].quantity * buyItem[i].price;


        }
        buyTotal.innerText = sum;




    });


}


///////////////////input form////////////////////


document.querySelector("form").addEventListener("submit", submit)

function submit() {

    event.preventDefault()

    alert("OTP has been Send to your Register Mobile No.");

    window.location.href = "otp.html"
    // let otp = Math.floor(Math.random() * 500)

}