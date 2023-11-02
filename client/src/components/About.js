import React from 'react'
import AboutBanners from './includes/About/AboutBanners';
import ScrollToFirstComponent from './includes/ScrollToTop/ScrollToFirstComponent';
import AboutBannerImage from "../images/1143_240.webp";
import AboutUs from "./includes/About/AboutUs";
import AboutCounters from "./includes/About/AboutCounters";

export default function About(){

    return (
        <>
            {/* scroll to the first component's position when the page loads */}
            <div ref={ScrollToFirstComponent().firstComponentRef} />

            {/* AboutHeaders section */}
            <AboutBanners text="About us" imageUrl={AboutBannerImage} />

            {/* Aboutus Section  */}
            <AboutUs />

            {/* About Counters Sections  */}
            <AboutCounters />

        </>
    )
}