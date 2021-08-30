import React from 'react';
import NavBar from '../Components/NavBar';
import SS1 from '../Assets/ss1.jpg';
import SS2 from '../Assets/ss2.jpg';
import SS3 from '../Assets/ss3.jpg';

function AppDevelopment() {
    return (
        <div className="app-development">
                <div className="single-service-hero">
                    <NavBar />
                        <div className="single-service-hero-content">
                            <div className="single-service-text-content">
                                <h1 id="single-service-title">App<br/>Development</h1>
                                <p id="single-service-text">Computer und Informationstechnologie
                                bringen viele Vorteile und Erleichterungen.
                                Sowohl im privaten als auch im beruflichen Bereich sind
                                sie aus unserem Alltag inzwischen nicht mehr wegzudenken.<br/>
                                <br/>
                                Aber diese Technik braucht Sachverstand und manchmal auch etwas Unterstützung. 
                                Dafür sind wir da. Wir bieten eine umfangreiche Palette
                                    von Dienstleistungen in den Bereichen IT Service und IT Betreuung und
                                    sind damit Ihre rechte Hand in allen Themen rund um Hardware, Software, Automatisierung 
                                    und IT-Technik.
                                    
                                </p>
                            </div>
                            <div class="single-service-images">
                                <img id="single-images" src={SS1}></img>
                                <div className="single-service-inside-images">
                                    <img id="single-images" src={SS2}></img>
                                    <img id="single-images" src={SS3}></img>
                                </div>
                        </div>
                </div>
        </div>

            <div className="single-service-section1">

            </div>

        </div>
    )
}

export default AppDevelopment;
