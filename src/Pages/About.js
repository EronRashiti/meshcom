import React from 'react';
import NavBar from '../Components/NavBar';
import Team from '../Assets/mesh-com-team.webp';
import ContactArea from '../Components/ContactArea';
import Footer from '../Components/Footer';
// import Roll from 'react-reveal/Roll';

function About() {
    return (
        <div className="about">

            <section className="about-hero">
                <NavBar />
                <img className="team" src={Team} alt="mesh-com-team"/>
                <div className="about-gradient">
                    <h1 className="about-hero-title">das motivierte team <br/>von Mesh COM</h1>
                    <p className="immer-für-dich-da">immer für dich da</p>
                </div>
            </section>

            <section className="about-section1">
                <div className="container">
                    {/* <Roll right> */}
                        <p id="about-section1-text1">Mit unserer Erfahrung und vielen umgesetzten Projekten<br/>
                        sind wir der richtige Ansprechpartner</p>
                        <p id="about-section1-text2">Seit 2016 sind wir nun im Einsatz für den Kunden. Unser Dienstleistungsspektrum hat<br/>
                        sich im Laufe der Jahre erweitert. IT Dienstleistungen, Webdesign, Digital Marketing,<br/>
                        Grafikdesign und App Entwicklung. Wir sind Ihr Ansprechpartner, wen es um die digitale<br/>
                        Welt geht.
                        Das beste Team stellt die besten Produkte her. Wir gehen unserer Arbeit mit voller<br/>
                        Leidenschaft nach und unterstützen Unternehmen dabei, ihre digitalen Fähigkeiten zu<br/>
                        stärken.</p>
                    {/* </Roll> */}
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

export default About
