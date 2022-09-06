import { useEffect } from "react";
import Container from "react-bootstrap/Container";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";
import footerLogo from "../../images/logo.png";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Footer.scss";

const Footer = () => {
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
      <section className="footer_section" data-aos="fade-top">
        <Container className="footer_container">
          {/* footer left starts from here */}
          <div className="footer_left">
            <div className="footer_left_location_contact">
              <div className="footer_left_location">
                <h6>Office</h6>
                <h6>
                  161 40th Avenue NE <br /> Calgary, Alberta T2E 6M9
                </h6>
              </div>
              <div className="footer_left_contact">
                <div className="footer_left_contact_phone">
                  <h6>Phone</h6>
                  <h6>(403) 769 - 1799</h6>
                </div>
                <div className="footer_left_contact_email">
                  <h6>Email</h6>
                  <h6 className="footer_mail">info@orionsafety.com</h6>
                </div>
              </div>
            </div>

            <div className="footer_left_workdays_social">
              <div className="footer_left_workdays">
                <div className="footer_left_workdays_time">
                  <h6>Weekdays</h6>
                  <h6>8.00am - 4:30pm</h6>
                </div>

                <div className="footer_left_workdays_hour">
                  <h6>Weekdays</h6>
                  <h6>Call for hours</h6>
                </div>
              </div>
              <div className="footer_left_social">
                <h6>Social Media</h6>
                <div className="footer_socials">
                  <FaFacebookF />
                  <FaInstagram />
                  <GrLinkedinOption />
                </div>
              </div>
            </div>
          </div>
          {/* footer left ends here */}

          {/* footer right starts from here */}
          <div className="footer_right">
            <div className="footer_right_logo">
              <img src={footerLogo} alt="Footer logo" />
            </div>
          </div>
          {/* footer right ends here */}
        </Container>
      </section>
    </>
  );
};

export default Footer;
