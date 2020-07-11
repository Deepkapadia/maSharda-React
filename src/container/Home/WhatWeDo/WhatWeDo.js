import React from 'react'
function WhatWeDo() {
    const Information = [
        {
            id:1,
            icon: 'icon flaticon-globe heart',
            title:'Education',
            description:'Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence'
        },
        {
            id:2,
            icon: 'icon flaticon-globe heart',
            title:'Become a Volunteer',
            description:'Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence'
        },
        {
            id:3,
            icon: 'icon flaticon-globe heart',
            title:'Give Scholarship',
            description:'Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence'
        }
    ];

    return (
        <section className="what-we-do">
            <div className="outer-container clearfix">
                <div className="content-column">
                    <div className="inner-box">
                        <div data-aos="fade-down" className="sec-title">
                            <span className="title">What we Do</span>
                            <h2>We help thousands of children to get<br></br> <span>their education</span></h2>
                        </div>
                        <div data-aos="fade-down" className="text">
                            <p>Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance indicators offline to maximise the long tail. Keeping your.</p>
                        </div>
                        <ul data-aos="fade-down" className="choose-info">
                            {
                                Information.map((item, index) => (
                                    <li key={item.id}>
                                    <span className={item.icon}></span>
                                    <h3><a href="/#" className="cl1">{item.title}</a></h3>
                                    <p>{item.description}</p>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
            <div className="image-column"></div>
        </section>
    )
}

export default WhatWeDo
