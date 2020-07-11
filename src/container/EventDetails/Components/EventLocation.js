import React from 'react'

function EventLocation() {

    return (
        <div>
            <h5>Event Location </h5>
            <div className="row">
                <div className="col-md-12">
                    <div className="map-section">
                        <iframe title="ORG Location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14883.85882805293!2d72.79944028593245!3d21.153802774891073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be051ffd68cfdfd%3A0x50eef593fa09ce97!2sAlthan%2C%20Surat%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1593778821646!5m2!1sen!2sin"
                            width="600" height="450" frameBorder="0" style={{border:'0'}}
                            allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
                        <i className="las la-map-marker-alt"></i>
                    </div>
                </div>
            </div>
        </div>  
    )
}

export default EventLocation
