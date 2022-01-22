import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './slider.css'
import Carousel1 from '../../assets/Gallery11.jpg'
import Carousel2 from '../../assets/Gallery49.jpg'
import Carousel3 from '../../assets/Gallery73.jpg'
import Carousel4 from '../../assets/Gallery96.jpg'


  const Slider = (props) =>  {


    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      }
    };

   


    return (

      <div className="slice__slider_carousel">
      <Carousel swipeable={true}
      draggable={false}
      showDots={true}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      keyBoardControl={true}
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      deviceType={props.deviceType}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px">
      <div className = "slice__slider_carousel-image"><img src={Carousel1} alt="pizza"/></div>
      <div className = "slice__slider_carousel-image"><img src={Carousel2} alt="pizza"/></div>
      <div className = "slice__slider_carousel-image"><img src={Carousel3} alt="pizza"/></div>
      <div className = "slice__slider_carousel-image"><img src={Carousel4} alt="pizza"/></div>
      </Carousel>
      </div>
    
    
    )
  
}

  export default Slider;
