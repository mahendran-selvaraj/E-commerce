import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ShopContext } from '../components/ShopContext';


export default function Display() {
  const { productId } = useParams();
  const { allProducts, addToCart, deletefromcart, user, cart } = useContext(ShopContext);

  const navigate = useNavigate();

  const handleBuy = (id) => {
    if (!user) {
      navigate('/login');
      return;
    }
    alert("Payment Successful");
    deletefromcart(id);
  };

  console.log(productId);
  console.log(typeof(productId));

  const product = allProducts.find(p => p.id === parseInt(productId));

  if (!product) {
    return <div className="container mt-5">Product not found</div>;
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <img 
            src={product.url} 
            alt={product.name} 
            className="img-fluid"
            style={{ maxHeight: '500px', width: 'auto' }}
          />
        </div>
        <div className="col-md-6">
          <h1>{product.name}</h1>
          <p className="lead">{product.description}</p>
          <h3 className="text-primary">Rs {product.price} /-</h3>
          <button 
            className="btn btn-warning btn-lg mt-3 me-2"
            onClick={() => {
            addToCart(product.id);
            navigate('/cart');
            }}
           >
           Add to Cart
          </button>
          <button
            className="btn btn-success btn-lg mt-3"
            onClick={() => handleBuy(product.id)}
          >
            Buy Now
          </button>        

        </div>
      </div>
    </div>
  );
}
