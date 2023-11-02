import React from 'react'
import '../../css/ProductDetail/ProductDetailPage.css';
import ProductDetail from '../ProductDetail/ProductDetail';
import ProductSidebar from '../Shop/ProductSidebar';


export default function ProductDetailPage(){

    return (
        <>
            <div className="pa-product-shop spacer-top spacer-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 order-last spacer1">
                            {/* Product Sections */}
                            <ProductDetail />
                        </div>

                        <div className="col-lg-4 order-md-first order-sm-first order-xs-first">
                            {/* Product Sections */}
                            <ProductSidebar />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}