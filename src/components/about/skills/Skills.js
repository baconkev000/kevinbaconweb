import '../../../styles/Skills.css';
import { gsap } from "gsap";
import skillsList from './SkillsList';
import Parens from '../../global/Parens';
import MemberAccess from '../../global/MemberAccess';


function Skills() {
    const languages = skillsList.languages;
    const libraries = skillsList.libraries;
    const frameworks = skillsList.frameworks;
    const tools = skillsList.tools;

    function barAnimation(skillCollection) {
        let tl = gsap.timeline();
        tl.duration(.5)
        
        skillCollection = new Map(skillCollection);
        skillCollection.forEach((value, key) => {
            let anID = `.an-${key}`;
            tl.duration(.5)
            tl.fromTo(anID, { width: "0%" }, { width: `${value}%` }, { duration: 1 })
        });
    }

    function createBar(barArray) {
        let ar = new Map(barArray);
        let barOutput = [];
        ar.forEach((value, key) => {
            let percent = `${value} %`
            barOutput.push(
                    < div className = 'bar-container row' key = {key}>
                        <div className='bar-text-container bar-name col-4 d-flex align-items-center justify-content-center'>
                            <span className='bar-text'><strong>{key}</strong></span>
                        </div>
                        <div className='bar-fill-container col col-xs-12'>
                            <div className={`bar-fill an-${key} w-${value}`} >
                                <span className='invisible-placeholder'>IP</span>
                            </div>
                        </div>
                        <div className='col-1 percent-num-container'>
                            <span className='align-self-end percent-num'><strong>{percent}</strong></span>
                        </div>
                    </div >
                );
            })
        return barOutput;
    }

    return (
        <div className='skills-container'>
            <div className="dev-header">
                        <span className="tertiary-accent-color">def</span> <span className="septenary-accent-color">Technical_Skills</span><Parens func={true}/>
                    </div>
            <div className="container">
                <div className="row">
                    <div className="accordion" id="accordionSkills">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                    <button onClick={() => barAnimation(languages) } id="languages" className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#aLanguages" aria-expanded="false" aria-controls="aLanguages">
                        <MemberAccess members={["View " + "Languages"]} />
                    </button>
                    </h2>
                    <div id="aLanguages" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionSkills">
                    <div className="accordion-body">
                        {createBar(languages) }</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                    <button onClick={() => barAnimation(libraries) } id="libraries" className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#aLibraries" aria-expanded="false" aria-controls="aLibraries">
                        <MemberAccess members={["View " + "Libraries"]} />
                    </button>
                    </h2>
                    <div id="aLibraries" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionSkills">
                    <div className="accordion-body">
                        {createBar(libraries) }</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                    <button onClick={() => barAnimation(frameworks) } id="frameworks"className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#aFrameworks" aria-expanded="false" aria-controls="aFrameworks">
                        <MemberAccess members={["View " + "Frameworks"]} />
                        
                    </button>
                    </h2>
                    <div id="aFrameworks" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionSkills">
                    <div className="accordion-body">
                        {createBar(frameworks) } </div>
                    </div>
                    </div>
                    <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                    <button onClick={() => barAnimation(tools) } id="tools"className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#aTools" aria-expanded="false" aria-controls="aTools">
                        <MemberAccess members={["View " + "Tools"]} />
                    </button>
    </h2>
                            <div id="aTools" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionSkills">
                                <div className="accordion-body">
                                    {createBar(tools) } </div>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default Skills;