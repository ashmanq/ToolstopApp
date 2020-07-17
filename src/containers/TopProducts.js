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

  // The code for pageRender created conditional page rendering depending on whether
  // a category has been selected, or not.
  let pageRender;

  if(brand != null) {
    pageRender = <Category onSelect = { handleBrandSelect } products = { products }/>
  } else {
    pageRender = <Banners onSelect = { handleBrandSelect }/>;
  }

  return (
    <div className="product-section">
      {pageRender}
    </div>

  )
}

export default TopProducts;
