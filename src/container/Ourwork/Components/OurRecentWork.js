import React from 'react'
import OtherPost from './recentWorkSection/OtherPost';
import PastWorkDetails from './recentWorkSection/PastWorkDetails';

function OurRecentWork() {
    return (
        <div className="event-container">
            <div className="container">
                <div className="auto-container ">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="about-content text-center" data-aos="fade-down">
                                <div className="sec-title">
                                    <span className="title">Our Recent Work</span>
                                    <h2>Have a look on our<span> Recent Work</span></h2>
                                </div>
                                <div className="pad-lft-15 pad-rgt-15 pad-bot-25">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas eligendi vitae
                                        perferendis voluptatum voluptatibus dolores architecto doloribus excepturi natus
                                        facere voluptates, nesciunt consequatur.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <OtherPost/>
                    <PastWorkDetails/>
                </div>
            </div>
        </div>
    )
}

export default OurRecentWork
