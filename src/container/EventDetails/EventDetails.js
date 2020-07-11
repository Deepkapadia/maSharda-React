import React, { Fragment } from 'react'
import EventDescription from './Components/EventDescription'
import PastEvent from './Components/PastEvent'
import Breadcroumb from '../../components/Breadcroumb/Breadcroumb'
import withScrollHOC from '../../HOC/ScrollHOC'

function EventDetails() {
    return (
        <Fragment>
            <Breadcroumb name="Event Details"/>
            <div className="event-area section-padding">
                <div className="container">
                    <div className="row">
                        <EventDescription/>
                        <PastEvent/>                
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default withScrollHOC(EventDetails)
