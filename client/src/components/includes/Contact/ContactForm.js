import React, {useState} from 'react';
import '../../css/Contact/ContactForm.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function ContactForm(){
    const [contactform, setContactform] = useState({
        name: "", email: "", subject: "", message: ""
    });

    let name, value;
    const handleContactform = (e) => {
        // console.log(e);
        name = e.target.name;
        value = e.target.value;

        setContactform({...contactform, [name]:value});
    }

    const saveContactform = async (e) => {
        try {
            e.preventDefault();
            const { name, email, subject, message } = contactform;

            const res = await fetch(`${process.env.REACT_APP_HTTP_KEY}/saveContactform`, {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify({
                    name, email, subject, message
                })
            });
            const data = await res.json();

            if(data.status === 201) {  
                toast.success(data.message);  

                // Clear the input fields after successful save
                setContactform({
                    name: "",
                    email: "",
                    subject: "",
                    message: ""
                });

            }else{
                toast.error(data.error);
            }
        } catch (error) {
            console.error('Error occurred:', error);
        }
    }

    return (
        <>
            <div className="">
                <div className="row">
                    <div className="col-md-12">
                        <div className="pa-contact-form">
                            <form>
                                <input value={contactform.name} onChange={handleContactform} type="text" placeholder="Enater your name" name="name" id="name" required />
                                <input value={contactform.email} onChange={handleContactform} type="text" placeholder="Enter your email" name="email" id="email" required />
                                <input value={contactform.subject} onChange={handleContactform} type="text" placeholder="Enter your subject" name="subject" id="subject" required />
                                <textarea value={contactform.message} onChange={handleContactform} placeholder="Message here" name="message" id="message" required />
                                <button type="button" className="pa-btn submitForm" onClick={saveContactform}>submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer position="top-right" theme="colored" autoClose={5000} hideProgressBar={false} />
        </>
    )
}