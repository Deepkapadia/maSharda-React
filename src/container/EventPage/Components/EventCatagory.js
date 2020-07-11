import React from 'react'
import ExploreBtn from '../../../components/Buttons/ExploreBtn'

function EventCatagory() {

    const catagories = [
        {
            id:1,
            icon:'fa fa-graduation-cap',
            title: 'Education',
            description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit'
        },{
            id:2,
            icon:'fa fa-home',
            title: 'Co-operative Society',
            description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit'
        },{
            id:3,
            icon:'fa fa-gavel',
            title: 'Farmer Support',
            description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit'
        },{
            id:4,
            icon:'fa fa-users',
            title: 'Humanitarian Work',
            description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit'
        }
    ];

    const infos = 
    {
        infoTitle: 'Event Categories',
        headingNormalStart:'Which kind of',
        headingSpan: 'Events',
        headingNormalEnd:' We Do.',
        paragraph:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas eligendi vitae perferendis voluptatum voluptatibus dolores architecto doloribus excepturi natus facere voluptates, nesciunt consequatur.'
    }

    return (
        <div className="event-container" >
            <div className="container">
                <div className="auto-container ">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="about-content text-center" data-aos="fade-down">
                                <div className="sec-title">
                                    <span className="title">Event Categories</span>
                                        <h2>{infos.headingNormalStart} <span>{infos.headingSpan}</span> {infos.headingNormalEnd}</h2>
                                </div>
                                    <p>{infos.paragraph}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="choose-us-area section-padding2">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="about-us-content-area">
                                    <div className="row">
                                        {
                                            catagories.map((item, index) => (
                                                <div className="col-lg-3 col-md-6 col-sm-12" data-aos="flip-left" key={item.id}>
                                                    <div className="single-service-item">
                                                        <i className={item.icon}></i>
                                                        <h5>{item.title}</h5>
                                                        <p>{item.description}</p>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ExploreBtn/>
            </div>
        </div>
    )
}

export default EventCatagory
