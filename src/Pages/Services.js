import React from 'react';
import NavBar from '../Components/NavBar';
import ContactArea from '../Components/ContactArea';
import Footer from '../Components/Footer';
import IT from '../Assets/it_service_services.jpg';
import GRAPHIC from '../Assets/graphic_design_services.jpg';
import WEBDEV from '../Assets/web_development_service.jpg';
import WEBDES from '../Assets/web_design_services.jpg';
import APPDEV from '../Assets/App_development_services.jpg';
import UIUX from '../Assets/UIUX_services.jpg';
import MTEAMS  from '../Assets/microsoftteams.svg';
import AGILE from '../Assets/agile.svg';
import GIT from '../Assets/git.svg';
import FIGMA from '../Assets/figma.svg'; 
import { Link } from 'react-router-dom';

function Services() {
    return (
        <div className="services">

            <div className="services-hero">
                <NavBar />
                <div className="services-gradient">
                    <h1 className="services-hero-title">Der Unterschied ist in<br/>unsere Leute.</h1>
                    <p className="services-hero-text">We work on digital experiences that your target group<br/>
                    desires and that organizations grow from. Our team is at<br/>
                    home in every digital dimension.</p>
                </div>
            </div>

            <div className="services-section1">
                <div className="container-services">
                    <div className="services-grid">
                        <div className="services-row1">
                        <Link to="/itservice">
                            <div className="services-left services-all">
                                <a>
                                    <img src={IT}/>
                                </a>
                                <a className="service-link">IT<br/>Service</a> 
                            </div>
                        </Link>

                        <Link to="/webdevelopment">
                            <div className="services-left services-all">
                                <a>
                                    <img src={WEBDEV}/>
                                </a>
                                <a className="service-link">Web<br/>Development</a>
                            </div>
                        </Link>
                        
                        <Link to="/graphicdesign">
                            <div className="services-left services-all">
                                <a>
                                    <img src={GRAPHIC}/>
                                </a>
                                <a className="service-link">Graphic<br/>Design</a>
                            </div>
                        </Link>
                        </div>
  
                        <div className="services-row2">
                        <Link to="/webdesign">
                            <div className="services-right services-all">
                                <a className="service-link">Web<br/>Design</a>
                                <a>
                                    <img src={WEBDES}/>
                                </a>
                            </div>
                        </Link>

                        <Link to="/appdevelopment">
                            <div className="services-right services-all">
                                <a className="service-link">App<br/>Development</a>
                                <a>
                                    <img src={APPDEV}/>
                                </a>
                            </div>
                        </Link>
                            
                        <Link to="/uiuxdesign">
                            <div className="services-right services-all">
                                <a className="service-link">UI/UX<br/>Design</a>
                                <a>
                                    <img src={UIUX}/>
                                </a>
                            </div>
                        </Link>    
                        </div>
                    </div>
                </div>
            </div>

            <div class="services-section2">
                <div className="container">
                    <div className="services-section3-title">
                        <h1 id="tools-processes-text">TOOLS AND PROCESSES<br/>THAT WE APPLY ON A DAILY BASIS</h1>
                    </div>
                    <div className="tools-grid">
                        <div className="tool tool1">
                            <h1 id="mteams-title">Microsoft<br/>Teams</h1>
                            <img id="mteams-img" src={MTEAMS}/>
                            <p id="mteams-text">We use Microsoft Teams for<br/>
                            internal and external (client<br/>
                            - developers - product<br/>
                            managers) communication.</p>
                        </div>
                        <div className="tool tool2">
                            <h1 id="agile-title">Agile</h1>
                            <img id="agile-img" src={AGILE}/>
                            <p id="agile-text">Our preferred style of<br/>
                            working with various projects<br/>
                            is based on Agile<br/>
                            Development</p>
                        </div>
                        <div className="tool tool3">
                            <h1 id="git-title">GIT</h1>
                            <img id="git-img" src={GIT}/>
                            <p id="git-text">We use the latest tech for<br/>
                            web-based version control,<br/>
                            code review and quality<br/>
                            check.</p>
                        </div>
                        <div className="tool tool4">
                            <h1 id="figma-title">Figma</h1>
                            <img id="figma-img" src={FIGMA}/>
                            <p id="figma-text">We use Figma to do all kinds<br/>
                            of graphic design, UI/UX<br/>
                            design from wireframing<br/>
                            websites, designing mobile<br/>
                            app interfaces, prototyping... </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer">
                <div className="contact-area-footer">
                    <ContactArea/>
                </div>
                <Footer />
            </div>   

        </div>
    )
}

export default Services;
