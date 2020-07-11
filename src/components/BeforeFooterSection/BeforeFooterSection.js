import React from 'react'
import PrimaryBtn from '../Buttons/PrimaryBtn'

function BeforeFooterSection() {
    return (
        <div className="cta-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <div className="sec-title">
                            <span className="title cl3">Join Now</span>
                            <h2>Please <span>Support us</span> in our Events.</h2>
                        </div>
                    </div>
                </div>
                <PrimaryBtn to="/contact" className="text-center"/>
            </div>
        </div>
    )
}

export default BeforeFooterSection
