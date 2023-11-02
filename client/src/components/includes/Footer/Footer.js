import React, {useState} from 'react';
import '../../css/Footer/Footer.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logo from "../../../images/herbal_logo_white.png";
import { NavLink } from 'react-router-dom';

export default function Footer(){
    const [user1, setUser1] = useState({
        email: "", mobile: ""
    });

    let name, value;

    const handleInputs1 = (e) => {
        console.log(e);
        name = e.target.name;
        value = e.target.value;

        setUser1({...user1, [name]:value});
    }

    const JoinData = async (e) => {
        try {
            e.preventDefault();
            const { email, mobile } = user1;

            const res = await fetch(`${process.env.REACT_APP_HTTP_KEY}/join`, {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify({
                    email, mobile
                })
            });
            const data = await res.json();

            // if(data.status === 422 || !data) {
            if(data.status === 201) {  
                toast.success(data.message);          
                // window.alert(data.message);
                // console.log(data.message);

                // Clear the input fields after successful save
                setUser1({
                    email: "",
                    mobile: ""
                });

            }else{
                toast.error(data.error);
                // window.alert(data.error);
                // console.log(data.error);
            }
        } catch (error) {
            console.error('Error occurred:', error);
        }
    }

    return (
        <>
        {/* herbal start  */}
        <div className="pa-footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <div className="pa-foot-box">
                            <h2 className="pa-foot-title">Top Products</h2>
                            <ul>
                                <li>
                                    <a href="javascript:;">Black Organic Tea</a>
                                </li>
                                <li>
                                    <a href="javascript:;">Loose Leaf Tea</a>
                                </li>
                                <li>
                                    <a href="javascript:;">Oolong Tea</a>
                                </li>
                                <li>
                                    <a href="javascript:;">Green Tea</a>
                                </li>
                                <li>
                                    <a href="javascript:;">Sencha Tea</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="pa-foot-box">
                            <h2 className="pa-foot-title">Legal Information</h2>
                            <ul>
                                <li>
                                    <a href="javascript:;">About Us</a>
                                </li>
                                <li>
                                    <a href="javascript:;">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="javascript:;">Terms & Conditions</a>
                                </li>
                                <li>
                                    <a href="javascript:;">Customer Service</a>
                                </li>
                                <li>
                                    <a href="javascript:;">Return Policy</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="pa-foot-box pa-foot-subscribe">
                            <img className="img-fluid" src={logo} alt='logo' />
                            <div className="pa-newsletter">
                                <form>
                                    <input type="text" placeholder="Subscribe newsletter" />
                                    <button className="pa-btn">Subscribe now</button>
                                </form>
                            </div>
                            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                                dolore</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="pa-copyright">
            <div className="container">
                <p>Copyright &copy; 2022. All right reserved. <NavLink to="/">Herbal store</NavLink></p>
            </div>
        </div>
        {/* herbal end  */}
            {/* <div className="container-fluid">
                <div className="row white">
                    <div className="col-md-12"></div>
                </div>

                <div className="row justify-content-between footer_bg">
                    <div className="col-md-2 order-2 order-md-1">
                    </div>

                    <div className="col-md-7 order-1 order-md-2">
                        <div className="circle">
                            <h3>Get special offers + Plus <br /> news in your inbox.</h3>

                            <form id="subscribe" method="POST">
                                <input className="form-control" name="email" id="email" type="email" autoComplete='off' value={user1.email} onChange={handleInputs1} placeholder="Email" required />
                                                    
                                <input className="form-control" name="mobile" id="mobile" type="number" autoComplete='off' value={user1.mobile} onChange={handleInputs1} placeholder="PHONE" required />             
                            
                                <p>
                                    By subscribing, you agree to receive automated messages at this email address and phone number.
                                </p>

                                <div className="row">
                                    <div className="col-md-12 text-center mt-4">
                                        <button name="join" id="join" onClick={JoinData}>
                                            JOIN
                                            <i className="bi bi-arrow-right"></i>
                                        </button>
                                    </div>
                                </div>

                            </form>  
                        </div>
                    </div>

                    <div className="col-md-3 order-3 order-md-3"> 
                        <ul className="secondarylinks">                    
                            <li>
                                <a href="tel:06417965222">
                                    <i className="zmdi zmdi-phone-in-talk material-icons-name pe-3"></i>
                                    0641 7965222
                                </a>
                            </li>        
                            <li>
                                <a href="mailto:info@cynob.com">
                                    <i className="zmdi zmdi-email material-icons-name pe-3"></i>
                                    info@cynob.com
                                </a>
                            </li>
                        </ul>        
                    </div>
                </div>

                <div className="row text-white justify-content-between pt-5 pb-3 footer_bg">
                    <div className="col-md-12 text-center">
                        <small>© 2023 Cynob, All Rights Reserved.</small>
                    </div>
                </div>
            </div> */}
            <ToastContainer position="top-right" theme="colored" autoClose={5000} hideProgressBar={false} />
        </>
    )
}