import ima from '../../media/images/about/p3.jpg'
import Parens from '../global/Parens';
import ConstAbout from './AboutConstants';

import Typewriter from 'typewriter-effect';
import { gsap } from "gsap";

import { useEffect } from 'react';

function AboutContent() {
    const hobbies = ["basketball", "golf", "bowling", "weight_lifting", "art",
        "music_prod", "coding", "..."];

    useEffect(() => {
        let tl = gsap.timeline();
        tl.fromTo(".about-sub-title", { y: "-1000" }, { y: "0" })

            .fromTo(".about-summary", { x: "-1000" }, { x: "0" })
            .fromTo(".img-styles", { opacity: "0" }, { opacity: "100%" })
            .duration(.75)

    });
    
    function getHobbies(){
        let hobbiesListHTML = [];
        let i = 0;
        hobbies.forEach(h => {
            hobbiesListHTML.push(
                    <span key={h}>
                        <span className="tertiary-accent-color">{h}</span>{ i !== hobbies.length-1 ? <span>, </span> : null}
                    </span>
                )
            i++;
        });
        return hobbiesListHTML;
    }
    
    return (
        <div className="container">
        <div className="row about-content">
            <div className="col-sm-8">
                <div className="dev-header">
                        <span className="tertiary-accent-color">def</span> <span className="septenary-accent-color">Bio</span><Parens func={true}/>
                </div>
                <div className="add-indent code-line">
                <div>
                    <div className="about-sub-title" >
                        <span className="secondary-accent-color">name </span>=
                        <span className="accent-color"> <strong>Kevin_Bacon</strong></span>
                    </div>
                </div>
                    <div className='about-summary'>
                            <div className="add-indent code-line">
                                <ConstAbout ap="1" />
                            </div>
                        <p>
                            <span className="secondary-accent-color">hobbies </span>=<span className="accent-color"> [</span>
                                {getHobbies()}<span className="accent-color"> ] </span>
                            </p>
                        <div className="add-indent code-line">
                                <ConstAbout ap="2" className="ap-2"  />
                                <ConstAbout ap="3" className="ap-3"/>
                        
                        <p>
                            This site is a small representation of who I am and what I enjoy doing. I hope you enjoy the site!
                        </p>
                    </div>
                </div>
                </div>
            </div>
            <div className="col-sm-4">
                <div className="d-flex d-flex align-items-center flex-column">
                        <img src={ima} className="img-styles" alt="my face" />
                    <div className="job-title d-flex align-items-center flex-column"><span className="quaternary-accent-color">return</span> <Typewriter
                                    onInit={(typewriter) => {
                                        typewriter.typeString("Full Stack Software Engineer")

                                        .start();
                                    }}
/></div>
                </div>
            </div>
            </div>
            </div>
    )
}

export default AboutContent;