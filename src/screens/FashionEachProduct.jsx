import React, { useContext } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { ShopContext } from '../components/ShopContext'
import Product from './Product';


export default function FashionEachProduct() {
    const {Kids,Men,Women} = useContext(ShopContext);
    const {val} = useParams();
    const navigate = useNavigate();
    let product;

    if(val==="Kids") product=Kids;
    if(val==="Men") product=Men;
    if(val==="Women") product=Women;
    
    return (
        <div className='container mt-3'>
            <h3 className='text-center'>{val}</h3>
            <div className="row">
                {
                    product.map((item)=>(
                        <Product 
                          key={item.id} 
                          product={item}
                          onAddToCart={() => navigate('/cart')}
                        />

                    ))
                }
            </div>
            


        </div>
    )
} 