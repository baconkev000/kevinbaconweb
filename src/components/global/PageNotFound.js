import Typewriter from 'typewriter-effect';
import '../../styles/Welcome.css'

function PageNotFound() {
    return (
            <div className="row">
                <div className="welcome-text d-flex align-items-center flex-column">
                <Typewriter
                        onInit={(typewriter) => {
                            typewriter.typeString("Page Not Found")
                            .start();
                            }}
                     />
                    </div>
            </div>
    )
}

export default PageNotFound;