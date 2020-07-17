import React from 'react';

function LogoBar() {

  return(
    <div className="logo-bar">
      <div className="logo-bar-item">
        <img className="logo" src="toolstop_logo.png" href="http://www.toolstop.co.uk" alt="Toolstop home page"></img>
      </div>
      <div className="logo-bar-item">
        <input className="search" type="text" placeholder="Search product or brand..."></input>
      </div>
      <div className="logo-bar-item">
        <div className="navuser">
          <p className="navuser-item">Sign in</p>
          <img className="navuser-item" src="https://cdn11.bigcommerce.com/s-7holhynnib/stencil/27392380-aa39-0138-c8b6-0242ac11000f/e/84f1af10-5a49-0138-a4a4-0242ac11000c/img/svg/SignedOut.svg" alt="Your profile"></img>
          <img className="navuser-item" src="https://cdn11.bigcommerce.com/s-7holhynnib/stencil/27392380-aa39-0138-c8b6-0242ac11000f/e/84f1af10-5a49-0138-a4a4-0242ac11000c/img/svg/BasketEmpty.svg" alt="Your cart"></img>
        </div>
      </div>
    </div>
  )
}

export default LogoBar;
