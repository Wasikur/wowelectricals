import React from 'react';
import '../../css/About/AboutUs.css';

export default function AboutUs(){
    
    return (
        <>
            <div id="aboutus" className="pa-about spacer-top spacer-bottom">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="pa-about-img">
                                <img src="https://dummyimage.com/540x385/" alt="image" className="img-fluid" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="pa-about-content">
                                <div className="pa-heading">
                                    <h5>about us</h5>
                                    <h1>We are here with 25 years of experience</h1>
                                </div>
                                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                                    dolore eu fugiat nulla pariatur.</p>
                            
                            </div>
                            <div className="pa-check-item">
                                <ul className="pa-flex-item">
                                    <li className="pa-list-item">
                                        <span>
                                            <i className="fas fa-check-circle"></i>
                                        </span>
                                        <span className="pa-box-text">Professional Therapist</span>
                                    </li>
                                    <li className="pa-list-item">
                                        <span>
                                            <i className="fas fa-check-circle"></i>
                                        </span>
                                        <span className="pa-box-text">Organic Herbal</span>
                                    </li>
                                </ul>
                                <ul>
                                    <li className="pa-list-item">
                                        <span>
                                            <i className="fas fa-check-circle"></i>
                                        </span>
                                        <span className="pa-box-text">Professional Therapist</span>
                                    </li>
                                    <li className="pa-list-item">
                                        <span>
                                            <i className="fas fa-check-circle"></i>
                                        </span>
                                        <span className="pa-box-text">24/7 Support</span>
                                    </li>
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}