import React from 'react'
import { Link } from 'react-router-dom'

export default function Fashion() {
    return (

        <>
            <div className="container">
                <div className="row mt-5">

                    <div className="col-12 col-md-4 mt-3 text-center">
                        <div className="card h-100">
                            <div className="text-center mt-3">
                               <Link to='/fa/Kids'> <img src="https://thumbs.dreamstime.com/b/bother-sister-portrait-kids-fashion-studio-smile-bonding-siblings-kindergarten-together-boy-girl-children-cool-332677348.jpg" className="card-img-top" alt="" style={{ height: '200px', width: "200px" }} /></Link>

                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Kids</h5>
                            </div>
                        </div>
                    </div>


                    <div className="col-12 col-md-4 mt-3 text-center">
                        <div className="card h-100">
                            <div className="text-center mt-3">
                            <Link to='/fa/Men'> <img src="https://down-my.img.susercontent.com/file/12c30ff76309af3eb32048b06daf0531" className="card-img-top" alt="" style={{ height: '200px', width: "200px" }} /></Link>

                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Mens</h5>
                            </div>
                        </div>
                    </div>


                    <div className="col-12 col-md-4 mt-3 text-center">
                        <div className="card h-100">
                            <div className="text-center mt-3">
                            <Link to='/fa/Women'> <img src="https://img.freepik.com/premium-photo/beautiful-young-woman-white-clothes-isolated-white-background_1142-31798.jpg" className="card-img-top" alt="" style={{ height: '200px', width: "200px" }} /></Link>

                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Women</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
