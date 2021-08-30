import React from 'react';
import NavBar from '../Components/NavBar';
import Main from '../Components/Main';
import Showandhide from '../Components/Showandhide'
import ReactPlayer from 'react-player/youtube';
import RecShape from '../Assets/rec-shape.svg';
import Slider from '../Components/Slider';
import ContactFormHome from '../Components/ContactFormHome';
import Footer from '../Components/Footer'
import ContactArea from '../Components/ContactArea';


function Home() {
    return (
        <div className="home">

            <div className="home-hero">
                <NavBar />
                <Main />
            </div>

            <div className="video-container">
                <div className="home-section1">            
                    <div className="player">
                        <ReactPlayer url='https://www.youtube.com/watch?v=MQw68AVw6uY' controls="true"/>
                        <span className="circle"></span>                        
                    </div>
                    <div className="home-section1-text">
                        <h1 id="section1-title">Get Solution <br/> For Your Business</h1>
                        <p id="section1-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
                            Aenean commodo ligula eget dolor. Aenean massa.
                            Cum sociis natoque penatibus et magnis dis parturient montes, 
                            nascetur ridiculus mus. Donec quam felis, ultricies nec,</p>
                        <span className="icon"></span>    
                    </div> 
                </div>    
            </div>    

            <div className="home-section2">
                <img id="home-section2-shape" src={RecShape}/>
                <div className="container">
                    <div className="home-section2-content">
                        <div className="home-section2-history">
                            <h1 id="home-section2-history">MESHCOM<br/>LITTLE HISTORY <span className="dot"></span> </h1>
                        </div>

                        <div className="home-section2-text">
                            <div>
                                <h1 id="home-section2-text-title">about us <span className="line"></span></h1>
                            </div>
                            <div>
                                <p id="home-section2-text-text">Von der Systemwartung bis zu Social Media und vom Grafikdesign bis<br/>
                                zum Backup-Management: Wenn wir hören, dass Sie IT-Hilfe<br/> 
                                brauchen, sind wir schon unterwegs.<br/>
                                <br/>
                                Bei uns sind Sie richtig, wenn es um Computer, Internet und<br/>
                                IT-Systeme geht. Informieren Sie sich hier über unser<br/>
                                Leistungsspektrum oder kontaktieren Sie uns mit Ihrem Anliegen, wir<br/>
                                sind für Sie da!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="home-section3">
                <div className="rectangle-bg"></div>
                    <div className="container">
                        <h1 id="what-we">what we <span id="do"> do!</span></h1>
                    </div>
                    <div className="container-section3 what-we-do-services">
                    <Showandhide />
                    </div>
            </div>

            <div className="home-section4">
                <div className="container">
                    <div className="home-section4-title">
                        <h1 id="title-work">work.<span className="linee"></span></h1>
                    </div>
                    <div className="home-section4-slider">
                        <Slider/>
                    </div>
                </div>
            </div>

            <div className="home-section5">
                <div className="container">
                    <div className="home-section5-title">
                        <h1 id="title-contactus">contact us<span className="lineee"></span></h1>
                    </div>
                    <div className="home-section5-form">
                        <div className="get-in-touch">
                            <h1 id="get-in-touch">Let’s <br/>get <br/> in touch</h1>
                        </div>
                        <div className="contact-form-home">
                            <ContactFormHome />
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

export default Home;
