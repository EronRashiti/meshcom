import React, { useState } from 'react';
import LOGO from '../Assets/mesh-com-logo.svg';
import { NavLink } from 'react-router-dom';
import Sidenav from './Sidenav';
import { CgMenuRight } from 'react-icons/cg';
import { Link } from 'react-router-dom';
    
function NavBar() {
    const [ showNav, setShowNav ] = useState (false)

    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(!clicked);
    };

    return (
            <nav className="nav">
                <div className="container">
                    <div className="main-nav">
                        <Link to="/">
                        <div className="nav-logo">
                            <a id="logo" alt="">
                                <img className="logo" src={LOGO} alt=""/>
                            </a>
                        </div>
                        </Link>
        
                        <div className={ clicked ? "menu-link" : "menu-link closed" }>
                            <ul>
                                <li>
                                <NavLink to="/" exact activeClassName="active" >Home</NavLink>
                                </li>
                                <li>
                                <NavLink to="/about" exact activeClassName="active">About</NavLink>
                                </li>
                                <li>
                                <NavLink to="/services" exact activeClassName="active">Services</NavLink>
                                </li>
                                <li>
                                <NavLink to="/contact" exact activeClassName="active">Contact</NavLink>
                                </li>
                            </ul>
                        </div>

                        <div className="burger" onClick={handleClick} >
                            <div className={clicked ? "close_line1" : "burger_line1"}></div>
                            <div className={clicked ? "" : "burger_line2"}></div>
                            <div className={clicked ? "close_line2 " : "burger_line3"}></div>
                        </div>
                    </div>
                    
                </div>
                        <div className="sidebaar">
                            <CgMenuRight onClick={()=> setShowNav(!showNav)}/>
                            <Sidenav show={showNav} />
                        </div>
             </nav>
    )
}

export default NavBar;
