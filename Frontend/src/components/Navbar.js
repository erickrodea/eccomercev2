import React from "react";

export default function Navbar() {
  return (
    <div>
      <header class="main-header">
        <div>
          <button class="toggle-button">
            <span class="toggle-button__bar"></span>
            <span class="toggle-button__bar"></span>
            <span class="toggle-button__bar"></span>
          </button>
          <a href="/" class="main-header__brand">
            Home
          </a>
        </div>
        <nav class="main-nav">
          <ul class="main-nav__items">
            <li class="main-nav__item">
              <a href="Products">Products</a>
            </li>
            <li class="main-nav__item">
              <a href="Contact">Contact Page</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
