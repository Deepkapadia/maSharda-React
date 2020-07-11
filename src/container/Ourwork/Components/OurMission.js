import React from 'react'
import OwlCarousel from 'react-owl-carousel';

function OurMission() {
    const content = [
        {   
            id:1,
            image: 'https://mdbootstrap.com/img/Photos/Slides/img%20(130).jpg'
        },
        {
            id:2,
            image: 'https://mdbootstrap.com/img/Photos/Slides/img%20(129).jpg'
        },
        {
            id:3,
            image: 'https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg'
        }
    ];
    return (
        <div>
            <section className="about-section">
                <div className="auto-container">
                    <div className="row clearfix">
                        <div className="content-column pull-right col-lg-6 col-md-12 col-sm-12 col-xs-12">
                            <div className="inner-column">
                                <div className="sec-title" data-aos="fade-down">
                                    <span className="title">Our Mission</span>
                                    <h2>Lorem ipsum<br></br>Lorem Ipsum<br></br><span>Lorem Ipsum</span></h2>
                                </div>
                                <br></br>
                                <div className="text" data-aos="fade-down">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam corporis repudiandae
                                        eum incidunt tempore maiores recusandae deserunt, ullam, distinctio quo rem explicabo
                                        accusamus eos eius veritatis. Explicabo aliquam repellendus, nobis.Lorem ipsum dolor sit
                                        amet, consectetur adipisicing elit. In rerum voluptate atque omnis tempora temporibus
                                        perspiciatis nobis ullam vero, mollitia nihil at, veritatis, maxime delectus alias
                                        voluptatibus cumque magnam nostrum.</p>
                                </div>
                                <a href="/#" className="main-button main-button-show">Donate Now</a>
                            </div>
                        </div>
                        <div className="image-column col-lg-6 col-md-12 col-sm-12 col-xs-12 corner">
                            <div id="carousel-example-1z" data-aos="fade-up" className="carousel slide carousel-fade shadow" data-ride="carousel">
                                <OwlCarousel className="logo-carousel owl-carousel"
                                    loop={true}
                                    autoplay={true}
                                    items={1}
                                    dots={false}>
                                        {
                                            content.map((item,index) => (
                                                <div className="carousel-item active" key={item.id}>
                                                    <img className="d-block w-100"
                                                        src={item.image} alt="First slide"/>
                                                </div>
                                            ))
                                        }
                                </OwlCarousel>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default OurMission
