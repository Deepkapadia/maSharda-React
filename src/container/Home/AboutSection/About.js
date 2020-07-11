import React from 'react'
import PrimaryBtn from '../../../components/Buttons/PrimaryBtn'

function About() {
    return (
        <section className="about-section aboutBG">
            <div className="auto-container">
                <div className="row clearfix">
                    <div className="image-column col-md-6 col-sm-12 col-xs-12">
                        <div className="inner-column">
                            <figure className="image-1"><img data-aos="fade-right" src={require('../../../Static/img/about-img-1.jpg')} className="abt-cor-img2" alt=""/></figure>
                        </div>
                    </div>
                    <div className="content-column pull-right col-md-6 col-sm-12 col-xs-12">
                        <div className="inner-column">
                            <div className="sec-title">
                                <span className="title" 
                                        data-aos="fade-down"
                                        data-aos-easing="linear"
                                        data-aos-duration="600">
                                    About Us
                                </span>
                                <h2 data-aos="fade-down"
                                        data-aos-easing="linear"
                                        data-aos-duration="600">Welcome to <br></br>Ma Sharda ORG.<br></br><span>please rise your helping hand</span></h2>
                            </div>
                            <br></br>
                            <div className="text" data-aos="fade-up">We are common people based in Uttarakhand. we are working to make society a better place to live. Educated, Free, and Proud Society. <br></br>We started our journey in 2002 by making a small group in Masi (Uttarakhand)</div>
                            <div data-aos="fade-up" className="our-help">
                                <ul>
                                    <li><a href="/#">Education</a></li>
                                    <li><a href="/#">Co-operative Society</a></li>
                                    <li><a href="/#">Farmer Support</a></li>
                                    <li><a href="/#">Humanitarian Work</a></li>
                                </ul>
                            </div>
                            <PrimaryBtn to="/contact"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
