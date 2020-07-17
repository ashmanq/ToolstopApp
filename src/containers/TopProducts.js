import React, { useState, useEffect } from 'react';
import Banners from '../components/Banners.js';
import Category from '../components/Category.js';

function TopProducts() {
  const [products, setProducts] = useState([]);
  const [brand, setBrand] = useState(null);

  const handleBrandSelect = (selectedBrand) => {
    setBrand(selectedBrand);
  }

  useEffect(() => {
    if (brand != null) {
      getProducts(brand);
    } else {
      setProducts([]);
    }
  }, [brand]);

  // Used to see when products list is changed
  useEffect(() => {
    console.log(products);
  }, [products]);

  const getProducts = (brandSearch) => {
    let url = "https://product-fetch-toolstop.herokuapp.com/top40";

    if(brandSearch !== "all") {
      url = `https://product-fetch-toolstop.herokuapp.com/top40/${brandSearch}`
    }

    console.log("fetching...");
    fetch(url)
      .then(res => res.json())
      .then(res => {
        setProducts(res.data);
      });
  }

  // if(!products) return "waiting...";

  return (
    <div>
      <h2>Top 40</h2>
      <Banners onSelect = { handleBrandSelect }/>
      <Category onSelect = { handleBrandSelect } products = { products }/>
    </div>

  )
}

export default TopProducts;
