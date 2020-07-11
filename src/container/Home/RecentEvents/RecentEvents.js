import React from 'react'
import { Link } from 'react-router-dom';
import PrimaryBtn from '../../../components/Buttons/PrimaryBtn';

function RecentEvents() {
    const eventsData = [
        {
            id:1,
            eventImage:require('../../../Static/img/event_7.jpg'),
            eventTitle:'Lorem Ipsum',
            eventTime:'1:00pm to 9:00pm',
            eventLocation:' Althan,Surat',
            eventDescription:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat nemo iste aliquam laborum quos, provident, illum alias similique. Modi, laborum. Est earum quae consectetur, at hic ut id maiores. Architecto!'
        },
        {
            id:2,
            eventImage:require('../../../Static/img/event_1.jpg'),
            eventTitle:'Lorem Ipsum',
            eventTime:'1:00pm to 9:00pm',
            eventLocation:' Althan,Surat',
            eventDescription:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat nemo iste aliquam laborum quos, provident, illum alias similique. Modi, laborum. Est earum quae consectetur, at hic ut id maiores. Architecto!'
        },
        {   
            id:3,
            eventImage:require('../../../Static/img/event_7.jpg'),
            eventTitle:'Lorem Ipsum',
            eventTime:'1:00pm to 9:00pm',
            eventLocation:' Althan,Surat',
            eventDescription:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat nemo iste aliquam laborum quos, provident, illum alias similique. Modi, laborum. Est earum quae consectetur, at hic ut id maiores. Architecto!'
        }
    ]

    return (
        <div className="sidebar-page-container">
            <div className="auto-container">
                <div className="row clearfix mr0">
                    <div className="col-lg-12">
                        <div data-aos="fade-down" className="about-content text-center">
                            <div className="sec-title">
                                <span className="title">Events</span>
                                <h2>Recent Events<br></br><span>Helps them</span></h2>
                            </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas eligendi vitae
                                    perferendis voluptatum voluptatibus dolores architecto doloribus excepturi natus facere
                                    voluptates, nesciunt consequatur.</p>
                        </div>
                    </div>
                    <div className="row">
                        {
                            eventsData.map((item,index) => (
                                <div className="col-md-4 mt-4" key={item.index}>
                                    <div className="card ecard event-card">
                                        <div className="card-img-block">
                                        <Link to="/single-event" href="/#">
                                                <img className="card-img-top" 
                                                    src={item.eventImage}
                                                    alt="event"/>
                                            </Link>
                                        </div>
                                        <div className="card-body pt-0">
                                            <h5 className="card-title">
                                                <Link to="/single-event" 
                                                    href="/#" 
                                                    className="event_a">{item.eventTitle}</Link></h5>
                                            <h6 className="cl2"><i className="fa fa-clock-o cl1"></i> {item.eventTime} &nbsp;&nbsp;<i
                                                    className="fa fa-map-marker cl1"></i> {item.eventLocation} </h6>
                                            <p>{item.eventDescription}</p>
                                            <h6>
                                                <Link to="/single-event" href="/#" 
                                                className="cl2">Read more 
                                                </Link>
                                                    &nbsp;
                                                <i className="fa fa-arrow-right cl1"></i>
                                            </h6>
                                        </div>
                                    </div>
                                    <p className="mt-3 w-100 float-left text-center"/>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <PrimaryBtn ButtonText="Explore More" className="text-center" to="/events"/>
        </div>
    )
}

export default RecentEvents
