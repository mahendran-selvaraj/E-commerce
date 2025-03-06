import React, { useState,useContext } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { ShopContext } from '../components/ShopContext'

export default function Login() {
    const {handlelogin} = useContext(ShopContext);
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const navigate = useNavigate()

    const handleSubmit=(event)=>{
        event.preventDefault();
       if(handlelogin({email,password})){
        navigate('/')
       }
       else{
        alert("invalid mail  or password");
       }
    }

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card p-2 shadow mt-5">
                        <div className="card-header bg-primary text-white ">
                            <h3 className="text-center">Login</h3>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit} >
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="email" placeholder="Enter your email" onChange={(e)=>{setEmail(e.target.value)}} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="password" placeholder="Enter your password" onChange={(e)=>{setPassword(e.target.value)}} required />
                                </div>
                                <button type="submit" className="btn btn-primary w-100" >Login</button>
                            </form>
                        </div>
                        <div className="card-footer text-center">
                        <p>Don't have an account? <Link to='/signup'>Sign Up</Link></p>

                        </div>
                    </div>
                </div>
            </div>
        </div>)
}
