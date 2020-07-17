import React from 'react';

function Category(props) {

  const products = props.products.map((product, index) => {
    return <p key={index}>{product.name}</p>
  });

  const handleSelect = () => {
    props.onSelect(null);
  }

  return(
    <>
      <span style={{float:"left"}} onClick={()=>handleSelect()}>Go Back</span>
      {products}
    </>
  )
}

export default Category;
