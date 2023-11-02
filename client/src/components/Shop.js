import React from 'react'
import ScrollToFirstComponent from './includes/ScrollToTop/ScrollToFirstComponent';
import AboutBanners from './includes/About/AboutBanners';
import AboutBannerImage from "../images/1143_240.webp";
import ShopProduct from './includes/Shop/ShopProduct';

export default function Shop(){

    return (
        <>
            {/* scroll to the first component's position when the page loads */}
            <div ref={ScrollToFirstComponent().firstComponentRef} />

            {/* Shop Banners Sections */}
            <AboutBanners text="Shop" imageUrl={AboutBannerImage} />

            {/* shop Product Sections */}
            <ShopProduct />
        </>
    )
}