// Getting a handle on the shop Id
let getShop = document.getElementById("shop-container");

let products = [
  {
    id: "Mens_shirt_ss",
    color: "Black",
    name: "El Capitan",
    quantity: 10,
    price: 30,
    desc: "Classic Fit Logo Tee",
    img: "/assets/apperal_images/alex-haigh--r67bw_KBWA-unsplash.jpg",
    alt: "A picture of male model in the Mens Graphic Tee",
  },
  {
    id: "Womens_shirt_ls",
    name: "Lucky Lady",
    color: "White",
    price: 45,
    desc: " Women's Long Sleeve",
    img: "/assets/apperal_images/alex-haigh-CBn0QAL2q1A-unsplash.jpg",
    alt: "Nothing to describe",
  },
  {
    id: "Mens_shirt_ss",
    name: "Rock Style",
    color: "White",
    price: 30,
    desc: "Classic Fit Logo Tee",
    img: "assets/apperal_images/alex-haigh-fUxGacFLsC0-unsplash.jpg",
    alt: "Nothing to describe",
  },
  {
    id: "Mens_shirt_ls",
    name: "Calivera",
    color: "White",
    price: 45,
    desc: "Classic Fit Long-Sleeve",
    img: "assets/apperal_images/alex-haigh-S9y9Z5gTWGY-unsplash.jpg",
    alt: "Nothing to describe",
  },
  {
    id: "Mens_shirt_ls",
    name: "Triple Down",
    color: "White",
    price: 45,
    desc: "Classic Fit Long-Sleeve",
    img: "assets/apperal_images/alex-haigh-uHTSYUwXjLM-unsplash.jpg",
    alt: "Nothing to describe",
  },
  {
    id: "Mens_hoodie",
    name: "Mighty Hoodie",
    color: "White",
    price: 60,
    desc: "Mens / Women's Hoodie",
    img: "assets/apperal_images/alex-haigh-zrp9Iu5bF1w-unsplash.jpg",
    alt: "Nothing to describe",
  },
];

const generateProductCard = () => {
  return (getShop.innerHTML = products
    .map((product) => {
      let { id, name, desc, price, img, alt } = product;
      return `
    <div id=product-id-${id} class="item">
      <img max-height="250px" src=${img} alt=${alt}>
      <div class="item-name">
        <h3>${name}</h3>
        <div class='item-description'>
          <p>${desc}</p>
        </div>
        <div class="price-quantity">
          <h2>$ ${price} </h2>
          <div class="button">
          <button><i class="bi bi-dash-circle" onclick="decrement()"></i></button>
          <div id=${id} class="quantity">0</div>
          <button><i class="bi bi-plus-circle" onclick="increment()"></i></i></button>
        </div>
        </div>
      </div>
    </div>
`;
    })
    .join(""));
};

generateProductCard();

//  The functions below update the quantity class in the above function
const increment = () => {
  console.log(" You pressed the Increment button");
};

const decrement = () => {
  console.log(" You pressed the Decrement button");
};

const update = () => {};
