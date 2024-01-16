import React from 'react'

export default function MobileNav() {
  return (
    <div>
           <nav class="mobile-nav">
            <ul class="mobile-nav__items">
                <li class="mobile-nav__item">
                    <a href="products.html">Products</a>
                </li>
                <li class="mobile-nav__item">
                    <a href="contact.html">Contact Page</a>
                </li>
                <li class="mobile-nav__item mobile-nav__item--cta">
                    <a href="#">Shopping Cart</a>
                </li>
            </ul>
        </nav>
        <section id="product-overview">
            <h2>Envision a New Frontier.</h2>
        </section>
    </div>
  )
}
