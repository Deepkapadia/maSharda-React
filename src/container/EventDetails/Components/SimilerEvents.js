import React from 'react'

function SimilerEvents() {

    const similerEvents = [
        {
            id:1,
            day:'04',
            month:'June',
            title:'Event Title',
            description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit rerum culpa molestiae impedit, incidunt minus nesciunt reiciendis quo exercitationem eligendi eius vero debitis dolores laboriosam blanditiis fugiat iure pariatur eveniet.',
            image:require('../../../Static/img/e1.jpg')
        },
        {
            id:2,
            day:'04',
            month:'June',
            title:'Event Title',
            description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit rerum culpa molestiae impedit, incidunt minus nesciunt reiciendis quo exercitationem eligendi eius vero debitis dolores laboriosam blanditiis fugiat iure pariatur eveniet.',
            image:require('../../../Static/img/e2.jpg')
        },
        {
            id:3,
            day:'04',
            month:'June',
            title:'Event Title',
            description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit rerum culpa molestiae impedit, incidunt minus nesciunt reiciendis quo exercitationem eligendi eius vero debitis dolores laboriosam blanditiis fugiat iure pariatur eveniet.',
            image:require('../../../Static/img/e3.jpg')
        },
        {
            id:4,
            day:'04',
            month:'June',
            title:'Event Title',
            description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit rerum culpa molestiae impedit, incidunt minus nesciunt reiciendis quo exercitationem eligendi eius vero debitis dolores laboriosam blanditiis fugiat iure pariatur eveniet.',
            image:require('../../../Static/img/e4.jpg')
        }
    ]

    return (
        <div>
            <div className="col-lg-12">
            <h5>Similer Events </h5>
            </div>
            <div className="content-side col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="event-grid">
                    <div className="row clearfix">
                        {
                            similerEvents.map((items,index) => (
                                <div className="event-block-two col-lg-6 col-md-6 col-sm-6 col-xs-12" key={items.id}>
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <div className="date"><span>{items.day}</span> {items.month}</div>
                                            <a href="/#"><img src={items.image} alt=""/></a>
                                        </div>
                                        <div className="content-box">
                                            <h4><a href="/#">{items.title}</a></h4>
                                            <p>{items.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SimilerEvents
