import React from 'react'
import ScrollToFirstComponent from './includes/ScrollToTop/ScrollToFirstComponent';
import AboutBanners from './includes/About/AboutBanners';
import AboutBannerImage from "../images/1143_240.webp";
import ContactPage from "./includes/Contact/ContactPage"

export default function Contact(){

    return (
        <>
            {/* scroll to the first component's position when the page loads */}
            <div ref={ScrollToFirstComponent().firstComponentRef} />

            {/* Contact Headers section */}
            <AboutBanners text="Contact us" imageUrl={AboutBannerImage} />

            {/* contact form and address sections  */}
            <ContactPage />
        </>
    )
}