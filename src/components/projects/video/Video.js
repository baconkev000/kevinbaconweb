import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import "../../../styles/Carousel.css"
import videoObject from "./VideoArray";

function Video() {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };
    function createCarousel() {
        let videos = [];
        new Map(videoObject.local).forEach((value, key) => {
            videos.push(
            <div className="iframe-container" key={key}>
                    <video className="iframe" src={value} title="YouTube video player" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen controls></video>
            </div>
            )
        })
        new Map(videoObject.external).forEach((value, key) => {
            videos.push(
            <div className="iframe-container" key={key}>
                    <iframe className="iframe" src={value} title="YouTube video player" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
            )
        })
        return videos;
    }

    return (

        <div>
            <Carousel 
swipeable={false}
  draggable={false}
  showDots={true}
  responsive={responsive}
    ssr={true}
    infinite={true}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={500}
  containerClass="carousel-container">
            {createCarousel()}
            </Carousel>
            <div className="row d-flex justif-content-center video-helper">
                <p>Note - Some videos make take a minute to load.</p>
            </div>
        </div>
    );
}

export default Video;