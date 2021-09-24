import React from 'react';
import NavBar from '../Components/NavBar';
import ContactArea from '../Components/ContactArea';
import Footer from '../Components/Footer';
import IT from '../Assets/mesh-com-it-service.webp';
import GRAPHIC from '../Assets/mesh-com-graphic-design-service.webp';
import WEBDEV from '../Assets/mesh-com-web-development-service.webp';
import WEBDES from '../Assets/mesh-com-web-design-service.webp';
import APPDEV from '../Assets/mesh-com-app-development-service.webp';
import UIUX from '../Assets/mesh-com-uiux-service.webp';
import MTEAMS  from '../Assets/mesh-com-microsoft-teams.svg';
import AGILE from '../Assets/mesh-com-agile.svg';
import GIT from '../Assets/mesh-com-git.svg';
import FIGMA from '../Assets/mesh-com-figma.svg'; 
import { Link } from 'react-router-dom';

function Services() {
    return (
        <div className="services">

            <section className="services-hero">
                <NavBar />
                <div className="services-gradient">
                    <h1 className="services-hero-title">Der Unterschied ist in<br/>unsere Leute.</h1>
                    <p className="services-hero-text">We work on digital experiences that your target group<br/>
                    desires and that organizations grow from. Our team is at<br/>
                    home in every digital dimension.</p>
                </div>
            </section>

            <section className="services-section1">
                <div className="container-services">
                    <div className="services-grid">
                        <div className="services-row1">
                        <Link to="/itservice">
                            <div className="services-left services-all">
                                <a>
                                    <img src={IT} alt="mesh-com-it"/>
                                </a>
                                <a className="service-link service-link-left">IT<br/>Service</a> 
                            </div>
                        </Link>

                        <Link to="/webdevelopment">
                            <div className="services-left services-all">
                                <a>
                                    <img src={WEBDEV} alt="mesh-com-web"/>
                                </a>
                                <a className="service-link service-link-left">Web<br/>Development</a>
                            </div>
                        </Link>
                        
                        <Link to="/graphicdesign">
                            <div className="services-left services-all">
                                <a>
                                    <img src={GRAPHIC} alt="mesh-com-graphicdesign"/>
                                </a>
                                <a className="service-link service-link-left">Graphic<br/>Design</a>
                            </div>
                        </Link>
                        </div>
  
                        <div className="services-row2">
                        <Link to="/webdesign">
                            <div className="services-right services-all">
                                <a className="service-link service-link-right">Web<br/>Design</a>
                                <a>
                                    <img src={WEBDES} alt="mesh-com-webdesign"/>
                                </a>
                            </div>
                        </Link>

                        <Link to="/appdevelopment">
                            <div className="services-right services-all">
                                <a className="service-link service-link-right">App<br/>Development</a>
                                <a>
                                    <img src={APPDEV} alt="mesh-com-application-development"/>
                                </a>
                            </div>
                        </Link>
                            
                        <Link to="/uiuxdesign">
                            <div className="services-right services-all">
                                <a className="service-link service-link-right">UI/UX<br/>Design</a>
                                <a>
                                    <img src={UIUX} alt="mesh-com-uiux-designing"/>
                                </a>
                            </div>
                        </Link>    
                        </div>
                    </div>
                </div>
            </section>

            <section class="services-section2">
                <div className="container">
                    <div className="services-section3-title">
                        <h1 id="tools-processes-text">TOOLS AND PROCESSES<br/>THAT WE APPLY ON A DAILY BASIS</h1>
                    </div>
                    <div className="tools-grid">
                        <div className="microsoft-agile">
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
                        </div>
                        <div className="git-figma">
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
            </section>

            <section className="footer">
                <div className="contact-area-footer">
                    <ContactArea/>
                </div>
                <Footer />
            </section>   

        </div>
    )
}

export default Services;
