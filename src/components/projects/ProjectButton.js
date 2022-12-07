import MemberAccess from "../global/MemberAccess";
import { Link } from 'react-router-dom'
import { gsap } from "gsap";
import { useEffect } from 'react';
import projectsObejctList from "./ProjectsList";

function ProjectButton(props) {
    let buttonsMap = props.links;
    let buttonMapSize = buttonsMap.size;
    let buttonCols = props.cols;
    let spacing = 12 / buttonCols;
    let colSpacing = "col-lg-" + spacing;
    
    useEffect(() => {
        let tl = gsap.timeline();
        for (let i = 0; i < buttonMapSize; i++){
            let pButtonID = ".p-button-" + i;
            tl.fromTo(pButtonID, { y: "-1000" }, { y: "0" })
        }
        tl.duration(.5)
    });

    function createProjectsHTML() { 
        let i = 0;
        let buttonList = [];
        buttonsMap.forEach((value, key) => {
            buttonList.push(createProjectButton(key, value, i));
            i++;
        })
        return buttonList;
    }
    function createProjectButton(name, link, i) {
        return link == null ? // checking if external link is present
            (
            <div className={colSpacing} key={name}>
                <Link className={`button-box-container p-button-${i}`} to={"/projects/" + name.toLowerCase()}>
                <MemberAccess members={props.addThis ? ["this " + name] : [name]} /></Link>
            </div>
            )
            :
            (
                <div className={colSpacing} key={name}>
                    <a className={`button-box-container button-box-link p-button-${i}`} href={link} target="_blank">
                            <MemberAccess members={props.addThis ? ["this " + name] : [name]} /></a>
            </div>
            )
    }

    return (
        <div>
            <div className="container">
                <div className="row gy-4">
                    {createProjectsHTML()}
                </div>
            </div>
        </div>
    )
}

export default ProjectButton;