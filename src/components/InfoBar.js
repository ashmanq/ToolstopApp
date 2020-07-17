import React from 'react';

function InfoBar() {

  return(
    <div className="info-bar">
      <div className="info-bar-item">
          <img alt="Free Delivery" style={{width: "38px", height:"38px"}} src="https://cdn11.bigcommerce.com/s-tod2uy9g96/product_images/uploaded_images/usp-delivery.png?t=1575301748&_ga=2.134744497.1906462864.1575272837-379394622.1575272837"></img>
          Free Delivery on orders over £99
      </div>
      <div className="info-bar-item">
        <img alt="Next Working Day Delivery" style={{width: "26px", height:"26px"}} src="https://cdn11.bigcommerce.com/s-tod2uy9g96/product_images/uploaded_images/usp-nextday.png?t=1575301749&_ga=2.130367951.1906462864.1575272837-379394622.1575272837"></img>
        Next Working Day Delivery
      </div>
      <div className="info-bar-item">
        <img alt="Finance" style={{width: "20px", height:"20px"}} src="https://cdn11.bigcommerce.com/s-tod2uy9g96/product_images/uploaded_images/usp-finance.png?t=1575301749&_ga=2.209134674.1906462864.1575272837-379394622.1575272837"></img>
        Finance Available over £150
      </div>
      <div className="info-bar-item">
        <img alt="Returns" style={{width: "34px", height:"34px"}} src="https://cdn11.bigcommerce.com/s-tod2uy9g96/product_images/uploaded_images/usp-returns.png?t=1575301750&_ga=2.205458768.1906462864.1575272837-379394622.1575272837"></img>
        FREE 60 Day Returns
      </div>
    </div>
  )
}

export default InfoBar;
