import React, { useRef, useState } from "react";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import { CgMenuRight } from "react-icons/cg";
import { GiSplitCross } from "react-icons/gi";
import logo from "../../images/logo.png";
import navStart from "../../images/nav-star.png";
import "./Navbar.scss";
import { navLinks } from "../../dummyData";

const Navbar = () => {
  const [navData, setNavData] = useState(navLinks);
  const [navbar, setNavbar] = useState(false);

  const [navbarChange, setNavbarChange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setNavbarChange(true);
    } else {
      setNavbarChange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);

  const menuRef = useRef();

  const menuToggle = () => menuRef.current.classList.toggle("active_menu");

  return (
    <>
      <nav className={navbarChange ? "navbarChange" : ""}>
        <Container className="navbarContainer">
          <div className="navigation">
            {/* logo area starts from here */}
            <div className="logo">
              <div className="d-flex align-items-center gap-1">
                <img src={logo} alt="logo" />
              </div>
            </div>
            {/* logo area ends here */}

            {/* Nav menu starts from here  */}

            {/* Nav menu right starts from here */}
            <div className="nav_menu" ref={menuRef}>
              <div className="nav_list_wrapper ">
                <ul
                  className={navbar ? "flex" : "nav_list"}
                  onClick={() => setNavbar(false)}
                >
                  {navData.map((item, index) => (
                    <li
                      className={
                        navbarChange ? "nav_item colorChange" : "nav-item"
                      }
                      key={index}
                    >
                      <div className="hover_on_nav">
                        <img src={navStart} alt="navStart" />
                      </div>
                      <a href={item.url} onClick={menuToggle}>
                        {item.display}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* Nav menu right ends here */}

            {/* Nav menu ends here  */}

            {/* mobile menu starts */}

            <button className="barIcon" onClick={() => setNavbar(!navbar)}>
              {navbar ? <CgMenuRight /> : <GiSplitCross />}
            </button>

            {/* mobile menu ends */}
          </div>
        </Container>
      </nav>
    </>
  );
};

export default Navbar;
