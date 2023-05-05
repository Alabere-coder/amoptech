import { useState, useEffect } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { sliderData } from "./slider/SliderData";
import Image from 'next/image';
import styles from '../styles/AutoSlide.module.css'
import Banner from "./Banner";


// interface AutoSlideProps {
//   slideInterval: number;
//   delay: number;
// }


const AutoSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slideLength = sliderData.length;

    const autoScroll = true;
    let slideInterval: NodeJS.Timer | undefined;
    const intervalTime = 5000;

    const nextSlide = () => {
        setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
        console.log("next");
    };

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
        console.log("prev");
    };

    function auto() {
        slideInterval = setInterval(nextSlide, intervalTime);
    }

    useEffect(() => {
        setCurrentSlide(0);
    }, []);

    useEffect(() => {
        if (autoScroll) {
            auto();
        }
        return () => clearInterval(slideInterval);
    }, [currentSlide]);

    return (
        <div className={styles.banner__container}>
            <div className="slider__container">
                <div className="slider">
                    <AiOutlineArrowLeft className="arrow prev" onClick={prevSlide} />
                    <AiOutlineArrowRight className="arrow next" onClick={nextSlide} />
                    {sliderData.map((slide, index) => {
                        return (
                            <div
                                className={index === currentSlide ? "slide current" : "slide"}
                                key={index}
                            >
                                {index === currentSlide && (
                                    <div style={{  width: '800px', borderRadius: '10px', overflow: 'hidden', height: '500px', position:"relative"}}>
                                        <Image src={slide.image} fill style={{objectFit:"cover"}} alt="slide" className={styles.image} />
                                        <div className="content">
                                            <h2>{slide.heading}</h2>
                                            <p>{slide.desc}</p>
                                            <hr />
                                            <button className="btn btn-primary">Get Started</button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
            <Banner />
        </div>
        
        
    );
};

export default AutoSlider;