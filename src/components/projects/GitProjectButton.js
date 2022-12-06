import MemberAccess from "../global/MemberAccess";
import { gsap } from "gsap";
import { useEffect } from 'react';
import projectsObejctList from "./ProjectsList";

function GitProjectButton(props) {
    let buttonCols = props.cols;
    let spacing = 12 / buttonCols;
    let colSpacing = "col-lg-" + spacing;
    
    useEffect(() => {
        let tl = gsap.timeline();
        for (let i = 0; i < projectsObejctList.length; i++){
            let pButtonID = ".p-button-" + i;
            tl.fromTo(pButtonID, { y: "-1000" }, { y: "0" })
        }
        tl.duration(.5)
    });

    function createGitHubButtons() {
        let gitProjectsList = [];
        let i = 0;
        projectsObejctList.forEach(project => {
            gitProjectsList.push(
                <div className={colSpacing} key={project.name}>
                    <div className="button-box-container flex-column">
                    <a className={`button-box-link p-button-${i}`} href={project.link} target="_blank">
                            <MemberAccess members={props.addThis ? ["this " + project.name] : [project.name]} /></a>
                        <div className="pb-description">{project.description}</div>
                        <div className="pb-short-description">{project.short_description}</div>
                        </div>
                </div>
            )
            i++;
        })
        return gitProjectsList;
    }

    return (
        <div>
            <div className="container">
                <div className="row gy-4">
                    {createGitHubButtons()}
                </div>
            </div>
        </div>
    )
}

export default GitProjectButton;