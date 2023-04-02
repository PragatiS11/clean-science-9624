
///*******************************SlideShow*************************************************************////

var arr1 = [
    "https://www.jiomart.com/images/cms/aw_rbslider/slides/1679483132_Desktop_1680x320_V1.jpg",
    "https://www.jiomart.com/images/cms/aw_rbslider/slides/1680104444_Sam.jpg",
    "https://www.jiomart.com/images/cms/aw_rbslider/slides/1680001267_Tv_Banner_1680x320.jpg",
    "https://www.jiomart.com/images/cms/aw_rbslider/slides/1679842956_Top_Deals_on_Dry_Fruits_desktop.jpg",
    "https://www.jiomart.com/images/cms/aw_rbslider/slides/1679934876_Air_Conditioners_and_Refrigerators_Desktop.jpg"
  ]


  let image = document.querySelector("#slideshow > img ");
  let counter = 0;
  image.setAttribute("src", arr1[counter]);

  setInterval(function () {
    counter++;
    if (counter === arr1.length) {
      counter = 0;
    }
    image.setAttribute("src", arr1[counter])
  }, 2000)

  //card scroll bar start

  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  const cardsContainer = document.querySelector(".cards-container");

  let scrollPosition = 0;
  const cardWidth = 320;

  nextBtn.addEventListener("click", () => {
    cardsContainer.scrollTo({
      left: (scrollPosition += cardWidth),
      behavior: "smooth",
    });

    checkButtons();
  });

  prevBtn.addEventListener("click", () => {
    cardsContainer.scrollTo({
      left: (scrollPosition -= cardWidth),
      behavior: "smooth",
    });

    checkButtons();
  });

  function checkButtons() {
    prevBtn.disabled = scrollPosition === 0;
    nextBtn.disabled =
      scrollPosition >= cardsContainer.scrollWidth - cardsContainer.clientWidth;
  }

  checkButtons();

  //card scroll bar end

  // ***********************************************Main Data********************************************************

  let API = "https://dummyjson.com/products";

  let container = document.querySelector(".container");
  let cartItem = JSON.parse(localStorage.getItem('cart')) || [];
  let data;
  async function fetchData() {
    try {
      let res = await fetch(API);

      res = await res.json();
      data = res.products;
      // console.log(data);
      Display(data);

    } catch (error) {
      console.log(error)
    }
  }

  fetchData();

  function Display(data) {

    container.innerHTML = "";

    data.forEach((element, index) => {

      //console.log(element);

      let card = document.createElement('div');
      let img = document.createElement('img');
      let category = document.createElement('h2');
      let Brand = document.createElement('h3');
      let discount = document.createElement('h5');
      let description = document.createElement('p');
      let price = document.createElement('h4');
      let rating = document.createElement("h5");
      let addToCart = document.createElement('button');

      img.src = element.images[0];
      category.innerText = element.category;
      Brand.innerText = element.brand;
      discount.innerText = ` Disc. -${element.discountPercentage}%`;
      description.innerText = element.description;
      price.innerText = `Price- ${element.price}$`;
      rating.innerText = `Rating- ${element.rating}`;
      addToCart.innerText = "Add To Cart";

      card.append(img, category, Brand, discount, description, price, rating, addToCart);

      container.append(card);

      addToCart.addEventListener('click', function () {

        if (checkAvailable(element)) {

         
         // addToCart.innerText = "Added";
          alert("Product Already in Cart")
        }
        else {

          cartItem.push({ ...element, quantity: 1 });

          localStorage.setItem('cart', JSON.stringify(cartItem));

          alert('Product Added To Cart')
         // addToCart.innerText = "Added";

        }

      })


    });


  }

  function checkAvailable(element) {

    for (let i = 0; i < cartItem.length; i++) {

      if (cartItem[i].id == element.id) {

        return true
      }
    }

    return false
  }

  let filtered = document.getElementById("filter");

  filtered.addEventListener("change", function () {
    if (filtered.value === "") {
      Display(data);
    }
    else {
      let filterData = data.filter(function (element) {

        return element.category === filtered.value
      })

      Display(filterData);
    }

  });

