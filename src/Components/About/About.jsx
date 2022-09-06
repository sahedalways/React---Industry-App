import React, { useEffect } from "react";
import aboutImg from "../../images/one-step-img.png";
import AOS from "aos";
import "aos/dist/aos.css";
import "./About.scss";
import { Container } from "react-bootstrap";

const About = () => {
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
      <section id="about_section">
        <Container>
          <div className="about_container">
            <div className="about_section_left">
              {/* About left Image starts from here */}
              <div className="about__orion__image">
                <img data-aos="zoom-in-up" src={aboutImg} alt="About_Image" />
              </div>
              {/* About left Image ends here */}
            </div>
            {/* About right content starts from here */}
            <div className="about_section_right">
              <div className="about__content__title">
                <h3>Your One Stop Safety Shop</h3>
              </div>

              <div className="about__content__desc">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Numquam, itaque atque possimus tempore quasi officiis, commodi
                  animi fugit temporibus ipsa autem ea molestias deleniti alias
                  ab nostrum! Assumenda officia minima minus ut ullam repellat,
                  blanditiis optio! Beatae accusantium qui corporis dolore
                  placeat ducimus facilis, ullam sequi rerum dolores eaque non
                  <p className="mt-4">
                    voluptatibus dicta provident deserunt officiis accusamus,
                    tempore eius earum maiores. Ducimus omnis illum quam
                    possimus rem officia, quasi magni ea sequi harum unde?
                    Accusamus, laudantium. Et totam, labore dolorem vitae
                    excepturi hic! Non molestiae modi fuga nisi tenetur expedita
                    ut tempore facilis quos molestias? Harum illo cum quo
                    temporibus ratione!
                  </p>
                </p>
              </div>

              <div className="about__content__btn">
                <button className="common_btn_one" data-aos="fade-right">
                  Learn More
                </button>
                <button className="common_btn_two" data-aos="fade-left">
                  Get In Touch
                </button>
              </div>
            </div>
          </div>
          {/* About right content ends here */}
        </Container>
      </section>
    </>
  );
};

export default About;
