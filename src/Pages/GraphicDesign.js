import React from 'react';
import NavBar from '../Components/NavBar';
import SS1 from '../Assets/mesh-com-graphic-design-img.webp';
import ContactArea from '../Components/ContactArea';
import Footer from '../Components/Footer';


function AppDevelopment() {
    return (
        <div className="graphic-design">
                <section className="single-service-hero">
                    <NavBar />
                        <div className="single-service-hero-content">
                            <div className="single-service-text-content">
                                <h1 id="single-service-title">Graphic<br/>Design</h1>
                                <p id="single-service-text">Computer und Informationstechnologie bringen viele 
                                Vorteile und Erleichterungen. Sowohl im privaten als auch im beruflichen Bereich sind sie
                                 aus unserem Alltag inzwischen nicht mehr wegzudenken.<br/>
                                <br/>
                                Aber diese Technik braucht Sachverstand und manchmal auch etwas Unterstützung. 
                                Dafür sind wir da. Wir bieten eine umfangreiche Palette
                                    von Dienstleistungen in den Bereichen IT Service und IT Betreuung und
                                    sind damit Ihre rechte Hand in allen Themen rund um Hardware, Software, Automatisierung 
                                    und IT-Technik.
                                    
                                </p>
                            </div>
                            <div class="single-service-images">
                                <img id="single-images" src={SS1} alt="mesh-com-graphic-design-img"></img>
                        </div>
                </div>
        </section>

            <section className="single-service-section1">
                <div className="container">
                    <h1 className="work-method-title">Work method and process</h1>
                    <div className="work-method-process-content">
                        <div className="work-method-process">
                            <h1 className="process-number">1</h1>
                            <h1 className="process-title">Insight</h1>
                            <p className="process-text">We initially try to gain an accurate and deep  intuitive understanding of<br/>
                                your requirements, ideas and needs.</p>
                        </div>
                        <div className="work-method-process">
                            <h1 className="process-number">2</h1>
                            <h1 className="process-title">Analysis</h1>
                            <p className="process-text"> We then provide a detailed examination of the elements or structure of your company through our research methods and technologically-advanced tools. </p>
                        </div>
                        <div className="work-method-process">
                            <h1 className="process-number">3</h1>
                            <h1 className="process-title">Brainstorming</h1>
                            <p className="process-text">Our team develops creativity techniques and puts a lot of effort to come up with an idea or solution for a specific problem through spontaneous idea generation.</p>
                        </div>
                        <div className="work-method-process">
                            <h1 className="process-number">4</h1>
                            <h1 className="process-title">Design</h1>
                            <p className="process-text">After brainstorming, we strive to translate all our ideas into the design that is perfectly fit to your imagination.</p>
                        </div>
                        <div className="work-method-process">
                            <h1 className="process-number">5</h1>
                            <h1 className="process-title">Development</h1>
                            <p className="process-text">All design comes alive through coding and interactive digits.</p>
                        </div>
                        <div className="work-method-process">
                            <h1 className="process-number">6</h1>
                            <h1 className="process-title">Testing</h1>
                            <p className="process-text">Our final step before launch. We test the product’s functionality and make sure there aren’t any sudden backlashes.</p>
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

export default AppDevelopment;
