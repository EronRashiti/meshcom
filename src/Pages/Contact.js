import React from 'react';
import NavBar from '../Components/NavBar';
import AddressContact from '../Assets/address_contact.svg';
import PhoneContact from '../Assets/phone_contact.svg';
import MailContact from '../Assets/mail_contact.svg';
import defaultSurveyConfig from '../Config/survey';
import SurveyComponent from '../Components/SurveyComponent';
import ContactArea from '../Components/ContactArea';
import Footer from '../Components/Footer';

function Contact() {
    return (
        <div className="contact">

             <div className="contact-hero">
                <NavBar />
                <div className="container">

                   <div className="contact-hero-content">
                        <div className="contact-hero-title">
                            <h1 id="contact-hero-title">our contact info<span className="contact-line"></span></h1>
                        </div>
                        <div className="contact-hero-info">
                            <div className="contact-address contact-infos">
                                <img className="contact-info-image contact-info-image1 " src={AddressContact}/>
                                <a href="#" className="contact-info-text">Untere Hauptstraße 24 2443</a>
                            </div>
                            <div className="contact-number contact-infos">
                                <img className="contact-info-image contact-info-image2" src={PhoneContact}/>
                                <a href="#" className="contact-info-text">+43 676 655 9798</a>
                            </div>
                            <div className="contact-email contact-infos">
                                <img className="contact-info-image contact-info-image3" src={MailContact}/>
                                <a href="#" className="contact-info-text">office@mesh-com.at</a>
                            </div>
                        </div>
                   </div>

                   <div className="contact-hero-talk">
                        <div className="contact-hero-talk-title">
                            <h1 id="contact-talk-title">let’s talk<span className="talk-line"></span></h1>
                        </div>
                        <div className="lets-talk-survey">
                            <SurveyComponent 
                                css={defaultSurveyConfig.defaultSurveyCSS}
                                data={defaultSurveyConfig.defaultSurveyDATA}
                                json={defaultSurveyConfig.defaultSurveyJSON}
                                onComplete={(survey: any) => {
                                    console.log(survey.data);
                                }}
                            />
                        </div>
                   </div>    
                </div>
            </div>

        </div>
    )
}

export default Contact;
