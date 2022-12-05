import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import artArray from "./ArtArray";


function Art() {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 768 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 768, min: 464 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };
    let pieces = artArray;
    function createCarousel(){
        let images = [];
        pieces.forEach(piece => {
            images.push(
                <div key={ piece} className="art-container">
                    <img src={piece} className="art-img" />
                </div>
            )
        })
        return images;
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
            </Carousel>;
        </div>
    );
}

export default Art;