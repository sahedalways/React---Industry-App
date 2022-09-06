import { useEffect } from "react";
import contentImg from "../../images/one-step-img.png";
import AOS from "aos";
import "aos/dist/aos.css";
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
      <section id="content">
        <div className="container content__container">
          <div className="content__orion" data-aos="fade-right">
            {/* content left content starts from here */}
            <div className="content__item">
              <div className="content__item__title">
                <h3>Your One Stop Safety Shop</h3>
              </div>
              <div className="content__item__desc">
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

              <div className="content__item__btn">
                <button className="common_btn_one">Learn More</button>
                <button className="common_btn_two">Get In Touch</button>
              </div>
            </div>

            {/* content left ends here */}
          </div>
          {/* content right Image starts from here */}

          <div className="content__orion__image">
            <img data-aos="zoom-in-up" src={contentImg} alt="content_Image" />
          </div>

          {/* content right image ends here */}
        </div>
      </section>
    </>
  );
};

export default Content;
