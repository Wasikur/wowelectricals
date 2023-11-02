import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import '../../css/Home/CustomerReview.css';

export default function CustomerReview(){

    const settings = {
        dots: false,
        autoplay: true,
        infinite: true,
        arrows: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const sliderRef = React.useRef();
    const goToPrev = () => {
        if (sliderRef.current) {
        sliderRef.current.slickPrev();
        }
    };
    const goToNext = () => {
        if (sliderRef.current) {
        sliderRef.current.slickNext();
        }
    };

    return (
        <>
            <div class="pa-tesimonial spacer-top spacer-bottom pa-swiper-wrapper">
                <div class="container">
                    <div class="pa-heading pa-benefit-heading">
                        <h5>feedback</h5>
                        <h1>customer review</h1>
                    </div>
                    <div class="row carousel-container">
                        <Slider ref={sliderRef} {...settings}> 
                            <div className="col-md-12">
                                <div class="pa-tesimonial-box">
                                    <div class="pas-testi-img">
                                        <img src="https://dummyimage.com/300x300/" alt="image" class="img-fluid" />
                                    </div>
                                    <div class="pas-testi-content">
                                        <h2>John Doe</h2>
                                        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                                            voluptate velit esse.</p>
                                        <a href="javascript:;" class="pa-view-all">read more</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div class="pa-tesimonial-box">
                                    <div class="pas-testi-img">
                                        <img src="https://dummyimage.com/300x300/" alt="image" class="img-fluid" />
                                    </div>
                                    <div class="pas-testi-content">
                                        <h2>John Doe</h2>
                                        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                                            voluptate velit esse.</p>
                                        <a href="javascript:;" class="pa-view-all">read more</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div class="pa-tesimonial-box">
                                    <div class="pas-testi-img">
                                        <img src="https://dummyimage.com/300x300/" alt="image" class="img-fluid" />
                                    </div>
                                    <div class="pas-testi-content">
                                        <h2>John Doe</h2>
                                        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                                            voluptate velit esse.</p>
                                        <a href="javascript:;" class="pa-view-all">read more</a>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                        <div className="carousel-arrows">
                            <FontAwesomeIcon icon={faChevronLeft} className="carousel-arrow-left" onClick={goToPrev} />
                            <FontAwesomeIcon icon={faChevronRight} className="carousel-arrow-right" onClick={goToNext} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}