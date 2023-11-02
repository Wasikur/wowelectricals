import React from 'react'
import '../../css/Home/HomeBanners.css';
import ProductSearch from "../Shop/ProductSearch";

export default function HomeBanners(){
    return (
        <>
            <div className="pa-banner-three">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-5 col-lg-5 col-sm-12">
                            <div className="pa-banner-three-text">
                                <h1>We are here to give you the best herb products</h1>
                                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                <div className="pa-banner-search">
                                    <ProductSearch />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-7 col-lg-7 col-sm-12">
                            <div className="pa-banner-three-img">
                                <img src="https://dummyimage.com/773x711/" alt="image" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}