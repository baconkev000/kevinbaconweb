import '../../styles/Projects.css';
import ProjectButton from './ProjectButton';
import GitProjectButton from './GitProjectButton';
import Parens from '../global/Parens';

function Projects() {
    let funProjects = [
        [ "Art", null ],
        ["Video",null],
    ];

    return (
        <div className='content-body'>
            <div className="container">
                <div className="row gy-4">
                    <div className="dev-header">
                        <span className="tertiary-accent-color">def</span> <span className="septenary-accent-color">Github_Projects</span><Parens func={true}/>
                    </div>
                    <GitProjectButton addThis={true} cols={2} />
                    <div className="dev-header">
                        <span className="tertiary-accent-color">def</span> <span className="septenary-accent-color">Media_Projects</span><Parens func={true}/>
                    </div>
                    <ProjectButton addThis={true} links={new Map(funProjects)} cols={2} github={false} />
                </div>
            </div>
        </div>
    )
}

export default Projects;