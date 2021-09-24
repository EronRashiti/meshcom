import React from "react";
import { Carousel } from "react-responsive-carousel";
import Sliderimg1 from '../Assets/objektbetreuung24.webp';
import Sliderimg2 from '../Assets/ekena.webp';
import Sliderimg3 from '../Assets/dekowelt.webp';
import Sliderimg4 from '../Assets/addach.webp';
import Sliderimg5 from '../Assets/thaqi.webp';
import Sliderimg6 from '../Assets/19er-velvet.webp';


export default () => (
  <Carousel autoPlay>
    <div>
      <img alt="" src={Sliderimg1} />
      <a href="http://objektbetreuung24.at" className="legend">Objektbetreuung 24</a>
    </div>
    <div>
      <img alt="" src={Sliderimg2} />
      <a href="https://ekena.at" className="legend">EKENA</a>
    </div>
    <div>
      <img alt="" src={Sliderimg3} />
      <a href="https://www.dekowelt.org" className="legend">MICHALEAS DEKOWELT</a>
    </div>
    <div>
      <img alt="" src={Sliderimg4} />
      <a className="legend">AD PROFISCHWARZDECKEREI</a>
    </div>
    <div>
      <img alt="" src={Sliderimg5} />
      <a href="https://tht-trockenbau.at" className="legend">THT Thaci Trockenbau GmbH</a>
    </div>
    <div>
      <img alt="" src={Sliderimg6} />
      <a href="https://19erbroetchenbox.at" className="legend">19er Broetchen Box</a>
    </div>
  </Carousel>
);
