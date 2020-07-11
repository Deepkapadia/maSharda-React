import React from 'react'
import CountUp from 'react-countup'

function Achivements() {

   const impactData = [
        {
            counts:3159000,
            impactName:'Donations'
        },
        {
            counts:560,
            impactName:'Collection'
        },
        {
            counts:468,
            impactName:'Doners'
        },
        {
            counts:308,
            impactName:'Events'
        }
    ];

    return (
        <div className="achievement-area">
            <div className="container">
                <div className="col-lg-12 text-center">
                    <div className="sec-title">
                        <span className="title cl3">Our Impact</span>
                    </div>
                </div>
                <br></br>
                <div className="row">
                {
                    impactData.map((item, index) => (
                    <div className="col-lg-3 col-md-3 col-sm-6" key={item.counts}>
                        <div className="single-counter-box">
                            <p className="counter-number"><span><CountUp start={0} end={item.counts} duration={2} separator="," /></span></p>
                            <h6>{item.impactName}</h6>
                        </div>
                    </div>
                    ))
                }
                </div>
            </div>
        </div>
    )
}

export default Achivements
