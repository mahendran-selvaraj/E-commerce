import React from 'react';
import { Link } from 'react-router-dom';

export default function Product({ product }) {
  return (
    <div key={product.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mt-3">
      <div className="card h-100 shadow-sm d-flex flex-column">
        
          <div className="text-center p-2">
            <img 
              src={product.url} 
              className="card-img-top img-fluid rounded" 
              alt={product.name} 
              style={{ maxHeight: "250px", objectFit: "contain" }} 
            />
          </div>
          <div className="card-body d-flex flex-column">
            <h5 className="card-title text-center">{product.name}</h5>
            <p className="card-text text-muted flex-grow-1">{product.description}</p>
            <h6 className="fw-bold text-center">Rs {product.price} /-</h6>
          </div>
        
        <div className="p-3 mt-auto">
        <Link to={`/display/${product.id}`} className="text-decoration-none text-dark">
          <button className="btn btn-primary w-100">Show Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
