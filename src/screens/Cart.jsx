import React, { useContext } from "react";
import { ShopContext } from "../components/ShopContext";
import { useNavigate } from "react-router-dom";


export default function Cart() {
  const { cart, allProducts, addToCart, removeFromCart, deletefromcart, user } = useContext(ShopContext);

  const display = allProducts.filter((item) => cart?.[item.id] > 0);
  const navigate = useNavigate();

  const handleBuy = (id) => {
    if (!user) {
      navigate('/login');
      return;
    }
    alert("Payment Successful");
    deletefromcart(id);
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">🛒 Your Shopping Cart</h2>
      <div className="row">
        {display.length > 0 ? (
          display.map((product) => (
            <div key={product.id} className="col-12 col-md-4 mb-4">
              <div className="card shadow h-100">
                <div className="text-center">
                  <img
                    src={product.url}
                    className="card-img-top m-2"
                    alt={product.name}
                    style={{ height: "190px", width: "160px" }}
                  />
                </div>
                <div className="card-body text-center">
                  <h5 className="card-title fw-bold">{product.name}</h5>
                  <p className="card-text text-muted">{product.description}</p>
                  <h6 className="fw-bold">Rs {product.price * cart?.[product.id]} /-</h6>
                  <div className="d-flex justify-content-center align-items-center mb-3">
                    <button
                      className="btn btn-outline-secondary btn-sm"
                      onClick={() => removeFromCart(product.id)}
                      disabled={cart?.[product.id] <= 1}
                    >
                      -
                    </button>
                    <span className="mx-3">{cart?.[product.id]}</span>
                    <button
                      className="btn btn-outline-secondary btn-sm"
                      onClick={() => addToCart(product.id)}
                    >
                      +
                    </button>
                  </div>

                  <div
                    className="btn btn-success w-100 mt-2"
                    onClick={() => handleBuy(product.id)}
                  >
                    Buy Now
                  </div>
                  <button
                    className="btn btn-danger w-100 mt-2"
                    onClick={() => deletefromcart(product.id)}
                  >
                    Remove from Cart
                  </button>

                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center mt-5">
            <h4 className="text-muted">Your cart is empty </h4>
            <p className="text-secondary">Start shopping now and fill your cart with amazing products!</p>
          </div>
        )}
      </div>
    </div>
  );
}
