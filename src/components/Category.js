import React from 'react';

function Category(props) {

  if(!props.products.length) return (
    <div className="spinner">
      <div className="bounce1"></div>
      <div className="bounce2"></div>
      <div className="bounce3"></div>
      </div>
    );

  const products = props.products.map((product) => {

    const priceIncVat = (product.price * 1.2).toFixed(2);
    const imageIndex = product.images.length - 1;
    const url = `https://www.toolstop.co.uk${product.custom_url.url}`;

    return (

      <div key={product.id} className="product">
        <a className="product-link" href={url}>
          <img className="product-image" alt={product.name} src={product.images[imageIndex]["url_thumbnail"]}></img>
          <p>{product.name}</p>
          <p className="price-inc-vat">£{priceIncVat}</p>
          <p>£{product.price} ex. VAT</p>
        </a>
      </div>

    )
  });

  const handleSelect = () => {
    props.onSelect(null);
  }

  return(
    <div className="category-container">
      <div className="go-back" style={{float:"left"}} onClick={()=>handleSelect()}>	&larr; Go Back</div>
      <div className="category-list">
        {products}
      </div>
    </div>
  )
}

export default Category;
