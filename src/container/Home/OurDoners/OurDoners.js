import React from 'react'
import OwlCarousel from 'react-owl-carousel';

function OurDoners() {

    const content = [
        {
            image: require('../../../Static/img/a1.png')
        },
        {
            image: require('../../../Static/img/a1.png')
        },
        {
            image: require('../../../Static/img/a1.png')
        },
        {
            image: require('../../../Static/img/a1.png')
        }
    ];

    return (
        <div className="cta-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <div className="sec-title">
                            <span className="title" style={{color:'white'}}>Our Doners</span>
                            <h2>Who <span>helped</span> us</h2>
                        </div>
                        <OwlCarousel className="logo-carousel owl-carousel"
                            loop={true}
                            autoplay={true}
                            items={5}
                            margin={50}
                            dots={false}>
                                {
                                    content.map((item, index) => (
                                        <div className="single-logo-wrapper" key={index}>
                                            <div className="logo-inner-item">
                                                <img src={item.image} alt={item.image}/>
                                            </div>
                                        </div> 
                                    ))
                                }
                        </OwlCarousel>
                    </div>
                </div>
            </div>
        </div>                  
    )
}

export default OurDoners
