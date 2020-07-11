import React from 'react'
import { NavLink } from 'react-router-dom';
import logo from '../../Static/img/Logo.png'

function Footer() {

    return (
        <footer className="footer-area">
            <div className="container">
                <div className="footer-up">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-12 text-left">
                            <div className="logo">
                                <a className="navbar-brand" href="index.html">
                                    <img src={logo} alt="logo"/>
                                </a>
                            </div>
                            <p>We are common people based in Uttarakhand. we are working to make society a better place to live. Educated, Free, and Proud Society. We started our journey in 2002 by making a small group in Masi (Uttarakhand).</p>
                        </div>
                        <div className="col-lg-3 text-center col-md-6 com-sm-12">
                            <h5>Links</h5>
                            <ul>
                                <li>
                                    <NavLink to="/" exact={true} href="/#">Home</NavLink>
                                    <NavLink to="/about">About</NavLink>
                                    <NavLink to="/ourwork">Our Works</NavLink>
                                    <NavLink to="/events">Events</NavLink>
                                    <NavLink to="/contact">Contact</NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="contact-info">
                                <h5><span><i className="fa fa-map-marker"></i>&nbsp;&nbsp;Address</span></h5>
                                <p>Maa Sharda Jan Seva Samiti, Masi, Almora, Uttarakhand 263658, India</p>
                                <h5><span>
                                    <a href="https://www.facebook.com/mashardaservice/">
                                        <i className="fa fa-facebook"></i>
                                    </a>
                                    </span>
                                    &nbsp;&nbsp;&nbsp;
                                    <span>
                                        <a href="https://www.google.co.jp/maps/place/Maa+Sharda+Jan+Seva+Samiti/@29.817738,79.281996,15z/data=!4m5!3m4!1s0x0:0x380ac11bfbc24fdf!8m2!3d29.817738!4d79.281996">
                                            <i className="fa fa-google"></i>
                                        </a>
                                    </span>
                                </h5>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="subscribe-form">
                                <h5><span><i className="fa fa-phone"></i>&nbsp;&nbsp;Contact</span></h5>
                                <p><a href="tel:9582471559" className="cl3">+91 95824 71559</a></p>
                                <h5><span><i className="fa fa-envelope"></i>&nbsp;&nbsp;Email</span></h5>
                                <p><a href="mailto:rudra@mabharati.com" className="cl3">rudra@mabharati.com</a></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-lg-12 col-md-12 col-sm-12 text-center">
                            <p className="copyright-line">© 2020 Maa Sharda Jan Seva Samiti. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
