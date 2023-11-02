import React from 'react'
import '../../css/Home/HomeTrendingProducts.css';
import TopProducts from "../Shop/Product";

export default function HomeTrendingProducts(){
    return (
        <>
            <div className="container p-block80">
                <div className="row">
                    <div className="col-md-12">
                        <div className="pa-heading">
                            <h5>Product</h5>
                            <h1>TRENDING PRODUCT</h1>
                        </div>
                    </div>
                    <TopProducts categoryProducts="newtrending" />
                </div>
            </div>
        </>
    )
}