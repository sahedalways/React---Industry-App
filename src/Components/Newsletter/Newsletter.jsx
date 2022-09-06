import { useEffect } from "react";
import Container from "react-bootstrap/Container";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Newsletter.scss";

const Newsletter = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
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
      <section className="newsletter_section" data-aos="fade-top">
        <Container>
          <div className="newsletter_container">
            <div className="newsletter_title">
              <h4>Newsletter</h4>
            </div>
            <div className="newsletter_desc">
              <h6>
                Stay connected! Subscribe to our newsletter to stay informed of
                all the latest products and services.
              </h6>
            </div>

            <div className="newsletter_btn">
              <button className="common_btn_three">Sign Up</button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Newsletter;
