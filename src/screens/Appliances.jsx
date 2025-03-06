import React, { useContext } from 'react'
import Product from './Product'
import { ShopContext } from '../components/ShopContext'

export default function Appliances() {
  const {applianceProducts} =useContext(ShopContext);
  return (
    <div className='container mt-3'>
        <h3 className='text-center'>Appliances</h3>
        <div className="row">
            {
                applianceProducts.map((item)=>(
                    <Product product={item}/>
                ))

            }
        </div>
    </div>
  )
}
