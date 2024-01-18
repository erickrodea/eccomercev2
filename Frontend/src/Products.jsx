import React, { useEffect, useState } from 'react';
import "./products.css";
import Hero from './components/Hero';

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/products') // Assuming your API endpoint is /products
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.log(err));
  }, []);

  return (
    <>
      <Hero></Hero>
    <section id="back">
    <div class="container">
        {products.map(product => (
            <div key={product.id} class="product">
                <a href="#">
                    <img src={product.image} alt={product.name} />
                </a>
                <div class="description">
                    <h4>{product.name}</h4>
                    <h5>${product.price}</h5>
                    <h5>{product.description}</h5>
                </div>
            </div>
        ))}
    </div>
</section>
</>
  );
}
