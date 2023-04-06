const getNavbar = document.getElementById("navbar");

let navbar = () => {
  return (getNavbar.innerHTML = `
  <div class="navbar-container">
    <div class="navbar-logo">
      <a href="/index.html">
        <img
          style="max-height: 50px"
          src="/assets/images/SPOILER_2ffnww.jpg"
          alt="Stella's Market brand logo"
        />
        <p>Stellas Market</p>
      </a>
    </div>
    <div class="navbar-links">
      <ul>
        <li><a href="#">Products</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Contact</a></li>
      </ul>

      <div class="cart">
        <i class="bi bi-cart4"></i>
        <div class="cart-count">0</div>
      </div>
    </div>
  </div>`);
};

navbar();
