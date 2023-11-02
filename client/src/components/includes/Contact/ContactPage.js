import React from 'react'
import '../../css/Contact/ContactPage.css';
import ContactForm from '../Contact/ContactForm';
import ContactAddress from '../Contact/ContactAddress';


export default function ContactPage(){

    return (
        <>
            <div className="pa-contact spacer-top">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-5">
                            <ContactAddress />
                        </div>
                        <div className="col-md-5">
                            <ContactForm />
                        </div>
                    </div>                
                </div>
            </div>
        </>
    )
}