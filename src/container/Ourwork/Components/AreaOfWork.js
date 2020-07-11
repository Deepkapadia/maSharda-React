import React from 'react'

function AreaOfWork() {

    const AreaofWork = [
        {
            id:1,
            image:require('../../../Static/img/area-of-work2.jpg'),
            title:'Education',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas eligendi vitae perferendis voluptatum voluptatibus dolores architecto doloribus excepturi natus facere voluptates, nesciunt consequatur.'
        },
        {
            id:2,
            image:require('../../../Static/img/area-of-work2.jpg'),
            title:'Cooperative Society',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas eligendi vitae perferendis voluptatum voluptatibus dolores architecto doloribus excepturi natus facere voluptates, nesciunt consequatur.'
        },
        {
            id:3,
            image:require('../../../Static/img/area-of-work2.jpg'),
            title:'Farmer support',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas eligendi vitae perferendis voluptatum voluptatibus dolores architecto doloribus excepturi natus facere voluptates, nesciunt consequatur.'
        },
        {
            id:4,
            image:require('../../../Static/img/area-of-work2.jpg'),
            title:'Other humanitarian work',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas eligendi vitae perferendis voluptatum voluptatibus dolores architecto doloribus excepturi natus facere voluptates, nesciunt consequatur.'
        }
    ]

    return (
        <div className="event-container">
            <div className="auto-container ">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="about-content text-center" data-aos="fade-down">
                            <div className="sec-title">
                                <span className="title">Areas of work</span>
                                <h2>Area of <span>Work </span> We Do.</h2>
                            </div>
                            <div className="pad-lft-15 pad-rgt-15 pad-bot-25">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas eligendi vitae
                                    perferendis voluptatum voluptatibus dolores architecto doloribus excepturi natus facere
                                    voluptates, nesciunt consequatur.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    {
                        AreaofWork.map((items, index) => (
                            <div className="col-lg-6 col-md-6" key={items.id}>
                                <div className="each-case-2">
                                    <div className="case-2-img">
                                        <a href="/#"><img src={items.image} alt=""/></a>
                                    </div>
                                    <div className="case-2-texts bg-light-white">
                                        <h3 className="cl1">{items.title}</h3>
                                        <p>{items.description} 
                                            <span><a href="/#" className="ebtn">&nbsp; Explore 
                                            <i className="fa fa-arrow-right"></i> </a></span></p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default AreaOfWork
