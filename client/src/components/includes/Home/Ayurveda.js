import React from 'react'
import '../../css/Home/Ayurveda.css';
import ayurveda from "../../../images/ayurveda1.png";
import thirdParty from "../../../images/thirdParty.png";
import badge1 from "../../../images/badge1.png";
import pills1 from "../../../images/pills1.png";

export default function Ayurveda(){
    return (
        <>
            <div className="pa-why spacer-top spacer-bottom ">
                <div className="container">
                    <div className="pa-heading pa-benefit-heading">
                        <h5>best for you</h5>
                        <h1>why pure Ayurveda</h1>
                    </div>
                    <div className="row">
                        <div className="col-md-8 col-lg-8 col-sm-12">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <div className="pa-pure-text-00">
                                        <img src={ayurveda} alt='ayurveda' />
                                        <h2>100% Organic</h2>
                                        <p>Torem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                            incididunt ut</p>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <div className="pa-pure-text-00">
                                        <img src={thirdParty} alt='thirdParty' />
                                        <h2>3rd Party Tested</h2>
                                        <p>Yorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                            incididunt ut</p>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <div className="pa-pure-text-00">
                                        <img src={badge1} alt='badge1' />
                                        <h2>Certified Medicine</h2>
                                        <p>Uorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                            incididunt ut</p>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <div className="pa-pure-text-00">
                                        <img src={pills1} alt='pills1' />
                                        <h2>Reduce Pain</h2>
                                        <p>Porem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                            incididunt ut</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-4 col-sm-12">
                            <div className="pa-pure-img">
                                <img src="https://dummyimage.com/416x507/" alt="" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}