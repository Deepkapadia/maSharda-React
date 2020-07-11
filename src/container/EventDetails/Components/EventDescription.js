import React from 'react'
import EventLocation from './EventLocation'
import SimilerEvents from './SimilerEvents'

function EventDescription() {
    return (
        <div className="col-lg-8 col-md-12">
            <div className="event-details">
                <img src={require('../../../Static/img/event_bg.jpg')} alt=""/>
                <p className="event-date">
                    <i className="las la-calendar-check"></i>
                    June 26, 2020
                </p>
                <h6>Cloth Donation to helpless people</h6>
                <p className="event-meta"> 
                    <i className="las la-clock"></i> 
                    <span>1:00 pm | 
                        <i className="las la-map-marker"></i> 
                    </span> 
                    <span>Althan, Surat</span> 
                </p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, cupiditate, beatae?
                    Magni provident dolorem numquam esse, facere dignissimos alias dolores sequi, ad,
                    voluptatibus fuga asperiores magnam, dolor error eaque eum!
                </p>
                <br></br>
                <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum saepe magnam, quam quae,
                    nobis, quidem blanditiis nemo mollitia doloribus provident corporis voluptatibus!
                    Suscipit inventore pariatur nobis repudiandae mollitia corporis commodi.
                </p>
                <br></br>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aspernatur similique
                    nobis, unde fugit sed soluta officiis dignissimos assumenda explicabo perspiciatis omnis
                    temporibus eveniet sint dolor ut qui, nisi iste!
                </p>
                <EventLocation/>
                <br></br>
                <SimilerEvents/>
            </div>
        </div>
    )
}

export default EventDescription
