import React, { Fragment } from 'react'
import Breadcroumb from '../../components/Breadcroumb/Breadcroumb'
import AboutORG from './Components/AboutORG'
import Volunteer from './Components/Volunteer'
import withScrollHOC from '../../HOC/ScrollHOC'
import FAQ from './Components/FAQ'
import BeforeFooterSection from '../../components/BeforeFooterSection/BeforeFooterSection'
import WhyChooseUs from './Components/WhyChooseUs'

function AboutUs() {
    return (
        <Fragment>
            <Breadcroumb name="About Us"/>
            <AboutORG/>
            <WhyChooseUs/>
            <div className="cta-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <div data-aos="fade-down" className="sec-title">
                            <h2>Please <span>Support us</span> in our Events.</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                                Voluptas eligendi vitae perferendis voluptatum voluptatibus 
                                dolores architecto doloribus excepturi natus facere voluptates, 
                                nesciunt consequatur. </p>
                        </div>
                    </div>
                </div>
                {/* <PrimaryBtn to="/contact" className="text-center"/> */}
            </div>
            </div>
            <Volunteer/>
            <FAQ/>
            <BeforeFooterSection/>
        </Fragment>
    )
}

export default withScrollHOC(AboutUs)
