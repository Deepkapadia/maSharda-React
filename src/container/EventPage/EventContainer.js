import React, { Fragment } from 'react'
import Breadcroumb from '../../components/Breadcroumb/Breadcroumb'
import EventCatagory from './Components/EventCatagory'
import EventsAll from './Components/EventsAll'
import BeforeFooterSection from '../../components/BeforeFooterSection/BeforeFooterSection';
import withScrollHOC from '../../HOC/ScrollHOC'

function EventContainer (){
    return (
        <Fragment>
            <Breadcroumb name="Events"/>
            <EventCatagory/>
            <EventsAll/>
            <BeforeFooterSection/>
        </Fragment>
    )
}

export default withScrollHOC(EventContainer)
