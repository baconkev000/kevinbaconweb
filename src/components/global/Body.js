import AboutPage from "../about/AboutPage";
import Nav from "./Nav";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Projects from "../projects/Projects";
import Art from "../projects/art/Art";
import WelcomePage from "../welcome/WelcomePage";
import Video from "../projects/video/Video";
import PageNotFound from "./PageNotFound";
import FormPage from "../../temp/form";

function Body() {
    return (
        <div className="container">
            <Router>
                    <Nav></Nav>
                <Routes>
                    <Route path="/" element={<WelcomePage />}></Route>
                    <Route path="/welcome" element={<WelcomePage />}></Route>
                    <Route path="/about" element={<AboutPage />}></Route>
                    <Route path="/projects" element={<Projects />}></Route>
                    <Route path="/projects/art" element={<Art />}></Route>
                    <Route path="/projects/video" element={<Video />}></Route>
                    <Route path="/form" element={<FormPage />}></Route>
                    <Route path="*" element={<PageNotFound />}></Route>
                </Routes>
            </Router>
        </div>
    )
}

export default Body;