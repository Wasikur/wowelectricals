import React from 'react'
import ScrollToFirstComponent from './includes/ScrollToTop/ScrollToFirstComponent';
import HomeBanners from './includes/Home/HomeBanners';
import AboutCounters from './includes/About/AboutCounters';
import HomeMedicine from './includes/Home/Medicine';
import HomeAyurveda from './includes/Home/Ayurveda';
import HomeTopProducts from './includes/Home/HomeTopProducts';
import HomeTrendingProducts from './includes/Home/HomeTrendingProducts';
import HomeCustomerReview from './includes/Home/CustomerReview';


export default function Home(){

    return (
        <>
            {/* scroll to the first component's position when the page loads */}
            <div ref={ScrollToFirstComponent().firstComponentRef} />

            {/* Home Banners Sections */}
            <HomeBanners />

            {/* Home medicine Sections  */}
            <HomeMedicine />

            {/* Home Ayurveda Sections  */}
            <HomeAyurveda />

            {/* Home top products sections  */}
            <HomeTopProducts />

            {/* Home customer review */}
            <HomeCustomerReview />

            {/* Home Trending products sections  */}
            <HomeTrendingProducts />

            {/* Home Counters Sections */}
            <AboutCounters />            
        </>
    )
}