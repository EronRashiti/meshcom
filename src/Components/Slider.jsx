import React from 'react';
import SimpleImageSlider from "react-simple-image-slider";
import img1 from '../Assets/it_service_slider.png';
import img2 from '../Assets/web_design_slider.png';
import img3 from '../Assets/web_development_slider.png';

const images = [
    { url: [img1]},
    { url: [img2]},
    { url: [img3]}
  ];

function Slider() {
    return (
        <div>
            <SimpleImageSlider
        width={800}
        height={550}
        images={images}
        showBullets={false}
        showNavs={true}
        bgColor={false}
        navStyle={2}
      />
        </div>
    )
}

export default Slider;
