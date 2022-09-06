import Container from "react-bootstrap/Container";
import { GoLocation } from "react-icons/go";
import { BiPhone } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";
import "./Header.scss";
import Navbar from "../Navbar/Navbar";

const Header = () => {
  return (
    <>
      <header className="header">
        <Container className="headerContainer">
          {/* Header left starts */}
          <div className="header_left">
            <div className="header_left_location">
              <div className="common_icon">
                <GoLocation />
              </div>
              <div className="location_address">
                <span>1161 40th Ave NE</span>
                <ul>
                  <li>
                    <span>Calgory,Alberta</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Header left ends */}

          {/* Header middle starts */}
          <div className="header_middle">
            <div className="header_middle_phone">
              <div className="common_icon">
                <BiPhone />
              </div>
              <div className="phone_text">
                <span>(403) 769 - 1799</span>
              </div>
            </div>
            <div className="header_middle_email">
              <div className="common_icon">
                <AiOutlineMail />
              </div>
              <div className="mail_text">
                <span>Email Us</span>
              </div>
            </div>
          </div>
          {/* Header middle ends */}
        </Container>
        <div className="header_right_social">
          <div className="common_icon">
            <FaFacebookF />
          </div>

          <div className="common_icon">
            <FaInstagram />
          </div>

          <div className="common_icon">
            <GrLinkedinOption />
          </div>
        </div>

        <Navbar />
      </header>
    </>
  );
};

export default Header;
