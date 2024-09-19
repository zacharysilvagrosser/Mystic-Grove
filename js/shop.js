$('.slick-shop').slick({
    slidesToShow: 5,
    slidesToScroll: 5,
    prevArrow: '<i class="fa-solid fa-arrow-left fa-2x"></i>',
    nextArrow: '<i class="fa-solid fa-arrow-right fa-2x"></i>',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
});
const shopItems = document.querySelectorAll(".shop-item");
const itemImgs = document.querySelectorAll(".item-img");
const itemNames = document.querySelectorAll(".item-name");
const itemPrices = document.querySelectorAll(".item-price");
let [cartItemImgs, cartItemNames, cartItemPrices] = [[], [], []];
for (let i = 0; i < shopItems.length; i++) {
  shopItems[i].addEventListener("click", () => {
    cartItemImgs.push(itemImgs[i].getAttribute("src"));
    cartItemNames.push(itemNames[i].innerHTML);
    cartItemPrices.push(itemPrices[i].innerText);

    document.getElementById("shop-container").classList.add("dim");
    document.getElementById("cart").style.display = "flex";
    document.getElementById("cart").innerHTML += `
      <div class="cart-item row">
        <img class="col-4" src=${cartItemImgs[cartItemImgs.length - 1]}>
        <div class="col-5">
          <p>${cartItemNames[cartItemNames.length - 1]}</p>
          <label for="quantity">Quantity: </label>
          <input class="quantity" type="number" value="1" min="1" max="3">
          <span> at ${cartItemPrices[cartItemPrices.length - 1]}</span>
        </div>
        <p class="col-2 cart-price">${cartItemPrices[cartItemPrices.length - 1]}</p>
        <span class="close">X</span>
      </div>`;
      const closeButtons = document.querySelectorAll(".close");
      closeButtons.forEach(i => {
        i.addEventListener("click", () => {
          localStorage.setItem('cartItemImgs', JSON.stringify(cartItemImgs));
          localStorage.setItem('cartItemNames', JSON.stringify(cartItemNames));
          localStorage.setItem('cartItemPrices', JSON.stringify(cartItemPrices));
          console.log(JSON.parse((localStorage.getItem('cartItemImgs'))));
          console.log(JSON.parse((localStorage.getItem('cartItemNames'))));
          console.log(JSON.parse((localStorage.getItem('cartItemPrices'))));
        });
      });
  });
}
localStorage.clear();