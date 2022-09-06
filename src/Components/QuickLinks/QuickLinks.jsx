import React, { useEffect } from "react";
import { quickLinksData } from "../../dummyData";
import AOS from "aos";
import "aos/dist/aos.css";
import "./QuickLinks.scss";

const QuickLinks = () => {
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
      <section className="quickLinks_section" data-aos="fade-bottom">
        {quickLinksData.map((item) => (
          <div fluid className="quickLinks_container" key={item.id}>
            {/* QuickLinks img starts from here */}
            <div id="quickLinks_item_bg_img">
              <img src={item.image} alt="bgImage" />

              {/* QuickLinks Contents starts from here */}
            </div>
            <div className="quickLinks_item_content">
              <div className="quickLinks_icons">
                <img src={item.icon} alt="icon" />
              </div>
              <div className="quickLinks_title">
                <h4>{item.title}</h4>
              </div>
              <div className="quickLinks_desc">
                <h6>{item.desc}</h6>
              </div>

              <div className="quickLinks_btn">
                <button className="common_btn_one">Learn More</button>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default QuickLinks;
