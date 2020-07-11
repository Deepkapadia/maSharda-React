import React, {  useState, useEffect  } from 'react'
import { NavLink, Link } from 'react-router-dom';
import logo from '../../Static/img/Logo.png'

function Header() {
    
    const [header, setHeader] = useState("header-area absolate-header")
    const [btnClass , setBtnClass] = useState('collepsed')
    const [menuClass ,setMenuClass] = useState('')

    function btnClassHandler(){
        if (btnClass === 'collepsed'){
            return setBtnClass('active') 
        }else if (btnClass === 'active'){
            return setBtnClass('collepsed')
        }
    }

    function menuClassHandler() {
        if (btnClass === 'active' && menuClass === 'show') {
            return setMenuClass('') && setBtnClass('collepsed')
        }else {
            return setMenuClass('show')
        }
    }

    const listenScrollEvent = event => {
        if (window.scrollY < 73) {
            return setHeader("header-area absolate-header");
        } else if (window.scrollY > 70) {
            return setHeader("header-area2 sticky-header2");
        }
    };
    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent);
        return () => window.removeEventListener("scroll", listenScrollEvent);
    }, []);

    return (
        <div className={`${header} theme-2`}>
            <div className="sticky-area" >
                <div className="navigation">
                    <div className="row">
                        <div className="col-lg-2">
                            <div className="logo">
                                <Link to="/" className="navbar-brand" href="/#">
                                    <img src={logo} alt="logo"/>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="main-menu">
                                <nav className="navbar navbar-expand-lg">
                                    <button className={`navbar-toggler ${btnClass}`} type="button" onClick={btnClassHandler} data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon"></span>
                                        <span className="navbar-toggler-icon"></span>
                                        <span className="navbar-toggler-icon"></span>
                                    </button>
                                    <div className={`collapse ${menuClass} navbar-collapse justify-content-center`} id="navbarSupportedContent">
                                        <ul className="navbar-nav m-auto">
                                            <li className="nav-item">
                                            <NavLink to="/" onClick={menuClassHandler} exact={true} className="nav-link" activeClassName="active" href="/#">Home
                                                </NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink to="/about" onClick={menuClassHandler} className="nav-link" activeClassName="active" href="/#">About</NavLink>
                                            </li>
                                            <li className="nav-item">
                                            <NavLink to="/ourwork" onClick={menuClassHandler} className="nav-link" activeClassName="active" href="/#">Our Work
                                                </NavLink>
                                            </li>
                                            <li className="nav-item">
                                            <NavLink to="/events" onClick={menuClassHandler} className="nav-link" activeClassName="active" href="/#">Events
                                                </NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink to="/contact" onClick={menuClassHandler} className="nav-link" activeClassName="active" href="/#">Contact</NavLink>
                                            </li>
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="social">
                                <a href="/#"><i className="la la-facebook"></i></a>
                                <a href="/#"><i className="la la-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Header
