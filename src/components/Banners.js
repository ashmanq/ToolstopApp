import React from 'react';


function Banners(props) {

  const handleSelect = (brand) => {
    props.onSelect(brand)
  }

  return (
    <>
      <h1>Top 40</h1>
      <div className="banners">
        <img className="top-40-banner" onClick={() => {handleSelect("all")}} src="https://cdn11.bigcommerce.com/s-7holhynnib/product_images/uploaded_images/top-40-banner.png" alt="Top 40 products" />
        <img className="top-20-banner" onClick={() => {handleSelect("makita")}} src="https://cdn11.bigcommerce.com/s-7holhynnib/product_images/uploaded_images/top-20-logos-makita-1.png?imwidth=300" alt="Makita Top 20" />
        <img className="top-20-banner" onClick={() => {handleSelect("dewalt")}} src="https://cdn11.bigcommerce.com/s-7holhynnib/product_images/uploaded_images/top-20-logos-dewalt-1.png?imwidth=300" alt="Dewalt Top 20" />
        <img className="top-20-banner" onClick={() => {handleSelect("Hikoki")}} src="https://cdn11.bigcommerce.com/s-7holhynnib/product_images/uploaded_images/top-20-logos-hikoki-1.png?imwidth=300" alt="Hikoki Top 20" />
        <img className="top-20-banner" onClick={() => {handleSelect("bosch")}} src="https://cdn11.bigcommerce.com/s-7holhynnib/product_images/uploaded_images/top-20-logos-bosch-1.png?imwidth=300" alt="Bosch Top 20" />
        <img className="top-20-banner" onClick={() => {handleSelect("bahco")}} src="https://cdn11.bigcommerce.com/s-7holhynnib/product_images/uploaded_images/top-20-logos-bahco-1.png?imwidth=300" alt="Bahco Top 20" />
        <img className="top-20-banner" onClick={() => {handleSelect("metabo")}} src="https://cdn11.bigcommerce.com/s-7holhynnib/product_images/uploaded_images/top-20-logos-metabo-1.png?imwidth=300" alt="Metabo Top 20" />
        <img className="top-20-banner" onClick={() => {handleSelect("stanley")}} src="https://cdn11.bigcommerce.com/s-7holhynnib/product_images/uploaded_images/top-20-logos-stanley-1.png?imwidth=300" alt="Stanley Top 20" />
        <img className="top-20-banner" onClick={() => {handleSelect("evolution")}} src="https://cdn11.bigcommerce.com/s-7holhynnib/product_images/uploaded_images/top-20-logos-evolution-1.png?imwidth=300" alt="Evolution Top 20" />
      </div>
    </>
  );
}

export default Banners;
