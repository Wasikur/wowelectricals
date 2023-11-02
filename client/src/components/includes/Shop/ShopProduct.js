import React from 'react'
import '../../css/Shop/ShopProduct.css';
import Product from '../Shop/Product';
import ProductSidebar from '../Shop/ProductSidebar';

export default function ShopProduct(){

    return (
        <>
            <div className="pa-product-shop spacer-top spacer-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 order-last">
                            <div className="row">
                                {/* Product Sections */}
                                <Product categoryProducts="" />
                            </div> 
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="pa-add">
                                        <img src="https://dummyimage.com/730x200/" alt="image" className="img-fluid" />
                                    </div>
                                </div>                            
                            </div>
                        </div>
                        <div className="col-lg-4">
                            {/* Product Sections */}
                            <ProductSidebar />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}