import React, { Fragment } from 'react'

function Volunteer() {

    const VolunteerData = [
        {
            id:1,
            image:'team-member-bg',
            name:'Deep Kapadia',
            FBLink:'https://www.facebook.com/deep.kapadia.927',
            TwitterLink:'https://twitter.com/KapadiaDeep12',
            InstaLink:'https://www.instagram.com/deep_kapadia/'
        },
        {
            id:2,
            image:'volunteer-bg-2',
            name:'Deep Kapadia',
            FBLink:'https://www.facebook.com/deep.kapadia.927',
            TwitterLink:'https://twitter.com/KapadiaDeep12',
            InstaLink:'https://www.instagram.com/deep_kapadia/'
        },
        {
            id:3,
            image:'volunteer-bg-3',
            name:'Deep Kapadia',
            FBLink:'https://www.facebook.com/deep.kapadia.927',
            TwitterLink:'https://twitter.com/KapadiaDeep12',
            InstaLink:'https://www.instagram.com/deep_kapadia/'
        },
        {
            id:4,
            image:'volunteer-bg-2',
            name:'Deep Kapadia',
            FBLink:'https://www.facebook.com/deep.kapadia.927',
            TwitterLink:'https://twitter.com/KapadiaDeep12',
            InstaLink:'https://www.instagram.com/deep_kapadia/'
        },
        {
            id:5,
            image:'volunteer-bg-3',
            name:'Deep Kapadia',
            FBLink:'https://www.facebook.com/deep.kapadia.927',
            TwitterLink:'https://twitter.com/KapadiaDeep12',
            InstaLink:'https://www.instagram.com/deep_kapadia/'
        },
        {
            id:6,
            image:'team-member-bg',
            name:'Deep Kapadia',
            FBLink:'https://www.facebook.com/deep.kapadia.927',
            TwitterLink:'https://twitter.com/KapadiaDeep12',
            InstaLink:'https://www.instagram.com/deep_kapadia/'
        }
    ]

    return (
        <Fragment>
            <div className="team-area section-padding">
                <div className="container">
                    <div className="auto-container">
                        <div className="row clearfix mr0">
                            <div className="col-lg-12">
                                <div data-aos="fade-down" className="about-content text-center">
                                    <div className="sec-title">
                                        <span className="title">MEET OUR Volunteer</span>
                                        <h2>Join us<span> to Help</span> Someone</h2>
                                    </div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas eligendi vitae
                                            perferendis voluptatum voluptatibus dolores architecto doloribus excepturi natus
                                            facere
                                            voluptates, nesciunt consequatur.
                                        </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {
                            VolunteerData.map((item, index) => (
                                <div className="col-lg-4 col-md-4 pad-top-30" data-aos="zoom-in" key={item.id}>
                                    <div className="single-team-member">
                                        <div className={item.image}>
                                            <div className="team-content">
                                                <div className="team-title">
                                                    <a href="/#">{item.name}</a>
                                                </div>
                                                <div className="team-subtitle">
                                                    <p>Social Details</p>
                                                </div>
                                                <ul className="team-social">
                                                    <li>
                                                        <a href={item.FBLink}><i className="fa fa-facebook-f" aria-hidden="true"></i> </a>
                                                    </li>
                                                    <li>
                                                        <a href={item.TwitterLink}><i className="fa fa-twitter" aria-hidden="true"></i> </a>
                                                    </li>
                                                    <li>
                                                        <a href={item.InstaLink}><i className="fa fa-instagram" aria-hidden="true"></i> </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Volunteer
