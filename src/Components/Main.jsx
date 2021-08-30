import React from 'react';
import HeroImage from '../Assets/540 455.png';
import TextTransition, { presets } from "react-text-transition";

const TEXTS = [
    "IT Service",
    "Web Design",
    "Web Development",
    "App Development",
    "UI/UX Design",
    "Graphic Design"
  ];

function Main() {

    const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(() =>
      setIndex(index => index + 1),
      2000);
    return () => clearTimeout(intervalId);
  }, []);

    return (
        <div className="hero">
            <div className="herobg">
                <h1 className="hero-text1">Quality</h1>
                <h1 className="hero-text2">
                    <TextTransition
                    text={ TEXTS[index % TEXTS.length] }
                    springConfig={ presets.wobbly }
                    noOverflow={true}/>
                </h1>
                <img id="mainimgg" className="mainimg" src={HeroImage}/>
            </div>
        </div>
    )
}

export default Main;

