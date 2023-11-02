import React from 'react'
import '../../css/Home/HomeTopProducts.css';
import TopProducts from "../Shop/Product";

export default function HomeTopProducts(){
    return (
        <>
            <div className="container p-block80">
                <div className="row">
                    <div className="col-md-12">
                        <div className="pa-heading">
                            <h5>Medicine</h5>
                            <h1>TOP PRODUCTS</h1>
                        </div>
                    </div>
                    <TopProducts categoryProducts="rjuv9" />
                </div>
            </div>
        </>
    )
}