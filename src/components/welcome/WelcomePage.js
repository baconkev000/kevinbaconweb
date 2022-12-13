import Typewriter from 'typewriter-effect';
import '../../styles/Welcome.css'
import { Link } from 'react-router-dom';
import MemberAccess from '../global/MemberAccess';
import resumePDF from "../../media/docs/Kevin_Bacon_Resume_2022.pdf"

function WelcomePage() {
    return (
        <div className="welcome-container d-flex flex-column justify-content-center">
            
            <div className="row">
                <div className="welcome-text d-flex align-items-center flex-direction-row justify-content-center">
                   
                <Typewriter
                        onInit={(typewriter) => {
                            typewriter.typeString("Kevin Bacon Web")
                            .start();
                            }}
                     />
                    </div>
            </div>
            <div className='row gy-2'>
                <div className='col-md'>
                    <Link className={"welcome-btn"} to={"/about"}>
                <MemberAccess members={["View " + "About"]} /></Link>
                </div>
                                <div className='col-sm'>
                    <Link className={"welcome-btn"} to={"/projects"}>
                <MemberAccess members={["View " + "Projects"]} /></Link>
                </div>
                <div className='col-sm'>
                    <a className={"welcome-btn"} href={resumePDF} target="_blank">
                <MemberAccess members={["View " + "Resume"]} /></a>
                </div>
            </div>
        </div>
    )
}

export default WelcomePage;