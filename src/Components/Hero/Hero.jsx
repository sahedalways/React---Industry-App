import React, { useEffect } from "react";
import Slider from "react-slick";
import { SliderData } from "../../dummyData";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Hero.scss";

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplayspeed: 3000,
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      disable: false,
      startEvent: "DOMContentLoaded",
      offset: 120,
      easing: "ease",
      mirror: false,
      anchorPlacement: "top-bottom",
    });
  }, []);

  return (
    <>
      <section className="slider_section">
        <Slider {...settings}>
          {SliderData.map((item) => (
            <div key={item.id}>
              <div className="slider_wrapper">
                <div className="slider_img ">
                  <img src={item.imgUrl} alt="sliderImg" />
                </div>

                <div className="slider_content common_container text-center">
                  <h1 data-aos="slide-down" className="slider_title">
                    {item.title}
                  </h1>
                  <h2 data-aos="slide-left" className="slider_desc">
                    {item.desc}
                  </h2>
                  <button
                    data-aos="slide-up"
                    className="common_btn_three hero_btn"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>
    </>
  );
};

export default Hero;
