import React, { useContext } from 'react'
import { ShopContext } from '../components/ShopContext'
import Product from './Product'

export default function Mobiles() {
  const {mobileProducts} =useContext(ShopContext);
  return (
    <div className='container mt-3'>
        <h3 className='text-center'>Mobiles</h3>
        <div className="row">
            {
                mobileProducts.map((item)=>(
                    <Product product={item}/>
                ))
            }
        </div>
    </div>
  )
}
