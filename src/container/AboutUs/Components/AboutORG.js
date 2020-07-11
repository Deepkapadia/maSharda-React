import React,{Fragment} from 'react'

function AboutORG() {

    const AboutInfo = [
        {
            id:1,
            title:'About',
            title2:'Loreum',
            title3:'Ipsm',
            paragraph:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            image:require('../../../Static/img/cta-bg-1.png')
        },
        {
            id:2,
            title:'About',
            title2:'About',
            title3:'About',
            paragraph:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            image:''
        }
    ]
    const AboutInfo2 = [
        {
            id:1,
            title:'About',
            title2:'Loreum',
            title3:'Ipsm',
            paragraph:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            image:''
        },
        {
            id:2,
            title:'About',
            title2:'About',
            title3:'About',
            paragraph:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            image:require('../../../Static/img/cta-bg-1.png')
        }
    ]

    return (
        <Fragment>
            <section className="about-section pad6 bg1">
                <div className="auto-container">
                    <div className="row clearfix mr0">
                        <div className="col-lg-12 pad-bot-25">
                            <div className="about-content text-center">
                                <div className="sec-title">
                                    <span className="title">About Us</span>
                                    <h2>Welcome to Ma Sharda ORG.<br></br><span>please rise your helping hand</span></h2>
                                </div>
                            </div>
                        </div>
                        <div className="row pad-top-20">
                            <div className="col-md-6 padlr0">
                                <div className="my-resume">
                                    {
                                        AboutInfo.map((item,index) => (
                                            <div data-aos="fade-down" key={item.id}>
                                                <div className="history-top"> {item.title}</div>
                                                <div className="resume-item">
                                                    <div className="resume-head">
                                                        <span className="icon-exp"><i className=" fa fa-heart"></i></span>
                                                        <div className="content-exper">
                                                            <h4>{item.title2}</h4>
                                                            <div className="history cl2">{item.title3}</div>
                                                            <div className="icon-bg">
                                                                <i className="fa fa-heart-o"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="resume-footer">
                                                        <p>{item.paragraph}</p>
                                                    </div>
                                                    {
                                                    item.image === '' ? 
                                                        "" : 
                                                        <div className="img-resume">
                                                            <img src={item.image} alt="my-history"/>
                                                        </div> 
                                                    }
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className="col-md-6 padlr0">
                                <div className="my-resume">
                                    {
                                        AboutInfo2.map((item,index) => (
                                            <div data-aos="fade-down" key={item.id}>
                                                <div className="history-top"> {item.title}</div>
                                                <div className="resume-item">
                                                    <div className="resume-head">
                                                        <span className="icon-exp"><i className=" fa fa-heart"></i></span>
                                                        <div className="content-exper">
                                                            <h4>{item.title2}</h4>
                                                            <div className="history cl2">{item.title3}</div>
                                                            <div className="icon-bg"><i className="fa fa-heart-o"></i></div>
                                                        </div>
                                                    </div>
                                                    <div className="resume-footer">
                                                        <p>{item.paragraph}</p>
                                                    </div>
                                                    {
                                                        item.image === '' ? '' : <div className="img-resume">
                                                            <img src={item.image} alt="my-history"/>
                                                        </div> 
                                                    }
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default AboutORG
