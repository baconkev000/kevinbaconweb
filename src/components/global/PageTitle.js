import '../../styles/Title.css'
import Parens from './Parens';
import { useLocation } from 'react-router-dom';

function PageTitle() {

    function getTitleName() {
        let path = HeaderView().split("/").filter(el => el);
        if (path.length == 0) {
            path = "Welcome";
            return capitalizeFirstLetter(path);
        } else {
            path = path[path.length - 1];
            let multiWordPath = path.split("-")
            if (multiWordPath.length > 1) {
                let newPath = "";
                multiWordPath.forEach(word => {
                    newPath += capitalizeFirstLetter(word)
                });
                return newPath
            } else {
                return capitalizeFirstLetter(path)
            }
        }
    }

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    function HeaderView() {
        const location = useLocation();
        return location.pathname;
    }


    return (

        <div className="h1-style d-flex flex-direction-row">
            <span className="quinary-accent-color">class</span><span>&nbsp;{getTitleName()}</span><Parens func={true} />
        </div>
    )
}

export default PageTitle;