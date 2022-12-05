import '../../styles/Nav.css';
import Brackets from './Brackets';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom'
import PageTitle from './PageTitle';
import resumePDF from '../../media/docs/Kevin_Bacon_Resume_2022.pdf'



function Nav() {
    const [navLinks, updateNavLinks] = useState([]);
    const navLinkNames = ["about", "projects"];
    const location = useLocation()
    const homePage = navLinkNames[0];

    useEffect(() => {
        const path = getPath();
        createNavLinks(path[path.length-1]);
    }, [location.pathname]);

    function createNavLinks(currentPage) {
        let linksArray = [];
        let active = true;
        let currentLink = navLinkNames.filter(link => link === currentPage);
        navLinkNames.forEach(link => {
            // if the the current link is not the home page
            if (currentLink.length !== 0) {
                // active is true if the link is the current link
                active = link === currentLink[0] ? true : false;
            } else {
                
                // if any in getpath === any in navlinkNames then select rightmost link and make active
                let match = navLinkNames.filter(link => getPath().includes(link));
                match = match.length !== 0 ? match[match.length - 1] : homePage;
                active = link === match ? true : false;
            }
            
            linksArray.push(
                <li className="nav-item" key={link} onClick={() => createNavLinks(link)}>
                    <Link className="nav-link" to={"/" + link}><Brackets name={capitalizeFirstLetter(link)} active={ active }></Brackets></Link>
                </li>
            )
        });

        return updateNavLinks(linksArray);
    }

    function getPath() {
        let path = location.pathname;
        return path.split("/").filter(element => element);
    }

    function getGoBackPath() {
        let path = getPath();

        if (path.length <= 1) {
            return false
        }

        delete path[path.length - 1];
        path = path.join("/");
        return path
    }

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return (

        <>
            {getPath() == "" ||  getPath() == "welcome" ?
                <></>
                :
                <>
            <div className='row'>
                        <nav className="navbar navbar-expand-lg navbar-dark sticky-top nav-color">
                            <Link className="navbar-brand" to="/"><Brackets name="KB" active='true'></Brackets></Link>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div id="nav" className="collapse navbar-collapse nav-right">
                                <ul className="navbar-nav">
                                    {navLinks}
                                    <li className="nav-item" key="resume" onClick={() => createNavLinks("resume")}>
                                        <a className="nav-link" href={resumePDF} target="_blank"><Brackets name={capitalizeFirstLetter("resume")} active={false}></Brackets></a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
            <div className="row">
                <div className="col-6">
                    <PageTitle></PageTitle></div>
                <div className="col-6">
                                
                {   
                    getGoBackPath() !== false ? 
                    <div className="nav-link d-flex justify-content-center justify-content-sm-end">
                        <div className="nav-item" onClick={() => createNavLinks("goback")}>
                            <Link id="go-back" className="nav-link" to={getGoBackPath()}><Brackets name={"< Go Back"} active={false} /></Link>
                        </div>
                    </div>
                        :
                        <></>
                }
                </div>
                    </div>
                    </>
            }
                    
        </>
    )
}

export default Nav;