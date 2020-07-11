import React,{Fragment} from 'react'
import HeroSlider from './HeroSlider/HeroSlider';
import About from './AboutSection/About';
import OurDoners from './OurDoners/OurDoners';
import WhatWeDo from './WhatWeDo/WhatWeDo';
import Achivements from './Achivements/Achivements';
import RecentEvents from './RecentEvents/RecentEvents'; 
import withScrollHOC from '../../HOC/ScrollHOC'

function Home() {
    return (
        <Fragment>
            <HeroSlider/>
            {/* About Section */}
            <About/>
            <OurDoners/>
            <WhatWeDo/>
            <Achivements/>
            <RecentEvents/>
        </Fragment>
    )
}

export default withScrollHOC(Home)
