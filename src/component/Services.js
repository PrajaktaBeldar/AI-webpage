import React from 'react'; 
import "../style/Services.scss";
import {Carousel} from "react-responsive-carousel";
import img from "../images/3.jpg";
import img1 from "../images/4.jpg"; 
const Services = () => { 
  return (
    <div>
        <Carousel infiniteLoop autoPlay showStatus={false} showArrows={false}
        showThumbs={false} interval={1000}
        >
            <div>
                <img src={img} alt="Item1" />
                <p className="legend">Full stack</p>
            </div>

            <div>
                <img src={img1} alt="Item1" />
                <p className="legend">Full stack</p>
            </div>
        </Carousel>
    </div>
  )
}

export default Services;