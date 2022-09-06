import React, { useEffect } from "react";
import { certificationData } from "../../dummyData";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Certification.scss";

const Certification = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
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
      <section className="certification_section ">
        {certificationData.map((item) => (
          <div
            className="certification_container"
            key={item.id}
            data-aos="fade-right"
          >
            {/* Certification Contents starts from here */}

            <div className="certification_item_content">
              <div className="certification_item_img">
                <img src={item.image} alt="bgImage" />
              </div>

              <div className="certification_title">
                <h4>{item.title}</h4>
              </div>
              <div className="certification_desc">
                <p>{item.desc}</p>
              </div>

              <div className="certification_btn">
                <button className="common_btn_one">Learn More</button>
              </div>
            </div>
            {/* Certification Contents ends here */}
          </div>
        ))}
      </section>
    </>
  );
};

export default Certification;
