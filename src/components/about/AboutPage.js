import AboutContent from './AboutContent.js';
import Skills from './skills/Skills.js';
import '../../styles/About.css'

function AboutPage() {

    return (
        <div className='content-body'>
            <div className="row gy-3">
                <AboutContent />
                <Skills />
            </div>
        </div>
    )
}

export default AboutPage;