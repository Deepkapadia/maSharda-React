import React,{useEffect} from 'react'
import { Link } from 'react-router-dom'
import Aos from 'aos'
import 'aos/dist/aos.css'

function PrimaryBtn({ButtonText="Donate Now", to="/#", className=" "}) {
    useEffect(()=> {
        Aos.init({duration:1500});
    },[]);
    return (
        // Center Button Class name is "text-center"
        <div data-aos="fade-up" className={className}>
            <Link to={to} className="main-button main-button-show">{ButtonText}</Link>
        </div>
    )
}

export default PrimaryBtn
