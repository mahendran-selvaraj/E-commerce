import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css'; 

export default function Menu() {
  return (
    <div className="container mt-3">
      <div className="row justify-content-center gy-3">
        <div className="col-6 col-sm-3 col-md-2 col-lg-2 d-flex justify-content-center">
          <Link to="/fashion" className="item text-center text-decoration-none text-dark">
            <img 
              src="./tshirt.png" 
              alt="Fashion" 
              className="img-fluid rounded-circle menu-image"
            />
            <p>Fashion</p>
          </Link>
        </div>
        
        <div className="col-6 col-sm-3 col-md-2 col-lg-2 d-flex justify-content-center">
          <Link to="/mobile" className="item text-center text-decoration-none text-dark">
            <img 
              src="https://images.samsung.com/is/image/samsung/assets/in/explore/brand/5-best-android-mobile-phones-2022-in-india/banner-mobile-720x761-080422.jpg?$720_N_JPG$" 
              alt="Mobiles" 
              className="img-fluid rounded-circle menu-image"
            />
            <p>Mobiles</p>
          </Link>
        </div>

        <div className="col-6 col-sm-3 col-md-2 col-lg-2 d-flex justify-content-center">
          <Link to="/appliances" className="item text-center text-decoration-none text-dark">
            <img 
              src="https://travelifestaybetter.com/wp-content/uploads/2022/02/set-of-contemporary-house-appliances-isolated-on-white-picture-id1174598609.jpg" 
              alt="Appliances" 
              className="img-fluid rounded-circle menu-image"
            />
            <p>Appliances</p>
          </Link>
        </div>

        <div className="col-6 col-sm-3 col-md-2 col-lg-2 d-flex justify-content-center">
          <Link to="/groceries" className="item text-center text-decoration-none text-dark">
            <img 
              src="https://png.pngtree.com/png-vector/20241108/ourmid/pngtree-supermarket-shopping-cart-with-fresh-groceries-png-image_14304601.png" 
              alt="Groceries" 
              className="img-fluid rounded-circle menu-image"
            />
            <p>Groceries</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
