import React from 'react'

function WhyChooseUs() {
    return (
        <div className="choose-us-area section-padding">
		<div className="container">
			<div className="row">
                <div className="col-lg-12 pad-bot-25">
                <div className="about-content text-center">
                    <div className="sec-title">
                        <span className="title">You can join us</span>
                        <h2>Our<span>Speciality</span></h2>
                    </div>
                </div>
                </div>
			</div>
			<div className="row">
				<div className="col-lg-6">
					<div className="choose-us-bg">
						<img src={require('../../../Static/img/whyChooseUs.jpg')} alt=""/>
					</div>
				</div>
				<div className="col-lg-6">
					<div className="choose-us-content">
						<h5>Why Join us</h5>
						<p>We’re a non-profit organisation on a mission to see the youth of Vrygrond equipped & empowered to live with dignity</p>
						<div className="single-choose-item">
							<i className="las la-user-alt"></i>
							<div className="single-choose-content">
								<h6>Serve the People</h6>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium</p>
							</div>
						</div>

						<div className="single-choose-item">
							<i className="las la-thumbs-up"></i>
							<div className="single-choose-content">
								<h6>Make a better world</h6>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium</p>
							</div>
						</div>

						<div className="single-choose-item">
							<i className="lar la-heart"></i>
							<div className="single-choose-content">
								<h6>Get a happy life</h6>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
    )
}

export default WhyChooseUs
