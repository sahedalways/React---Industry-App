import { useEffect } from "react";
import contentImg from "../../images/one-step-img.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { Container } from "react-bootstrap";
import "./Content.scss";

const Content = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
      disable: false,
      startEvent: "DOMContentLoaded",
      offset: 120,
      easing: "ease",
      mirror: false,
      anchorPlacement: "center-bottom",
    });
  }, []);

  return (
    <>
      <section id="content_section">
        <Container>
          <div className="content_container">
            {/* contents left content starts from here */}
            <div className="content_section_left">
              <div className="content__content__title">
                <h3>Your One Stop Safety Shop</h3>
              </div>

              <div className="content__content__desc">
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

              <div className="content__content__btn">
                <button className="common_btn_one" data-aos="fade-right">
                  Learn More
                </button>
                <button className="common_btn_two" data-aos="fade-left">
                  Get In Touch
                </button>
              </div>
              {/* contents left content starts from here */}
            </div>

            <div className="content_section_right">
              {/* About right Image starts from here */}
              <div className="content__orion__image">
                <img
                  data-aos="zoom-in-up"
                  src={contentImg}
                  alt="Content_Image"
                />
              </div>
              {/* content right Image ends here */}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Content;
