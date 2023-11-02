import React, {useEffect, useState, useContext} from 'react'
import { useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from 'react-router-dom';
import logo from "../../../images/herbal_logo_white.png";
import backToTopImg from "../../../images/testi_compact.webp";
import '../../css/Header/Header.css';
import '../../css/BackToTop/BackToTop.css';
import { UserContext } from '../../../App';

export default function Navbar(){

    const { state } = useContext(UserContext);
    const [scroll, setScroll] = useState(false); 
    const [menuOpen, setMenuOpen] = useState(false);
    
    // add transparent class when page scroll >= 30
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY >= 30);
        });
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    // scroll to top function 
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    // Toggle the menu state to open/close the menu
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    // Close the menu when a navigation link is clicked
    const handleNavLinkClick = () => {
        setMenuOpen(false);
    };

    // get the current URL path and assign it to the route variable. 
    const location = useLocation();
    const route = location.pathname;
    
    const RenderMenu = () => {
        if(state) {
            return(
                <>
                    <li className="nav-item">
                        <NavLink className={route === '/' ? 'nav-link active a1' : 'nav-link active'} aria-current="page" to="/" onClick={handleNavLinkClick}>Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className={route === '/about' ? 'nav-link a1' : 'nav-link'} to="/about" onClick={handleNavLinkClick}>About</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className={route === '/shop' ? 'nav-link a1' : 'nav-link'} to="/shop" onClick={handleNavLinkClick}>Shop</NavLink>
                    </li>                    
                    <li className="nav-item">
                        <NavLink className={route === '/contact' ? 'nav-link a1' : 'nav-link'} to="/contact" onClick={handleNavLinkClick}>Contact</NavLink>
                    </li>
                    {/* <li className="nav-item">
                        <NavLink className={route === '/logout' ? 'nav-link a1' : 'nav-link'} to="/logout" onClick={handleNavLinkClick}>Logout</NavLink>
                    </li> */}
                </>
            )
        } else {
            return(
                <>
                    <li className="nav-item">
                        <NavLink className={route === '/' ? 'nav-link active a1' : 'nav-link active'} aria-current="page" to="/" onClick={handleNavLinkClick}>Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className={route === '/about' ? 'nav-link a1' : 'nav-link'} to="/about" onClick={handleNavLinkClick}>About</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className={route === '/shop' ? 'nav-link a1' : 'nav-link'} to="/shop" onClick={handleNavLinkClick}>Shop</NavLink>
                    </li>                     
                    <li className="nav-item">
                        <NavLink className={route === '/contact' ? 'nav-link a1' : 'nav-link'} to="/contact" onClick={handleNavLinkClick}>Contact</NavLink>
                    </li>
                    {/* <li className="nav-item" style={{ '--clr': '#ffdd1c' }}>
                        <NavLink className={route === '/login' ? 'nav-link a1' : 'nav-link'} to="/login" data-text="&nbsp;Login" onClick={handleNavLinkClick}>&nbsp;Login&nbsp;</NavLink>
                    </li>
                    <li className="nav-item" style={{ '--clr': '#ffdd1c' }}>
                        <NavLink className={route === '/signup' ? 'nav-link a1' : 'nav-link'} to="/signup" data-text="&nbsp;Registration" onClick={handleNavLinkClick}>&nbsp;Registration&nbsp;</NavLink>
                    </li> */}
                </>
            )
        }
    }

    return (
        <div>
            {/* Bootstrep Menu */}
            <nav className={scroll ? "navbar navbar-expand-lg navbar-dark fixed-top transparent" : "navbar navbar-expand-lg navbar-dark fixed-top"}>
                <div className="container-fluid">
                    
                    {/* Back to top Button */}
                    <div onClick={scrollToTop} className="top main_go_top">
                        <div class="go_top item-bounce">
                            <img src={backToTopImg} alt="Go to top " />
                        </div>
                    </div>

                    {/* logo icon */}
                    <NavLink className="navbar-brand logo" to="/">
                        <img src={logo} alt='logo' />
                    </NavLink>

                    {/* menu toggler button */}
                    <button className="navbar-toggler collapsed border-0" type="button" data-bs-toggle="collapse"                         
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                        aria-expanded="false" aria-label="Toggle navigation" onClick={toggleMenu}>
                        {/* <span className="navbar-toggler-icon"></span>
                        <div className="close-icon">
                            <i className="bi bi-x-lg"></i>
                        </div> */}
                        {menuOpen ? (
                            <div className="close-icon">
                                <i className="bi bi-x-lg"></i>
                            </div>
                        ) : (
                            <span className="navbar-toggler-icon"></span>
                        )}
                    </button>

                    <div className={`collapse navbar-collapse justify-content-end ${menuOpen ? 'show' : ''}`} id="navbarSupportedContent">
                        <ul className="nav navbar-nav mb-2 mb-lg-0">
                            <RenderMenu />
                        </ul>
                    </div>

                </div>
            </nav>
        </div>
    )
}