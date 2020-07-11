import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export function HeroSlider() {
        const content = [
            {
                smallTitle: 'Charity is Everywhere.',
                mainTitle_normalColor:'You have the Power',
                mainTitle_BreakTitle:'to Bring ',
                mainTitle_PrimaryColor:'Happiness',
                button: 'Donate Now',
                image: 'single-slide-item',
            },
            {
                smallTitle: 'Charity is Everywhere.',
                mainTitle_normalColor:'You have the Power',
                mainTitle_BreakTitle:'to Bring ',
                mainTitle_PrimaryColor:'Happiness',
                button: 'Donate Now',
                image: 'single-slide-item',
            },
            {
                smallTitle: 'Charity is Everywhere.',
                mainTitle_normalColor:'You have the Power',
                mainTitle_BreakTitle:'to Bring ',
                mainTitle_PrimaryColor:'Happiness',
                button: 'Donate Now',
                image: 'single-slide-item',
            },
            {
                smallTitle: 'Charity is Everywhere.',
                mainTitle_normalColor:'You have the Power',
                mainTitle_BreakTitle:'to Bring ',
                mainTitle_PrimaryColor:'Happiness',
                button: 'Donate Now',
                image: 'single-slide-item',
            }
        ];
        return (
            <OwlCarousel
                className="homepage-slides owl-carousel"
                loop={true}
                autoplay={true}
                items={1}
                nav 
                dots={false}
                responsiveRefreshRate >
                {
                    content.map((item, index) => (
                        <div key={index}>
                            <div className={item.image}>
                                <div className="hero-area-content">
                                    <div className="container">
                                        <div className="row justify-content-center">
                                            <div className="col-lg-12 text-center wow fadeInUp animated" data-wow-delay=".2s">
                                                <div data-aos="fade-down" className="section-title">
                                                    <h5>{item.smallTitle}</h5>
                                                    <h1>{item.mainTitle_normalColor}
                                                        <br></br> {item.mainTitle_BreakTitle} 
                                                            <b>{item.mainTitle_PrimaryColor}</b> 
                                                    </h1>
                                                    <a href="/#" className="main-button main-button-show">{item.button}</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </OwlCarousel>
        )
    
}

export default HeroSlider;
