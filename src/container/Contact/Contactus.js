import React from 'react'
import Breadcroumb from '../../components/Breadcroumb/Breadcroumb'
import BeforeFooterSection from '../../components/BeforeFooterSection/BeforeFooterSection'
import withScrollHOC from '../../HOC/ScrollHOC'
import PrimaryBtn from '../../components/Buttons/PrimaryBtn'

function Contactus() {

    return (
        <div>
            <Breadcroumb name="Contact Us"/>
            <div className="contact-section section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="about-content text-center" data-aos="fade-down">
                                <div className="sec-title">
                                    <span className="title">Contact Us</span>
                                    <h2>Find Us <span>Easy</span> Way</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 text-center">
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="contact-detail">
                                        <p><i className="las la-map-marker"></i><b>Address</b>
                                            <span> Maa Sharda Jan Seva Samiti, </span>
                                            <span>Masi, Almora, Uttarakhand 263658, India</span>
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="contact-detail">
                                        <p><i className="las la-mobile"></i><b>Contact</b>
                                            <span>+91 958 247 1559</span>
                                            <span>+91 958 247 1559</span>
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="contact-detail">
                                        <p><i className="las la-envelope"></i><b>Email</b>
                                            <span>rudra@mabharati.com</span>
                                            <span>rudra@mabharati.com</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="map-area map-padding pad-bot-50">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <div className="map-section">
                                                        <iframe title="ORG Location"
                                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14883.858828052933!2d72.79944028529431!3d21.153802774891044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be051ffd68cfdfd%3A0x50eef593fa09ce97!2sAlthan%2C%20Surat%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1594035489182!5m2!1sen!2sin"
                                                            width="600" height="450" frameBorder="0" style={{border:'0'}}
                                                            allowFullScreen="" aria-hidden="false" tabIndex="0">
                                                        </iframe> 
                                                        <i className="las la-map-marker"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="contact-form ">
                                        <form name="contact-form" id="contactForm" action="sendemail.php" method="POST">
                                            <input type="text" name="name" id="name" required="" placeholder="User Name"/>
                                            <input type="email" name="email" id="email" required="" placeholder="Your E-mail"/>
                                            <input type="text" name="subject" id="subject" placeholder="Subject"/>
                                            <textarea name="message" id="message" cols="30" rows="10" required=""
                                                placeholder="How can help you?"></textarea>
                                            <PrimaryBtn to="/#" ButtonText="Send Message"/>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <BeforeFooterSection/>
        </div>
    )
}

export default withScrollHOC(Contactus)
