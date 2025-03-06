import React, { useContext } from 'react'
import { ShopContext } from '../components/ShopContext'
import Product from './Product'

export default function Groceries() {
  const{groceriesproduct}=useContext(ShopContext);
  return (
    <div className='container mt-3'>
        <h3 className='text-center'>Groceries</h3>
        <div className="row">
            {
                groceriesproduct.map((item)=>(
                    <Product product={item}/>
                ))

            }
        </div>
    </div>
  )
}
