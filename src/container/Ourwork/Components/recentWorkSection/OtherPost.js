import React from 'react'

function OtherPost() {

    const otherPosts = [
        {
            id:1,
            image: require('../../../../Static/img/thumb1.jpg'),
            title: 'Understand real world problems',
            date: '08:30 am / June 24, 2020'
        },
        {
            id:2,
            image: require('../../../../Static/img/thumb2.jpg'),
            title: 'Understand real world problems',
            date: '08:30 am / June 24, 2020'
        },
        {
            id:3,
            image: require('../../../../Static/img/thumb3.jpg'),
            title: 'Understand real world problems',
            date: '08:30 am / June 24, 2020'
        },
        {
            id:4,
            image: require('../../../../Static/img/thumb4.jpg'),
            title: 'Understand real world problems',
            date: '08:30 am / June 24, 2020'
        },
        {
            id:5,
            image: require('../../../../Static/img/thumb1.jpg'),
            title: 'Understand real world problems',
            date: '08:30 am / June 24, 2020'
        }
    ]
    return (
        <div className="sidebar-side col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <aside className="sidebar">
                <div className="sidebar-widget post-widget">
                    <div className="sidebar-title cl1">
                        <h4>Other Post</h4>
                    </div>
                    <hr></hr>
                    <div className="widget-content">
                        {
                            otherPosts.map((items,index) => (
                                <article className="post" data-aos="fade-right" key={items.id}>
                                    <div className="thumb"><a href="event-single.html"><img src={items.image}
                                                alt=""/></a>
                                    </div>
                                    <h3><a href="single-event2.html">{items.title}</a></h3>
                                    <div className="date">{items.date}</div>
                                </article>        
                            ))
                        }
                    </div>
                </div>
                <div className="sidebar-widget tags-widget">
                    <div className="sidebar-title">
                        <h3>Tags</h3>
                    </div>
                    <br></br>
                    <ul className="tag-list clearfix">
                        <li><a href="/#">Non Profit</a></li>
                        <li><a href="/#">Help</a></li>
                        <li><a href="/#">Donation</a></li>
                    </ul>
                </div>
            </aside>
        </div>
    )
}

export default OtherPost
