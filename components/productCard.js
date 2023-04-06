// Getting a handle on the shop Id
let getShop = document.getElementById("shop-container");

let products = [
  {
    id: "Mens_shirt",
    name: "A Black Shirt",
    desc: "A description of a mens shirt",
    price: 45,
    img: "assets/apperal_images/alex-haigh--r67bw_KBWA-unsplash.jpg",
  },
];



const generateProductCard = () => {
  return (getShop.innerHTML = `
  <div class="item">
  <img
  style="max-height: 250px"
    src="./assets/apperal_images/alex-haigh--r67bw_KBWA-unsplash.jpg"
  />
  <div class="item-name">
    <h3>Product title</h3>
  </div>
  <div class="item-description">
    <p>This is the destription</p>
  </div>
  <div class="price-quantity">
    <div class="price">$45</div>
    <div class="button">
    <button><i class="bi bi-dash-circle"></i></button>
    <div class="quantity">0</div>
    <button><i class="bi bi-plus-circle"></i></i></button>
  </div>
  </div>
</div>
`);
};



generateProductCard();
