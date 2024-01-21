import React, { useEffect, useState } from 'react';
import "./products.css";
import Hero from './components/Hero';
import Filter from './components/Filter';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [nameFilter, setNameFilter] = useState('');
  const [priceFilter, setPriceFilter] = useState('');
  const [typeFilter, setTypeFilter] = useState('');


  useEffect(() => {
    fetch('https://ecom-backends.onrender.com/products') // Assuming your API endpoint is /products
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setFilteredProducts(data); // Initialize filteredProducts with all products
      })
      .catch(err => console.log(err));
  }, []);

  // Function to apply filters when either name or price changes
  useEffect(() => {
    applyFilters();
  }, [nameFilter, priceFilter,typeFilter, products]);

  const applyFilters = () => {
  let filteredProducts = products;

  // Filter by name
  if (nameFilter) {
    filteredProducts = filteredProducts.filter(product =>
      product.name.toLowerCase().includes(nameFilter.toLowerCase())
    );
  }

  // Filter by price
  if (priceFilter) {
    filteredProducts = filteredProducts.filter(product =>
      product.price <= parseFloat(priceFilter)
    );
  }

  // Filter by product type
  if (typeFilter) {
    filteredProducts = filteredProducts.filter(product =>
product.name.toLowerCase().includes(typeFilter.toLowerCase())    );
  }

  setFilteredProducts(filteredProducts);
};


  return (
    <>
      <Hero></Hero>
      <Filter
        nameFilter={nameFilter}
        priceFilter={priceFilter}
        setNameFilter={setNameFilter}
        setPriceFilter={setPriceFilter}
        setTypeFilter={setTypeFilter}
      />

      <section id="back">
        <div class="container">
          {filteredProducts.map(product => (
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
