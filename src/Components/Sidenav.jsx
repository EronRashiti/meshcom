import React from 'react'
import { Link } from 'react-router-dom';


const Sidenav = ({ show }) => {
    return (
        <div className={show ? 'sidebar active' : 'sidebar'}>
            <ul>
            <Link to="/itservice">
                <li><a>IT Service</a></li>
            </Link>
            <Link to="/webdevelopment">
                <li><a>Web Development</a></li>
            </Link>
            <Link to="/webdesign">
                <li><a>Web Design</a></li>
            </Link>
            <Link to="/appdevelopment">
                <li><a>App Development</a></li>
            </Link>
            <Link to="/graphicdesign">
                <li><a>Graphic Design</a></li>
            </Link>
            <Link to="/uiuxdesign">
                <li><a>UI/UX Design</a></li>
            </Link>
            </ul>
            
        </div>
    )
}

export default Sidenav;
