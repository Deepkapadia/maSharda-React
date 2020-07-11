import React,{Fragment} from 'react'
import OurMission from './Components/OurMission'
import AreaOfWork from './Components/AreaOfWork'
import OurRecentWork from './Components/OurRecentWork'
import WorkGallery from './Components/WorkGallery'
import BeforeFooterSection from '../../components/BeforeFooterSection/BeforeFooterSection'
import Breadcroumb from '../../components/Breadcroumb/Breadcroumb'
import withScrollHOC from '../../HOC/ScrollHOC'

function OurWork() {
    return (
        <Fragment>
            <Breadcroumb name="Our Work"/>
            <OurMission/>
            <AreaOfWork/>
            <OurRecentWork/>
            <WorkGallery/>
            <BeforeFooterSection/>
        </Fragment>
    )
}

export default withScrollHOC(OurWork)
