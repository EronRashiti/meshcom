import React from 'react';
import LOGO from '../Assets/LOGO.svg';
import Sidebar from '../Components/Sidebar';
import {NavLink} from 'react-router-dom';

function NavBar() {
    return (
            <nav className="nav">
                <div className="container">
                    <div className="main-nav">
                        
                        <div className="nav-logo">
                            <a id="logo" href="#">
                                <img src={LOGO}/>
                            </a>
                     </div>

                    <div className="menu-link">
                        <ul>
                            <li>
                                <NavLink to="/" exact activeClassName="active" className="nav-link">Home</NavLink>
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

                    <Sidebar/>
                
                    </div>
                </div>
             </nav>
    )
}

export default NavBar;
