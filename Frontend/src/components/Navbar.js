import React from "react";
import Mobile from "./mNav";

export default function Navbar() {
  return (
    <div>
      <header class="main-header">
        <Mobile></Mobile>
        <div>
          <button class="toggle-button">{""}</button>
          <a href="/" class="main-header__brand">
            <img src="envision Background Removed.png" alt="Envision logo" />
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
