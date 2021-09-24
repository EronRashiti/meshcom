import React from 'react';
import LOGO from '../Assets/mesh-com-black-logo.svg';

function Footer() {
    return (
        <div className="footer">
            <div className="container">
                <div className="footer-logo">
                    <img src={LOGO} alt=""/>
                </div>
                <div className="footer-elements">
                    <div className="col1">
                        <p id="footer-text">Herzlich Willkommen <br/> 
                        bei Mesh COM.<br/>
                        Erfahren Sie hier <br/>
                        mehr über Ihren<br/>
                        leistungsstarker<br/>
                        Partner für alles rund<br/>
                        um IT und Internet!</p>
                    </div>
                    <div className="col2">
                        <ul className="list-unstyled contact-info-footer">
                            <li id="footer-text">Adresse:<br/>Untere<br/>Hauptstraße 24,<br/>2443 Deutsch<br/>Brodersdorf</li>
                            <li id="footer-text" className="li-element">E-Mail:<br/><span>office@mesh-com.at</span></li>
                            <li id="footer-text" className="li-element">Telefon:<br/><span>+43 676 655 9798</span></li>
                        </ul>
                    </div>

                    <div className="col3">
                        <ul className="list-unstyled social-media">
                            <li id="footer-text">Facebook</li>
                            <li id="footer-text" className="li-element">Instagram</li>
                            <li id="footer-text" className="li-element">LinkedIn</li>
                            <li id="footer-text" className="li-element">Twitter</li>
                        </ul>
                    </div>

                    <div className="col4">
                        <ul className="list-unstyled links">
                            <li className="link-title">Links</li>
                            <li id="footer-text" className="li-element">IT Service</li>
                            <li id="footer-text" className="li-element">Web Design</li>
                            <li id="footer-text" className="li-element">Web Development</li>
                            <li id="footer-text" className="li-element">App Development</li>
                            <li id="footer-text" className="li-element">Graphic Design</li>
                            <li id="footer-text" className="li-element">UI/UX Design</li>
                        </ul>
                    </div>
                    
                </div>
            </div>

            <div className="copyright">
                <h1 className="copyright-txt">Copyright © 2021 <span>Mesh COM.</span> All Rights Reserved</h1>
            </div>
        </div>
    )
}

export default Footer;
